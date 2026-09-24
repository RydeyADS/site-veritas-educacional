// Informações institucionais, navegação, unidades, notícias e contato.

export const instituicao = {
  nome: 'Kairos Empreendimentos Educacionais',
  nomeCurto: 'Kairos',
  sigla: 'Kairos',
  slogan: 'Conhecimento que transforma trajetórias.',
  descricao:
    'A Kairos Empreendimentos Educacionais nasceu para aproximar o estudante do mercado e da comunidade, com cursos organizados por frentes de conhecimento e forte componente prático.',
  fundacao: 2025,
  missao:
    'Formar profissionais éticos, críticos e preparados para resolver problemas reais, ampliando o acesso ao ensino superior de qualidade.',
  visao:
    'Ser referência regional em ensino, extensão e inovação, reconhecida pelo impacto positivo na vida das pessoas e no desenvolvimento da sociedade.',
  valores: ['Ética e transparência', 'Inclusão e diversidade', 'Prática e inovação', 'Compromisso com o estudante']
}

export const navegacao = [
  { titulo: 'Início', rota: '/', icone: 'mdi-home-variant' },
  { titulo: 'Cursos', rota: '/cursos', icone: 'mdi-book-open-page-variant' },
  { titulo: 'Sobre nós', rota: '/sobre', icone: 'mdi-bank' },
  { titulo: 'Campus', rota: '/campus', icone: 'mdi-map-marker' },
  { titulo: 'Notícias', rota: '/noticias', icone: 'mdi-newspaper-variant-outline' },
  { titulo: 'Redes sociais', rota: '/redes-sociais', icone: 'mdi-share-variant-outline' },
  { titulo: 'Contato', rota: '/contato', icone: 'mdi-message-text-outline' }
]

export const numeros = [
  { valor: '5', rotulo: 'frentes de conhecimento', icone: 'mdi-view-grid-outline' },
  { valor: '14', rotulo: 'cursos de graduação', icone: 'mdi-school-outline' },
  { valor: '9 mil', rotulo: 'alunos e egressos', icone: 'mdi-account-group' },
  { valor: '92%', rotulo: 'empregabilidade em 1 ano', icone: 'mdi-briefcase-outline' }
]

export const diferenciais = [
  {
    titulo: 'Prática desde o começo',
    icone: 'mdi-flask-outline',
    texto: 'Laboratórios, clínicas-escola e projetos integradores colocam a mão na massa já no primeiro semestre.'
  },
  {
    titulo: 'Professores do mercado',
    icone: 'mdi-account-tie',
    texto: 'Corpo docente com titulação acadêmica e experiência real nas áreas em que atuam.'
  },
  {
    titulo: 'Apoio ao estudante',
    icone: 'mdi-hand-heart-outline',
    texto: 'Núcleo de carreiras, monitoria, bolsas e programas de nivelamento para você não caminhar sozinho.'
  },
  {
    titulo: 'Flexibilidade de estudo',
    icone: 'mdi-laptop',
    texto: 'Modalidades presencial, híbrida e EAD que se adaptam à sua rotina de trabalho.'
  }
]

export const unidades = [
  {
    slug: 'sede',
    nome: 'Unidade Sede — Quintino Cunha',
    cidade: 'Fortaleza — CE',
    endereco: 'Avenida Mozart Pinheiro de Lucena, 2930 — Quintino Cunha',
    telefone: '(85) 3000-1100',
    horario: 'Seg a Sex, 7h às 22h30',
    estrutura: ['Biblioteca central', 'Laboratórios de informática', 'Auditório', 'Cantina', 'Acessibilidade total'],
    destaque: true
  },
  {
    slug: 'saude',
    nome: 'Campus Saúde',
    cidade: 'Fortaleza — CE',
    endereco: 'Rua dos Ipês, 480 — Jardim Clínico',
    telefone: '(85) 3000-1200',
    horario: 'Seg a Sáb, 7h às 21h',
    estrutura: ['Clínica-escola', 'Laboratórios de simulação', 'Ambulatório de fisioterapia', 'Estacionamento'],
    destaque: false
  },
  {
    slug: 'tecnologia',
    nome: 'Campus Tecnologia',
    cidade: 'Fortaleza — CE',
    endereco: 'Rod. Norte, km 8 — Parque Tecnológico',
    telefone: '(85) 3000-1300',
    horario: 'Seg a Sex, 8h às 22h',
    estrutura: ['Laboratório de cibersegurança', 'Laboratórios de engenharia', 'Espaço maker', 'Coworking'],
    destaque: false
  }
]

