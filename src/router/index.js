import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { titulo: 'Início' }
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: () => import('@/views/CursosView.vue'),
    meta: { titulo: 'Cursos' }
  },
  {
    path: '/cursos/:slug',
    name: 'curso',
    component: () => import('@/views/CursoDetalheView.vue'),
    meta: { titulo: 'Detalhes do curso' }
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('@/views/SobreView.vue'),
    meta: { titulo: 'Sobre nós' }
  },
  {
    path: '/redes-sociais',
    name: 'redes-sociais',
    component: () => import('@/views/RedesSociaisView.vue'),
    meta: { titulo: 'Redes sociais' }
  },
  {
    path: '/campus',
    name: 'campus',
    component: () => import('@/views/CampusView.vue'),
    meta: { titulo: 'Campus' }
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: () => import('@/views/NoticiasView.vue'),
    meta: { titulo: 'Notícias' }
  },
  {
    path: '/noticias/:slug',
    name: 'noticia',
    component: () => import('@/views/NoticiaDetalheView.vue'),
    meta: { titulo: 'Notícia' }
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('@/views/ContatoView.vue'),
    meta: { titulo: 'Contato' }
  },
  {
    path: '/politica-privacidade',
    name: 'privacidade',
    component: () => import('@/views/PoliticaPrivacidadeView.vue'),
    meta: { titulo: 'Política de Privacidade' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'nao-encontrado',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { titulo: 'Página não encontrada' }
  }
]

const router = createRouter({
  // Na demo de arquivo único (file://) o histórico por hash é o que funciona.
  history: __DEMO_SINGLE__ ? createWebHashHistory() : createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const base = 'Kairos Empreendimentos Educacionais'
  document.title = to.meta?.titulo ? `${to.meta.titulo} · ${base}` : base
})

export default router
