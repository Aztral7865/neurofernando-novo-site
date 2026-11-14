// Malha triangular no espírito do símbolo da Aura, calculada no build (zero JavaScript no navegador).
// Pontos com sorteio determinístico (semente fixa) + triangulação de Delaunay (Bowyer–Watson).

export type Point = { x: number; y: number };
export type Mesh = {
  width: number;
  height: number;
  points: Point[];
  /** Arestas como pares de índices, ordenadas da origem do desenho para fora. */
  edges: [number, number][];
};

type Options = {
  width: number;
  height: number;
  cols: number;
  rows: number;
  seed: number;
  /** Quanto cada ponto pode se deslocar dentro da sua célula (0 a 0,5). */
  jitter?: number;
  /** Ponto de onde a malha "nasce": define a ordem do desenho. */
  origin?: Point;
  /** Arestas maiores que isso (em múltiplos da mediana) são descartadas. */
  maxEdge?: number;
};

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Tri = { a: number; b: number; c: number; cx: number; cy: number; r2: number };

function circum(pts: Point[], a: number, b: number, c: number): Tri {
  const A = pts[a], B = pts[b], C = pts[c];
  const d = 2 * (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
  const a2 = A.x * A.x + A.y * A.y;
  const b2 = B.x * B.x + B.y * B.y;
  const c2 = C.x * C.x + C.y * C.y;
  const cx = (a2 * (B.y - C.y) + b2 * (C.y - A.y) + c2 * (A.y - B.y)) / d;
  const cy = (a2 * (C.x - B.x) + b2 * (A.x - C.x) + c2 * (B.x - A.x)) / d;
  return { a, b, c, cx, cy, r2: (A.x - cx) ** 2 + (A.y - cy) ** 2 };
}

function delaunay(input: Point[]): [number, number, number][] {
  const pts = input.slice();
  const n = pts.length;
  const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const dm = Math.max(maxX - minX, maxY - minY) * 20;
  const mx = (minX + maxX) / 2, my = (minY + maxY) / 2;
  pts.push({ x: mx - dm, y: my - dm }, { x: mx, y: my + dm }, { x: mx + dm, y: my - dm });

  let tris: Tri[] = [circum(pts, n, n + 1, n + 2)];
  for (let i = 0; i < n; i++) {
    const p = pts[i];
    const bad: Tri[] = [];
    const keep: Tri[] = [];
    for (const t of tris) {
      ((p.x - t.cx) ** 2 + (p.y - t.cy) ** 2 < t.r2 ? bad : keep).push(t);
    }
    const count = new Map<string, [number, number]>();
    const seen = new Map<string, number>();
    for (const t of bad) {
      for (const [u, v] of [
        [t.a, t.b],
        [t.b, t.c],
        [t.c, t.a],
      ] as [number, number][]) {
        const k = u < v ? `${u}-${v}` : `${v}-${u}`;
        seen.set(k, (seen.get(k) ?? 0) + 1);
        count.set(k, [u, v]);
      }
    }
    tris = keep;
    for (const [k, [u, v]] of count) {
      if (seen.get(k) === 1) tris.push(circum(pts, u, v, i));
    }
  }
  return tris.filter((t) => t.a < n && t.b < n && t.c < n).map((t) => [t.a, t.b, t.c]);
}

export function makeMesh(o: Options): Mesh {
  const rand = rng(o.seed);
  const jitter = o.jitter ?? 0.36;
  const cw = o.width / (o.cols - 1);
  const ch = o.height / (o.rows - 1);
  const points: Point[] = [];
  for (let r = 0; r < o.rows; r++) {
    for (let c = 0; c < o.cols; c++) {
      // Linhas alternadas deslocadas: triângulos mais equilibrados, como no símbolo.
      const offset = r % 2 ? cw / 2 : 0;
      const edgeX = c === 0 || c === o.cols - 1;
      const edgeY = r === 0 || r === o.rows - 1;
      const jx = edgeX ? 0 : (rand() - 0.5) * 2 * jitter * cw;
      const jy = edgeY ? 0 : (rand() - 0.5) * 2 * jitter * ch;
      const x = Math.min(o.width, Math.max(0, c * cw + (edgeX ? 0 : offset) + jx));
      points.push({ x: Math.round(x * 10) / 10, y: Math.round((r * ch + jy) * 10) / 10 });
    }
  }

  const tris = delaunay(points);
  const set = new Map<string, [number, number]>();
  for (const [a, b, c] of tris) {
    for (const [u, v] of [
      [a, b],
      [b, c],
      [c, a],
    ] as [number, number][]) {
      set.set(u < v ? `${u}-${v}` : `${v}-${u}`, u < v ? [u, v] : [v, u]);
    }
  }
  let edges = [...set.values()];
  const len = ([u, v]: [number, number]) => Math.hypot(points[u].x - points[v].x, points[u].y - points[v].y);
  const sorted = edges.map(len).sort((x, y) => x - y);
  const median = sorted[Math.floor(sorted.length / 2)];
  edges = edges.filter((e) => len(e) <= median * (o.maxEdge ?? 1.9));

  const origin = o.origin ?? { x: o.width / 2, y: o.height / 2 };
  const dist = ([u, v]: [number, number]) =>
    Math.hypot((points[u].x + points[v].x) / 2 - origin.x, (points[u].y + points[v].y) / 2 - origin.y);
  edges.sort((e1, e2) => dist(e1) - dist(e2));

  return { width: o.width, height: o.height, points, edges };
}

/** Caminho SVG com todas as arestas (um único <path>). */
export function meshPath(m: Mesh): string {
  return m.edges
    .map(([u, v]) => `M${m.points[u].x} ${m.points[u].y}L${m.points[v].x} ${m.points[v].y}`)
    .join('');
}

/** Índices dos pontos que tocam alguma aresta (para desenhar os nós). */
export function meshNodes(m: Mesh): Point[] {
  const used = new Set<number>();
  for (const [u, v] of m.edges) {
    used.add(u);
    used.add(v);
  }
  return [...used].map((i) => m.points[i]);
}
