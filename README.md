# Kairos Empreendimentos Educacionais

Site institucional da **MIC EMPREENDIMENTOS EDUCACIONAIS LTDA - ME** (nome fantasia
**Kairos Empreendimentos Educacionais**), construído em **Vue 3 + Vite + Vuetify + Vue Router**.
A informação é organizada em **frentes de conhecimento numeradas** (mesmo espírito do site de
referência), cada uma agrupando cursos e seus subitens.

- **Razão social:** MIC EMPREENDIMENTOS EDUCACIONAIS LTDA - ME
- **Nome fantasia:** Kairos Empreendimentos Educacionais
- **CNPJ:** 63.251.851/0001-27
- **Sede:** Avenida Mozart Pinheiro de Lucena, 2930 — Quintino Cunha, Fortaleza — CE
- **Fundação:** 17/10/2025
- **Fundadores:** Marcus Vinicius do Carmo Ferreira e Italo Caldas Ferreira

## Como rodar

```bash
npm install
npm run dev         # servidor de desenvolvimento (http://localhost:5173)
npm run build       # build de produção (gera /dist)
npm run preview     # serve o build de produção
npm run demo        # gera a demo num único HTML (demo/index.html)
npm run demo:serve  # serve a demo gerada
```

### Demo em arquivo único

`npm run demo` produz **`demo/index.html`**: um arquivo autocontido (~2 MB) com o JS, o CSS e a
fonte dos ícones embutidos, que abre direto do disco (duplo clique) sem servidor. Quem gera é o
`tools/build-demo.mjs`, que roda o Vite com `DEMO_SINGLE=1` e depois embute os assets no HTML:

- `inlineDynamicImports` + `cssCodeSplit: false` — nada de chunks irmãos para o HTML buscar;
- `assetsInlineLimit` altíssimo — a fonte dos ícones vira data URI;
- rotas em **hash** (`#/cursos`, `#/cursos/enfermagem`) — única forma de navegar a partir de `file://`;
- remoção dos formatos de fonte redundantes (eot/woff/ttf), que sozinhos somariam ~5,9 MB.

O build de produção (`/dist`) continua igual: base absoluta e histórico web.

O artefato vai para `/demo`, que é **ignorado pelo Git** (assim como `/dist`), então cada máquina
gera o seu próprio arquivo sem poluir o repositório. O mesmo vale para `/scripts`, onde ficam os
utilitários locais de verificação de layout.

## Estrutura de informação

- **Frente 01 · Tecnologia e Inovação**
- **Frente 02 · Saúde e Bem-Estar**
- **Frente 03 · Gestão e Negócios**
- **Frente 04 · Educação e Humanidades**
- **Frente 05 · Engenharias e Sustentabilidade**

Cada frente contém cursos com grau, duração, modalidade, turnos, mensalidade, competências,
coordenação e destaques.

## Páginas (rotas)

| Rota | Página | Descrição |
| --- | --- | --- |
| `/` | Home | Hero, números, frentes, diferenciais, depoimentos e notícias |
| `/cursos` | Cursos | Listagem com busca e filtros por grau, modalidade e frente |
| `/cursos/:slug` | Curso | Detalhe do curso, competências, timeline e barra lateral |
| `/sobre` | Sobre nós | Missão, visão, valores, dados da empresa, fundadores e trajetória |
| `/campus` | Campus | Unidades, infraestrutura e agendamento de visita |
| `/noticias` | Notícias | Listagem com filtro por categoria |
| `/noticias/:slug` | Notícia | Artigo completo e matérias relacionadas |
| `/redes-sociais` | Redes sociais | Instagram, Facebook e WhatsApp |
| `/contato` | Contato | Formulário validado, canais de atendimento e FAQ |
| `/politica-privacidade` | Política de Privacidade | Aviso de LGPD, direitos do titular e contato do DPO |
| `*` | 404 | Página não encontrada |

## Organização do código

```
src/
├─ components/     AppHeader, AppFooter, CookieConsent, PageHero, FrenteCard, CursoCard, CtaBanner
├─ composables/    useCookieConsent.js (estado do consentimento de cookies)
├─ data/           frentes.js (cursos) e site.js (institucional, unidades, notícias, contato, LGPD)
├─ plugins/        vuetify.js (tema, locale pt-BR, defaults)
├─ router/         rotas com lazy loading e scroll ao topo
├─ styles/         main.css (tema global e utilitários)
├─ utils/          format.js (moeda e data)
└─ views/          as páginas listadas acima
```

Fora do `src/`, o `tools/build-demo.mjs` gera o HTML único da demo e o `scripts/` (ignorado pelo
Git) guarda os harnesses locais de verificação de layout, que rodam contra um Edge headless via
CDP.

Os dados cadastrais da empresa (razão social, nome fantasia, CNPJ, endereço, fundação e
fundadores) são reais; o conteúdo acadêmico de demonstração é fictício.
