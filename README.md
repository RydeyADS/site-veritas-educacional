# Veritas Educacional

Site institucional da **MI Empreendimentos Educacionais LTDA** (nome fantasia
**Veritas Educacional**), construído em **Vue 3 + Vite + Vuetify + Vue Router**.
A consulta de cursos, valores e inscrições acontece em portal externo (polo Estácio EAD
Nova Aldeota — Ipu/CE), configurado em `cursosLink` em `src/data/site.js`.

- **Razão social:** MI Empreendimentos Educacionais LTDA
- **Nome fantasia:** Veritas Educacional
- **CNPJ:** 62.172.634/0001-89
- **Sede:** Rua Antonio Memoria, nº 768, Bairro Nova Aldeota, CEP 62250-000, Ipu — Ceará
- **Fundação:** 11/08/2025
- **Fundadores:** Marcus Vinicius do Carmo Ferreira e Italo Caldas Ferreira

## Como rodar

```bash
npm install
npm run dev         # servidor de desenvolvimento (http://localhost:5173)
npm run build       # build de produção (gera /dist)
npm run preview     # serve o build de produção
npm run lint        # ESLint (regras Vue 3 + Prettier)
npm run format      # Prettier em todo o projeto
npm run demo        # gera a demo num único HTML (demo/index.html)
npm run demo:serve  # serve a demo gerada
```

### Demo em arquivo único

`npm run demo` produz **`demo/index.html`**: um arquivo autocontido com o JS, o CSS, a imagem do
banner e a fonte dos ícones embutidos, que abre direto do disco (duplo clique) sem servidor. Quem
gera é o `tools/build-demo.mjs`, que roda o Vite com `DEMO_SINGLE=1` e depois embute os assets no
HTML:

- `inlineDynamicImports` + `cssCodeSplit: false` — nada de chunks irmãos para o HTML buscar;
- `assetsInlineLimit` altíssimo — a fonte dos ícones e o banner viram data URI;
- rotas em **hash** (`#/sobre`, `#/contato`) — única forma de navegar a partir de `file://`;
- remoção dos formatos de fonte redundantes (eot/woff/ttf), que sozinhos somariam ~5,9 MB.

O build de produção (`/dist`) continua igual: base absoluta e histórico web.

O artefato vai para `/demo`, que é **ignorado pelo Git** (assim como `/dist`), então cada máquina
gera o seu próprio arquivo sem poluir o repositório. O mesmo vale para `/scripts`, onde ficam os
utilitários locais de verificação de layout.

## Estrutura de informação

As áreas de conhecimento (Tecnologia, Saúde, Gestão, Educação e Engenharias) são apresentadas na
home como atalhos para o portal externo de cursos. O site não lista cursos internamente: a
consulta, os valores e a inscrição acontecem no portal Estácio.

A seção "Como atuamos" (em Sobre) explica o modelo de negócio: a Veritas faz a gestão do polo
Estácio, enquanto a Estácio responde pelos cursos, pela parte acadêmica e pelo diploma.

## Páginas (rotas)

| Rota                    | Página                  | Descrição                                                         |
| ----------------------- | ----------------------- | ----------------------------------------------------------------- |
| `/`                     | Home                    | Hero, números, áreas de conhecimento, diferenciais e depoimentos  |
| `/sobre`                | Sobre nós               | Missão, visão, valores, dados da empresa, fundadores e trajetória |
| `/campus`               | Campus                  | Unidades, infraestrutura e agendamento de visita                  |
| `/redes-sociais`        | Redes sociais           | Instagram e Facebook                                              |
| `/contato`              | Contato                 | Formulário validado, canais de atendimento e FAQ                  |
| `/politica-privacidade` | Política de Privacidade | Aviso de LGPD, direitos do titular e contato do DPO               |
| `*`                     | 404                     | Página não encontrada                                             |

Os links de "Cursos" no menu, na home e no rodapé abrem o portal externo em nova aba.

## Organização do código

```
src/
├─ assets/         imagens (banner do hero)
├─ components/     BrandLogo, AppHeader, AppFooter, CookieConsent, PageHero, CtaBanner, ModeloAtuacao
├─ composables/    useCookieConsent.js (estado do consentimento de cookies)
├─ data/           site.js (institucional, link de cursos, unidades, contato, LGPD)
├─ plugins/        vuetify.js (tema, locale pt-BR, defaults)
├─ router/         rotas com lazy loading e scroll ao topo
├─ styles/         main.css (tema global e utilitários)
└─ views/          as páginas listadas acima
```

Fora do `src/`, o `tools/build-demo.mjs` gera o HTML único da demo e o `scripts/` (ignorado pelo
Git) guarda os harnesses locais de verificação de layout, que rodam contra um Edge headless via
CDP.

Os dados cadastrais da empresa (razão social, nome fantasia, CNPJ, endereço, fundação e
fundadores) são reais; o conteúdo acadêmico de demonstração é fictício.
