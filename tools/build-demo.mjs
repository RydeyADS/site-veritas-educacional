// Gera a demo como UM único arquivo HTML autocontido em demo/index.html.
//
// O Vite emite index.html + assets/*.js + assets/*.css (com as fontes dos ícones
// em base64). Este script roda o build single-file e junta tudo dentro do HTML,
// deixando só um arquivo que pode ser aberto direto do disco.
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const raiz = path.resolve(import.meta.dirname, '..')
const pastaDemo = path.join(raiz, 'demo')
const arquivoFinal = path.join(pastaDemo, 'index.html')

function kb(bytes) {
  return `${(bytes / 1024).toFixed(0)} kB`
}

console.log('› build single-file (DEMO_SINGLE=1)')
execSync('npm run build', {
  cwd: raiz,
  stdio: 'inherit',
  env: { ...process.env, DEMO_SINGLE: '1' },
})

let html = fs.readFileSync(arquivoFinal, 'utf8')

// ---------------------------------------------------------------- CSS e JS
const linkCss = html.match(/<link[^>]+rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/)
const tagJs = html.match(/<script[^>]+type="module"[^>]*src="([^"]+)"[^>]*><\/script>/)

if (!linkCss || !tagJs) {
  throw new Error('não encontrei o CSS e/ou o JS gerados pelo Vite no index.html da demo')
}

const lerAsset = (ref) => {
  const relativo = ref.replace(/^\.?\//, '').replace(/^assets\//, 'assets' + path.sep)
  return fs.readFileSync(path.join(pastaDemo, relativo), 'utf8')
}

// O HTML do Vite só pode referenciar o CSS, o JS e o favicon — todos inlinados aqui.
const referencias = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((ref) => !ref.startsWith('data:') && !ref.startsWith('#') && !ref.startsWith('http'))
const sobras = referencias.filter(
  (ref) => ![linkCss[1], tagJs[1]].includes(ref) && !ref.endsWith('favicon.svg')
)
if (sobras.length) {
  throw new Error(`a demo depende de arquivos externos: ${sobras.join(', ')}`)
}

let css = lerAsset(linkCss[1])
const js = lerAsset(tagJs[1])

// A fonte vem em 4 formatos (eot/woff2/woff/ttf) e o eot aparece DUAS vezes (o
// Vite mantém a declaração legada e a cópia com #iefix), ~1,7 MB de base64 cada.
// woff2 sozinho cobre todos os navegadores atuais, então os demais só pesam.
const antesFonte = css.length
// 1) remove a declaração legada "src:url(eot);" que antecede a lista moderna
css = css.replace(/(?:^|;)src:url\(data:[^)]*\);(?=\s*src:)/g, ';')
// 2) remove da lista moderna as entradas que não são woff2 (junto com a vírgula que sobra)
css = css.replace(
  /url\(data:[^)]*\)\s*format\(["']?(?:embedded-opentype|woff|truetype)["']?\)\s*,?/g,
  ''
)
const economia = antesFonte - css.length

// Trava de segurança: sobrou algum formato legado da fonte?
const legados =
  css.match(/data:(?:application\/vnd\.ms-fontobject|font\/woff|font\/ttf)(?=;)/g) || []
if (legados.length) {
  throw new Error(`formatos de fonte não removidos: ${[...new Set(legados)].join(', ')}`)
}

html = html.replace(
  linkCss[0],
  () => `<style>\n${css.replace(/<\/style/gi, '<\\/style')}\n</style>`
)
html = html.replace(
  tagJs[0],
  () => `<script type="module">\n${js.replace(/<\/script/gi, '<\\/script')}\n</script>`
)

// ------------------------------------------------------------ favicon inline
const svg = fs.readFileSync(path.join(raiz, 'public', 'favicon.svg'), 'utf8').trim()
const faviconUri = `data:image/svg+xml,${encodeURIComponent(svg)}`
html = html.replace(/<link[^>]+rel="icon"[^>]*>/, `<link rel="icon" href="${faviconUri}" />`)

// Nada de arquivos irmãos: sem preloads nem referências externas.
html = html.replace(/<link[^>]+rel="modulepreload"[^>]*>\s*/g, '')

html = html.replace(
  '<head>',
  '<head>\n    <!-- Arquivo único gerado por tools/build-demo.mjs — não edite à mão. -->'
)

fs.writeFileSync(arquivoFinal, html)

// ------------------------------------------------------------------- limpeza
fs.rmSync(path.join(pastaDemo, 'assets'), { recursive: true, force: true })
fs.rmSync(path.join(pastaDemo, 'favicon.svg'), { force: true })

const restante = fs.readdirSync(pastaDemo)
console.log(`\n✓ demo/index.html — ${kb(fs.statSync(arquivoFinal).size)}`)
console.log(`  fontes redundantes removidas do CSS: ${kb(economia)}`)
console.log(`  arquivos restantes em demo/: ${restante.join(', ') || '(nenhum)'}`)