export const noticias = [
  {
    slug: 'kairos-tem-reconhecimento-de-curso',
    titulo: 'Curso de Enfermagem é reconhecido com nota máxima em avaliação',
    data: '2026-08-12',
    categoria: 'Institucional',
    autor: 'Assessoria de Comunicação',
    resumo:
      'A visita de reconhecimento destacou a infraestrutura dos laboratórios de simulação e o corpo docente da instituição.',
    conteudo: [
      'A comissão de avaliação visitou as instalações do Campus Saúde ao longo de três dias e destacou a organização do projeto pedagógico do curso, a titulação do corpo docente e a qualidade dos laboratórios de simulação realística.',
      'Segundo a coordenação, o resultado é fruto de um trabalho coletivo que envolveu professores, técnicos e estudantes. “O reconhecimento confirma um caminho que escolhemos há anos: colocar a prática no centro da formação”, afirmou a professora Camila Nogueira.',
      'Com o resultado, a instituição planeja ampliar os convênios de estágio e abrir novas turmas no próximo processo seletivo.'
    ]
  },
  {
    slug: 'mercado-de-tecnologia-atrai-estudantes',
    titulo: 'Frente de Tecnologia abre inscrições para projetos de extensão com empresas',
    data: '2026-07-30',
    categoria: 'Extensão',
    autor: 'Coordenação de Extensão',
    resumo:
      'Estudantes de desenvolvimento, dados e segurança poderão atuar em desafios reais propostos por empresas parceiras.',
    conteudo: [
      'As inscrições estão abertas para estudantes de todos os cursos da Frente 01 · Tecnologia e Inovação. Cada grupo receberá um desafio real proposto por empresas parceiras, com mentorias semanais e apresentação final para os contratantes.',
      'Os projetos têm duração de um semestre e podem ser convertidos em horas complementares. Ao final, os participantes recebem certificado e ficam com um caso de portfólio para apresentar em processos seletivos.',
      'A coordenação reforça que não é exigido conhecimento avançado prévio: há nivelamento e trilhas de apoio para quem está começando.'
    ]
  },
  {
    slug: 'semana-de-carreiras',
    titulo: 'Semana de Carreiras reúne mais de 40 empresas no Campus Centro',
    data: '2026-07-03',
    categoria: 'Carreiras',
    autor: 'Núcleo de Carreiras',
    resumo:
      'Evento gratuito oferece palestras, mentorias de currículo e entrevistas simuladas para alunos e egressos.',
    conteudo: [
      'A Semana de Carreiras é o maior evento de empregabilidade da instituição. Nesta edição, mais de 40 empresas participam com vagas de estágio, trainee e posições efetivas, além de rodas de conversa com profissionais de mercado.',
      'A programação inclui mentorias de currículo, simulados de entrevista e um painel com egressos que hoje atuam em diferentes frentes. A participação é gratuita e aberta a alunos e ex-alunos.',
      'Para aproveitar melhor o evento, o Núcleo de Carreiras recomenda levar cópias do currículo impressas e atualizadas.'
    ]
  },
  {
    slug: 'bolsas-de-pratica',
    titulo: 'Programa de bolsas de prática amplia vagas para a clínica-escola',
    data: '2026-06-18',
    categoria: 'Bolsas',
    autor: 'Pró-reitoria Acadêmica',
    resumo:
      'A expansão do atendimento comunitário garante mais alunos em prática supervisionada nos cursos da saúde.',
    conteudo: [
      'O programa de bolsas de prática foi ampliado e passa a contemplar mais estudantes dos cursos de Enfermagem, Fisioterapia e Psicologia. A iniciativa permite que alunos atuem na clínica-escola sob supervisão docente, atendendo a comunidade gratuitamente.',
      'Além da experiência prática, os bolsistas recebem acompanhamento pedagógico e desconto na mensalidade. A seleção leva em conta desempenho acadêmico e disponibilidade de horário.',
      'As inscrições acontecem por edital publicado no portal do aluno ao início de cada semestre.'
    ]
  }
]

