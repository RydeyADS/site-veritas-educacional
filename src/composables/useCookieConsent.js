import { computed, ref } from 'vue'

const CHAVE = 'kairos-cookie-consent'

function lerArmazenado() {
  try {
    return window.localStorage.getItem(CHAVE)
  } catch {
    return null
  }
}

// Estado compartilhado (módulo) entre o banner e o rodapé.
const decisao = ref(lerArmazenado())
const bannerAberto = ref(decisao.value === null)

export function useCookieConsent() {
  function registrar(valor) {
    decisao.value = valor
    bannerAberto.value = false
    try {
      window.localStorage.setItem(CHAVE, valor)
    } catch {
      /* armazenamento indisponível — ignora */
    }
  }

  return {
    decisao,
    bannerAberto,
    visivel: computed(() => bannerAberto.value),
    aceitarTodos: () => registrar('todos'),
    aceitarEssenciais: () => registrar('essenciais'),
    reabrir: () => {
      bannerAberto.value = true
    },
    resetar: () => {
      try {
        window.localStorage.removeItem(CHAVE)
      } catch {
        /* ignora */
      }
      decisao.value = null
      bannerAberto.value = true
    }
  }
}
