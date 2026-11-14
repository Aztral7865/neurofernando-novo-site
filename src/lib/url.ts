// Monta caminhos de arquivos de /public respeitando o "base" do Astro
// (o site oficial fica na raiz; a prévia no GitHub Pages fica numa subpasta).
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const asset = (path: string) => base + path.replace(/^\//, '');

/** true quando o build é a prévia de avaliação (não deve ser indexada). */
export const isPreview = import.meta.env.PUBLIC_PREVIEW === 'true';
