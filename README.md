# Site do Dr. Fernando Topanotti Tarabay — Neurologista em Criciúma/SC

Site de página única (single page) do Dr. Fernando Topanotti Tarabay, CRM/SC 22270, RQE 18727.
Visual na identidade da **Aura Neurologia** (azul `#096BAD`, azul-marinho `#144487`, cinza `#445159`;
tipografia Fira Sans e Fira Sans Extra Condensed), pensado primeiro para o celular.

Domínio: [neurofernando.com.br](https://neurofernando.com.br)

## Tecnologia

- [Astro](https://astro.build) 7, gerando **HTML estático** (sem servidor).
- Imagens otimizadas no build (AVIF e WebP em vários tamanhos): as fotos originais tinham até 15 MB; a
  primeira tela agora carrega cerca de 70 KB.
- Fontes servidas pelo próprio site (baixadas do Google Fonts no build).
- JavaScript mínimo, sem bibliotecas: menu, leitor de artigos, formulário que abre o WhatsApp e barra de
  agendamento no celular (`src/scripts/site.ts`).

## Como rodar no computador

Requer Node.js 22.23 ou mais novo.

```bash
npm install
npm run dev        # http://localhost:4321 (atualiza ao salvar)
npm run build      # gera a pasta dist/ (o site pronto)
npm run preview    # serve a pasta dist/ para conferir antes de publicar
```

## Onde mudar cada coisa

Todo o conteúdo fica em `src/data/`, separado do visual:

| Arquivo | Conteúdo |
| --- | --- |
| `src/data/site.ts` | Nome, CRM, RQE, telefone/WhatsApp, endereço, redes sociais, resumo e textos do "Sobre" |
| `src/data/areas.ts` | As 15 áreas de atuação (doenças e exames/procedimentos) |
| `src/data/trajetoria.ts` | Formação acadêmica e atuação profissional |
| `src/data/midia.ts` | As 17 entrevistas e reportagens (título, descrição, link, miniatura) |
| `src/data/artigos.json` | Os 6 artigos (texto completo em HTML) |
| `src/assets/photos/`, `src/assets/media/` | Fotos e miniaturas (o build gera as versões otimizadas) |

Para **adicionar uma entrevista**: coloque a miniatura em `src/assets/media/`, importe-a no topo de
`src/data/midia.ts` e acrescente um item na lista `entrevistas` (ou `imprensa`).

Para **adicionar um artigo**: acrescente um objeto em `src/data/artigos.json` com `id`, `title`, `date`
(ex.: `"15 de Maio de 2024"`), `description` e `fullContent`. Ele aparece na lista e abre no leitor em
`neurofernando.com.br/#artigo-<id>`.

## Estrutura

```
src/
  pages/index.astro        a página única
  layouts/Base.astro       <head>: SEO, Open Graph, dados estruturados (Physician), fontes
  components/              Header, Hero, Areas, Sobre, Trajetoria, Midia, Artigos, Contato, Footer...
  styles/global.css        cores, tipografia, botões e base mobile
  lib/mesh.ts              a malha triangular (estilo do símbolo da Aura), calculada no build
public/
  CNAME                    domínio neurofernando.com.br
  googlec3cbfcb27719cc4b.html  verificação do Google Search Console
  desktop.html, mobile.html, article.html   redirecionam endereços antigos para a página nova
  compartilhar.jpg         imagem que aparece ao compartilhar o link (1200x630)
  marca/aura-simbolo.svg   símbolo da Aura (cabeçalho, menu, favicon), cores exatas do manual
  marca/aura-neurologia.svg  logo completa da Aura (rodapé, junto ao endereço)
  favicon.svg, favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png, site.webmanifest
```

## Publicação no GitHub Pages (somente depois da aprovação do Dr. Fernando)

O site antigo é publicado direto da raiz do repositório. O novo precisa ser **construído** antes, então a
publicação passa a ser feita por um GitHub Action (`.github/workflows/deploy.yml`, já incluído).

Quando for publicar:

1. No GitHub, abra **Settings → Pages** e, em **Build and deployment → Source**, escolha **GitHub Actions**.
   Faça isso **antes** de enviar o código novo: com a opção antiga ("Deploy from a branch"), o domínio
   mostraria o README em vez do site.
2. Envie (commit e push) o código para a branch `main`. O Action instala, constrói e publica sozinho.
3. Confira o domínio personalizado `neurofernando.com.br` em Settings → Pages (o arquivo `public/CNAME`
   já o mantém).

Os endereços antigos (`/desktop.html`, `/mobile.html`, `/article.html?id=...`) continuam funcionando:
eles levam para a seção ou artigo equivalente da página nova.