export function encontrarNoticia(slug) {
  return noticias.find((noticia) => noticia.slug === slug)
}

export const depoimentos = [
  {
    nome: 'Marina Okada',
    curso: 'Ciência de Dados — egressa 2024',
    texto:
      'Os projetos de portfólio foram o diferencial na minha entrevista. Saí da faculdade com repertório prático e confiança.',
    avatar: 'MO'
  },
  {
    nome: 'Carlos Eduardo Lima',
    curso: 'Engenharia de Produção — 7º semestre',
    texto:
      'Os laboratórios e as parcerias com indústrias fazem toda a diferença. Consigo aplicar no trabalho o que aprendo em aula.',
    avatar: 'CL'
  },
  {
    nome: 'Beatriz Souza',
    curso: 'Pedagogia — egressa 2023',
    texto:
      'Os estágios desde o primeiro ano me prepararam de verdade para a sala de aula. Hoje sou professora e recomendo a Kairos.',
    avatar: 'BS'
  }
]

export const empresa = {
  razaoSocial: 'MIC EMPREENDIMENTOS EDUCACIONAIS LTDA - ME',
  nomeFantasia: 'Kairos Empreendimentos Educacionais',
  cnpj: '63.251.851/0001-27',
  sede: 'Fortaleza — CE',
  endereco: 'Avenida Mozart Pinheiro de Lucena, 2930 — Quintino Cunha, Fortaleza — CE',
  fundacao: '17/10/2025',
  desenvolvedor: 'RYDEY',
  fundadores: [
    { nome: 'Marcus Vinicius do Carmo Ferreira', cargo: 'Fundador' },
    { nome: 'Italo Caldas Ferreira', cargo: 'Fundador' }
  ]
}

export const redesSociais = [
  {
    nome: 'Instagram',
    usuario: '@kairoseducacional',
    icone: 'mdi-instagram',
    url: 'https://instagram.com/kairoseducacional',
    handle: 'https://instagram.com/kairoseducacional',
    descricao: 'Bastidores, avisos e novidades do dia a dia da instituição.',
    acao: 'Seguir no Instagram'
  },
  {
    nome: 'Facebook',
    usuario: '/kairoseducacional',
    icone: 'mdi-facebook',
    url: 'https://facebook.com/kairoseducacional',
    handle: 'https://facebook.com/kairoseducacional',
    descricao: 'Eventos, editais e conteúdo da comunidade acadêmica.',
    acao: 'Curta no Facebook'
  },
  {
    nome: 'WhatsApp',
    usuario: '(85) 9900-1000',
    icone: 'mdi-whatsapp',
    url: 'https://wa.me/5585990001000',
    handle: 'https://wa.me/5585990001000',
    descricao: 'Atendimento direto para dúvidas sobre cursos, matrículas e bolsas.',
    acao: 'Conversar no WhatsApp'
  }
]

export const contato = {
  email: 'relacionamento@kairoseducacional.com.br',
  telefone: '(85) 3000-1000',
  whatsapp: '(85) 9900-1000',
  // Versões utilizáveis em links (tel:, mailto:, wa.me).
  telefoneLink: 'tel:+558530001000',
  emailLink: 'mailto:relacionamento@kairoseducacional.com.br',
  whatsappNumero: '5585990001000',
  whatsappLink: 'https://wa.me/5585990001000',
  central: 'Central de Atendimento — Seg a Sex, 8h às 20h',
  enderecoReitoria: 'Avenida Mozart Pinheiro de Lucena, 2930 — Quintino Cunha, Fortaleza — CE',
  mapaLink:
    'https://www.google.com/maps/search/?api=1&query=Avenida+Mozart+Pinheiro+de+Lucena,+2930,+Quintino+Cunha,+Fortaleza+-+CE'
}

export const datasImportantes = [
  { titulo: 'Inscrições em processos seletivos', periodo: 'Abertas o ano todo, com vagas para ingresso imediato.' },
  { titulo: 'Prova de bolsas e descontos', periodo: 'Chamadas mensais, aplicação online.' },
  { titulo: 'Transferência e segunda graduação', periodo: 'Análise de histórico em até 5 dias úteis.' }
]

