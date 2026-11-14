// Comportamento da página única. Sem bibliotecas: menu, seção ativa, leitor de artigos,
// barra de agendamento no celular e formulário que abre o WhatsApp.

const WHATSAPP = '5548991140848';
const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollToHash(hash: string) {
  const target = hash ? document.querySelector<HTMLElement>(hash) : null;
  if (!target) return;
  target.scrollIntoView({ behavior: prefersReduced() ? 'auto' : 'smooth', block: 'start' });
}

/* ---------- Menu em tela cheia ---------- */
function initMenu() {
  const menu = document.querySelector<HTMLDialogElement>('[data-menu]');
  const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  if (!menu || !openBtn) return;

  openBtn.addEventListener('click', () => {
    menu.showModal();
    openBtn.setAttribute('aria-expanded', 'true');
  });

  menu.addEventListener('close', () => openBtn.setAttribute('aria-expanded', 'false'));

  menu.querySelector('[data-menu-close]')?.addEventListener('click', () => menu.close());

  // Toque fora do conteúdo (no fundo) fecha o menu
  menu.addEventListener('click', (e) => {
    if (e.target === menu) menu.close();
  });

  menu.querySelectorAll<HTMLAnchorElement>('[data-menu-link]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.hash;
      if (!hash) return;
      e.preventDefault();
      menu.close();
      history.pushState(null, '', hash);
      // close() já liberou a rolagem da página; rola direto para a seção.
      scrollToHash(hash);
    });
  });

  // Se a tela crescer para o tamanho do desktop com o menu aberto, fecha.
  window.matchMedia('(min-width: 1100px)').addEventListener('change', (m) => {
    if (m.matches && menu.open) menu.close();
  });
}

/* ---------- Áreas de atuação: abre e fecha no celular ---------- */
function initAreas() {
  const items = [...document.querySelectorAll<HTMLElement>('[data-area]')];
  if (!items.length) return;
  const wide = window.matchMedia('(min-width: 720px)');

  // Conteúdo fechado não recebe foco nem é lido; no desktop tudo fica aberto.
  const sync = () => {
    for (const li of items) {
      const panel = li.querySelector<HTMLElement>('[data-area-panel]');
      if (panel) panel.inert = !wide.matches && !li.hasAttribute('data-open');
    }
  };

  for (const li of items) {
    const button = li.querySelector<HTMLButtonElement>('[data-area-toggle]');
    button?.addEventListener('click', () => {
      const open = !li.hasAttribute('data-open');
      li.toggleAttribute('data-open', open);
      button.setAttribute('aria-expanded', String(open));
      sync();
    });
  }

  wide.addEventListener('change', sync);
  sync();
}

/* ---------- Seção atual acesa no menu ---------- */
function initScrollSpy() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
  const sections = [...document.querySelectorAll<HTMLElement>('[data-section]')];
  if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;

  const setActive = (id: string | null) => {
    for (const a of links) {
      if (id && a.hash === `#${id}`) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    }
  };

  const visible = new Map<string, boolean>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) visible.set(e.target.id, e.isIntersecting);
      const current = sections.find((s) => visible.get(s.id));
      setActive(current ? current.id : null);
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  sections.forEach((s) => io.observe(s));
}

/* ---------- Leitor de artigos (dialog + endereço #artigo-...) ---------- */
function initArticles() {
  const dialogs = new Map<string, HTMLDialogElement>();
  document.querySelectorAll<HTMLDialogElement>('dialog[data-article]').forEach((d) => {
    dialogs.set(d.dataset.article!, d);
  });
  if (!dialogs.size) return;

  let pushed = false;
  let opener: HTMLElement | null = null;

  const idFromHash = (hash: string) => (hash.startsWith('#artigo-') ? hash.slice('#artigo-'.length) : null);

  const open = (id: string, push: boolean) => {
    const d = dialogs.get(id);
    if (!d || d.open) return;
    dialogs.forEach((other) => other.open && other.close());
    d.showModal();
    d.querySelector('.reader__panel')?.scrollTo(0, 0);
    if (push) {
      history.pushState({ article: id }, '', `#artigo-${id}`);
      pushed = true;
    }
  };

  dialogs.forEach((d) => {
    d.querySelector('[data-article-close]')?.addEventListener('click', () => d.close());
    d.addEventListener('click', (e) => {
      if (e.target === d) d.close();
    });
    d.addEventListener('close', () => {
      if (pushed) {
        pushed = false;
        history.back();
      } else if (idFromHash(location.hash)) {
        history.replaceState(null, '', '#artigos');
      }
      if (opener && document.contains(opener)) opener.focus({ preventScroll: true });
      opener = null;
    });
  });

  document.addEventListener('click', (e) => {
    const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#artigo-"]');
    if (!link) return;
    const id = idFromHash(link.hash);
    if (!id || !dialogs.has(id)) return;
    e.preventDefault();
    opener = link;
    open(id, true);
  });

  window.addEventListener('popstate', () => {
    const id = idFromHash(location.hash);
    if (id && dialogs.has(id)) {
      open(id, false);
    } else {
      pushed = false;
      dialogs.forEach((d) => d.open && d.close());
    }
  });

  // Link direto para um artigo (ex.: neurofernando.com.br/#artigo-prevencao-avc)
  const initial = idFromHash(location.hash);
  if (initial && dialogs.has(initial)) {
    // Rola sem animação: com o artigo aberto a página de trás fica travada.
    document.getElementById('artigos')?.scrollIntoView({ block: 'start', behavior: 'instant' });
    open(initial, false);
  }
}