export const lgpd = {
  lei: 'Lei Geral de Proteção de Dados (Lei nº 13.709/2018)',
  aviso:
    'Tratamos seus dados pessoais com finalidade específica, de forma segura e transparente, conforme a LGPD (Lei nº 13.709/2018).',
  encarregado: 'Encarregado pelo Tratamento de Dados (DPO)',
  emailDpo: 'dpo@kairoseducacional.com.br'
}

export const politicaPrivacidade = {
  titulo: 'Política de Privacidade',
  atualizadoEm: '23/09/2026',
  introducao:
    'Esta Política de Privacidade descreve como a MIC EMPREENDIMENTOS EDUCACIONAIS LTDA - ME (nome fantasia Kairos Empreendimentos Educacionais), inscrita no CNPJ 63.251.851/0001-27, coleta, usa, armazena e protege os dados pessoais de visitantes, candidatos e estudantes, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).',
  secoes: [
    {
      titulo: '1. Quem é o controlador dos dados',
      paragrafos: [
        'O controlador dos dados pessoais tratados neste site é a MIC EMPREENDIMENTOS EDUCACIONAIS LTDA - ME, com sede na Avenida Mozart Pinheiro de Lucena, 2930 — Quintino Cunha, Fortaleza — CE.',
        'Dúvidas sobre esta política podem ser enviadas para o nosso Encarregado pelo Tratamento de Dados (DPO) pelo e-mail dpo@kairoseducacional.com.br.'
      ]
    },
    {
      titulo: '2. Quais dados coletamos',
      paragrafos: [
        'Dados fornecidos por você: nome completo, e-mail, telefone/WhatsApp, curso de interesse, assunto e o conteúdo da mensagem enviada pelos nossos formulários.',
        'Dados de navegação: informações técnicas como endereço IP, tipo de navegador, páginas visitadas e data/hora de acesso, obtidas por meio de cookies e tecnologias similares.',
        'Não coletamos dados sensíveis nem dados de crianças e adolescentes sem o consentimento específico dos responsáveis legais.'
      ]
    },
    {
      titulo: '3. Para que usamos os seus dados',
      paragrafos: [
        'Responder solicitações de contato, inscrições, pedidos de informação sobre cursos, bolsas e processos seletivos.',
        'Enviar comunicações e novidades, quando você autoriza esse contato.',
        'Melhorar a experiência de navegação, medir desempenho do site e prevenir fraudes e usos indevidos.'
      ]
    },
    {
      titulo: '4. Base legal do tratamento',
      paragrafos: [
        'O tratamento é realizado com fundamento no consentimento do titular, na execução de procedimentos preliminares a contrato, no cumprimento de obrigação legal ou regulatória e no legítimo interesse, conforme o art. 7º da LGPD.'
      ]
    },
    {
      titulo: '5. Compartilhamento de dados',
      paragrafos: [
        'Não vendemos dados pessoais. Podemos compartilhá-los apenas com prestadores de serviço que apoiam nossa operação (como hospedagem, e-mail e ferramentas de análise), sempre sob obrigações de confidencialidade e segurança, ou quando houver determinação legal ou judicial.'
      ]
    },
    {
      titulo: '6. Seus direitos como titular',
      paragrafos: [
        'Nos termos do art. 18 da LGPD, você pode solicitar: confirmação da existência de tratamento, acesso, correção de dados incompletos ou desatualizados, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade, informação sobre compartilhamentos e revogação do consentimento.',
        'Para exercer seus direitos, envie um pedido para dpo@kairoseducacional.com.br. Responderemos dentro dos prazos previstos na legislação.'
      ]
    },
    {
      titulo: '7. Segurança e retenção',
      paragrafos: [
        'Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acessos não autorizados, perda, alteração ou destruição.',
        'Os dados são mantidos apenas pelo tempo necessário ao cumprimento das finalidades descritas nesta política ou de obrigações legais aplicáveis.'
      ]
    },
    {
      titulo: '8. Cookies',
      paragrafos: [
        'Utilizamos cookies essenciais para o funcionamento do site e cookies de desempenho para entender como as páginas são utilizadas. Você pode gerenciar ou desativar cookies nas configurações do seu navegador.'
      ]
    },
    {
      titulo: '9. Alterações desta política',
      paragrafos: [
        'Esta política pode ser atualizada para refletir mudanças legais ou operacionais. A data da última atualização será sempre indicada no topo desta página. Recomendamos consultá-la periodicamente.'
      ]
    }
  ]
}