/* ---------- Barra de agendamento no celular ---------- */
function initActionBar() {
  const bar = document.querySelector<HTMLElement>('[data-action-bar]');
  const heroCta = document.querySelector('[data-hero-cta]');
  const hideZones = [...document.querySelectorAll('#contato, [data-footer]')];
  if (!bar || !heroCta || !('IntersectionObserver' in window)) return;

  let heroVisible = true;
  const zones = new Map<Element, boolean>();

  const update = () => {
    const show = !heroVisible && ![...zones.values()].some(Boolean);
    bar.dataset.visible = String(show);
    bar.toggleAttribute('inert', !show);
    bar.setAttribute('aria-hidden', String(!show));
    document.documentElement.style.setProperty('--bar-h', show ? `${bar.offsetHeight}px` : '0px');
  };

  new IntersectionObserver(([e]) => {
    // Considera "fora" só depois que o botão passou do topo da tela.
    heroVisible = e.isIntersecting || e.boundingClientRect.top > 0;
    update();
  }).observe(heroCta);

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) zones.set(e.target, e.isIntersecting);
    update();
  });
  hideZones.forEach((z) => io.observe(z));
}

/* ---------- Formulário de contato -> WhatsApp ---------- */
function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form) return;
  const status = form.querySelector<HTMLElement>('[data-form-status]');

  const messages: Record<string, (el: HTMLInputElement | HTMLTextAreaElement) => string> = {
    name: (el) => (el.value.trim() ? '' : 'Escreva o seu nome completo.'),
    // Opcional: o WhatsApp já identifica quem escreve. Se preenchido, precisa ser válido.
    email: (el) =>
      !el.value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())
        ? ''
        : 'Escreva um e-mail válido, com @ e domínio (ex.: nome@email.com), ou deixe em branco.',
    message: (el) => (el.value.trim() ? '' : 'Escreva a sua mensagem.'),
  };

  const setError = (name: string, text: string) => {
    const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
    const slot = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
    if (!field || !slot) return;
    slot.textContent = text;
    if (text) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
  };

  // Ao corrigir, a mensagem de erro some (sem validar enquanto digita).
  form.addEventListener('input', (e) => {
    const el = e.target as HTMLInputElement;
    if (el.getAttribute('aria-invalid') === 'true' && messages[el.name] && !messages[el.name](el)) {
      setError(el.name, '');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstInvalid: HTMLElement | null = null;
    let count = 0;
    for (const [name, check] of Object.entries(messages)) {
      const el = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      const msg = check(el);
      setError(name, msg);
      if (msg) {
        count++;
        firstInvalid ??= el;
      }
    }
    if (firstInvalid) {
      firstInvalid.focus();
      if (status) status.textContent = count === 1 ? 'Falta 1 campo.' : `Faltam ${count} campos.`;
      return;
    }

    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const emailValue = String(data.get('email') ?? '').trim();
    const email = emailValue ? `*E-mail para retorno:* ${emailValue}\n` : '';
    const phoneValue = String(data.get('phone') ?? '').trim();
    const phone = phoneValue ? `Telefone: ${phoneValue}\n` : '';
    const message = String(data.get('message')).trim();

    // Mesmo texto do site anterior; as linhas de e-mail e telefone só entram quando preenchidas.
    const contatos = email + phone;
    const texto = `Olá, Dr. Fernando! Meu nome é *${name}*.\n\nEntro em contato através do seu site.\n\n${contatos ? `${contatos}\n` : ''}*Mensagem:*\n${message}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
    if (status) status.textContent = 'Abrimos o WhatsApp com a sua mensagem. Toque em enviar para concluir.';
    form.reset();
  });
}

function initYear() {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

initMenu();
initAreas();
initScrollSpy();
initArticles();
initActionBar();
initContactForm();
initYear();
