// Informações institucionais, navegação, unidades e contato.

export const instituicao = {
  nome: 'Veritas Educacional',
  nomeCurto: 'Veritas',
  sigla: 'Veritas',
  slogan: 'Conhecimento que transforma trajetórias.',
  descricao:
    'A Veritas Educacional nasceu para aproximar o estudante do mercado e da comunidade, com cursos de graduação em diferentes áreas do conhecimento.',
  fundacao: 2025,
  missao:
    'Formar profissionais éticos, críticos e preparados para resolver problemas reais, ampliando o acesso ao ensino superior de qualidade.',
  visao:
    'Ser referência regional em ensino, extensão e inovação, reconhecida pelo impacto positivo na vida das pessoas e no desenvolvimento da sociedade.',
  valores: [
    'Ética e transparência',
    'Inclusão e diversidade',
    'Prática e inovação',
    'Compromisso com o estudante',
  ],
}

// Portal externo com os cursos ofertados, valores, modalidades e inscrições.
// A consulta e a inscrição em cursos acontecem nesse site, não dentro do portal da Veritas.
export const cursosLink = {
  url: 'https://estacio.br/polos-e-unidades/polo-estacio-ead-nova-aldeota-ipu-ce-nova-aldeota-ipu-ce',
  acao: 'Consultar cursos e valores',
}

export const navegacao = [
  { titulo: 'Início', rota: '/', icone: 'mdi-home-variant' },
  { titulo: 'Cursos', url: cursosLink.url, icone: 'mdi-book-open-page-variant', externo: true },
  { titulo: 'Sobre nós', rota: '/sobre', icone: 'mdi-bank' },
  { titulo: 'Campus', rota: '/campus', icone: 'mdi-map-marker' },
  { titulo: 'Redes sociais', rota: '/redes-sociais', icone: 'mdi-share-variant-outline' },
  { titulo: 'Contato', rota: '/contato', icone: 'mdi-message-text-outline' },
]

export const numeros = [
  { valor: '5', rotulo: 'áreas de conhecimento', icone: 'mdi-view-grid-outline' },
  { valor: '14', rotulo: 'cursos de graduação no polo EAD', icone: 'mdi-school-outline' },
  { valor: '9 mil', rotulo: 'alunos e egressos', icone: 'mdi-account-group' },
  { valor: '92%', rotulo: 'empregabilidade em 1 ano', icone: 'mdi-briefcase-outline' },
]

export const diferenciais = [
  {
    titulo: 'Prática desde o começo',
    icone: 'mdi-flask-outline',
    texto:
      'Laboratórios, clínicas-escola e projetos integradores colocam a mão na massa já no primeiro semestre.',
  },
  {
    titulo: 'Professores do mercado',
    icone: 'mdi-account-tie',
    texto: 'Corpo docente com titulação acadêmica e experiência real nas áreas em que atuam.',
  },
  {
    titulo: 'Apoio ao estudante',
    icone: 'mdi-hand-heart-outline',
    texto:
      'Núcleo de carreiras, monitoria, bolsas e programas de nivelamento para você não caminhar sozinho.',
  },
  {
    titulo: 'Flexibilidade de estudo',
    icone: 'mdi-laptop',
    texto: 'Modalidades presencial, híbrida e EAD que se adaptam à sua rotina de trabalho.',
  },
]

export const unidades = [
  {
    slug: 'sede',
    nome: 'Unidade Sede — Nova Aldeota',
    cidade: 'Ipu — CE',
    endereco: 'Rua Antonio Memoria, nº 768 — Bairro Nova Aldeota, CEP 62250-000, Ipu — CE',
    telefone: '(86) 98111-6877',
    horario: 'Seg a Sex, 7h às 22h30',
    estrutura: ['Biblioteca', 'Laboratórios', 'Auditório', 'Cantina', 'Acessibilidade total'],
    destaque: true,
  },
]

export const depoimentos = [
  {
    nome: 'Marina Okada',
    curso: 'Ciência de Dados — egressa 2024',
    texto:
      'Os projetos de portfólio foram o diferencial na minha entrevista. Saí da faculdade com repertório prático e confiança.',
    avatar: 'MO',
  },
  {
    nome: 'Carlos Eduardo Lima',
    curso: 'Engenharia de Produção — 7º semestre',
    texto:
      'Os laboratórios e as parcerias com indústrias fazem toda a diferença. Consigo aplicar no trabalho o que aprendo em aula.',
    avatar: 'CL',
  },
  {
    nome: 'Beatriz Souza',
    curso: 'Pedagogia — egressa 2023',
    texto:
      'Os estágios desde o primeiro ano me prepararam de verdade para a sala de aula. Hoje sou professora e recomendo a Veritas.',
    avatar: 'BS',
  },
]

export const empresa = {
  razaoSocial: 'MI Empreendimentos Educacionais LTDA',
  nomeFantasia: 'Veritas Educacional',
  cnpj: '62.172.634/0001-89',
  sede: 'Ipu — CE',
  endereco: 'Rua Antonio Memoria, nº 768, Bairro Nova Aldeota, CEP 62250-000, Ipu — Ceará',
  fundacao: '11/08/2025',
  desenvolvedor: 'RYDEY',
  fundadores: [
    { nome: 'Marcus Vinicius do Carmo Ferreira', cargo: 'Fundador' },
    { nome: 'Italo Caldas Ferreira', cargo: 'Fundador' },
  ],
  modeloAtuacao: 'Gestão de polo de ensino superior da Estácio',
}

// Como a Veritas atua: gestão do polo Estácio.
export const modeloAtuacao = {
  eyebrow: 'Como atuamos',
  titulo: 'Gestão de polo de ensino superior Estácio',
  intro:
    'A Veritas Educacional é uma empresa de educação que atua na gestão de um polo de ensino superior da Estácio. Adquirimos a operação do polo: assumimos a estrutura local, a equipe, o atendimento e o relacionamento com os alunos. A Estácio continua responsável pelos cursos, pela parte acadêmica, pela certificação e pela emissão do diploma.',
  blocos: [
    {
      icone: 'mdi-school-outline',
      titulo: 'O que é um polo?',
      texto:
        'É a unidade local que aproxima o aluno da faculdade. No polo, o estudante encontra atendimento, apoio pedagógico, laboratórios, aplicação de provas e orientação. A Estácio oferece o curso e a titulação; a Veritas faz o polo funcionar bem, de perto.',
    },
    {
      icone: 'mdi-clipboard-check-outline',
      titulo: 'Como funciona a aquisição?',
      texto:
        'Mapeamos um polo com potencial, analisamos contratos, alunos e estrutura, negociamos com a Estácio e assumimos a operação com transição planejada — mantendo a continuidade dos serviços para os alunos.',
    },
    {
      icone: 'mdi-chart-line',
      titulo: 'Como funciona o negócio?',
      texto:
        'A Estácio define cursos, plataforma, professores, avaliações e diploma. A Veritas cuida da estrutura, captação, matrículas, atendimento, marketing e apoio ao estudante no polo. Somos remunerados pela operação, conforme o contrato de parceria.',
    },
  ],
  passos: [
    'Mapeamento — identificamos um polo Estácio com potencial de crescimento.',
    'Análise — avaliamos contratos, alunos, estrutura, equipe e resultados.',
    'Negociação — adquirimos o direito de operar o polo, com autorização da Estácio.',
    'Transição — assumimos a operação com planejamento e continuidade dos serviços.',
    'Gestão — cuidamos do dia a dia do polo, da captação ao suporte ao estudante.',
  ],
}

export const redesSociais = [
  {
    nome: 'Instagram',
    usuario: '@estacioipu_',
    icone: 'mdi-instagram',
    url: 'https://www.instagram.com/estacioipu_',
    descricao: 'Bastidores, avisos e novidades do dia a dia da instituição.',
    acao: 'Seguir no Instagram'
  },
  {
    nome: 'Facebook',
    usuario: '/VeritasEducacional',
    icone: 'mdi-facebook',
    url: 'https://www.facebook.com/VeritasEducacional/',
    descricao: 'Eventos, editais e conteúdo da comunidade acadêmica.',
    acao: 'Curta no Facebook'
  }
]

export const contato = {
  email: 'falekairos@hotmail.com',
  telefone: '(86) 98111-6877',
  // Versões utilizáveis em links (tel:, mailto:).
  telefoneLink: 'tel:+5586981116877',
  emailLink: 'mailto:falekairos@hotmail.com',
  central: 'Central de Atendimento — Seg a Sex, 8h às 20h',
  enderecoReitoria: 'Rua Antonio Memoria, nº 768, Bairro Nova Aldeota, CEP 62250-000, Ipu — Ceará',
  mapaLink:
    'https://www.google.com/maps/search/?api=1&query=Rua+Antonio+Memoria,+768,+Nova+Aldeota,+62250-000,+Ipu+-+CE',
}

export const datasImportantes = [
  {
    titulo: 'Inscrições em processos seletivos',
    periodo: 'Abertas o ano todo, com vagas para ingresso imediato.',
  },
  { titulo: 'Prova de bolsas e descontos', periodo: 'Chamadas mensais, aplicação online.' },
  {
    titulo: 'Transferência e segunda graduação',
    periodo: 'Análise de histórico em até 5 dias úteis.',
  },
]

export const lgpd = {
  lei: 'Lei Geral de Proteção de Dados (Lei nº 13.709/2018)',
  aviso:
    'Tratamos seus dados pessoais com finalidade específica, de forma segura e transparente, conforme a LGPD (Lei nº 13.709/2018).',
  encarregado: 'Encarregado pelo Tratamento de Dados (DPO)',
  emailDpo: 'falekairos@hotmail.com',
}

export const politicaPrivacidade = {
  titulo: 'Política de Privacidade',
  atualizadoEm: '24/09/2026',
  introducao:
    'Esta Política de Privacidade descreve como a MI Empreendimentos Educacionais LTDA (nome fantasia Veritas Educacional), inscrita no CNPJ 62.172.634/0001-89, coleta, usa, armazena e protege os dados pessoais de visitantes, candidatos e estudantes, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).',
  secoes: [
    {
      titulo: '1. Quem é o controlador dos dados',
      paragrafos: [
        'O controlador dos dados pessoais tratados neste site é a MI Empreendimentos Educacionais LTDA, com sede na Rua Antonio Memoria, nº 768, Bairro Nova Aldeota, CEP 62250-000, Ipu — CE.',
        'Dúvidas sobre esta política podem ser enviadas para o nosso Encarregado pelo Tratamento de Dados (DPO) pelo e-mail falekairos@hotmail.com.',
      ],
    },
    {
      titulo: '2. Quais dados coletamos',
      paragrafos: [
        'Dados fornecidos por você: nome completo, e-mail, telefone, curso de interesse, assunto e o conteúdo da mensagem enviada pelos nossos formulários.',
        'Dados de navegação: informações técnicas como endereço IP, tipo de navegador, páginas visitadas e data/hora de acesso, obtidas por meio de cookies e tecnologias similares.',
        'Não coletamos dados sensíveis nem dados de crianças e adolescentes sem o consentimento específico dos responsáveis legais.',
      ],
    },
    {
      titulo: '3. Para que usamos os seus dados',
      paragrafos: [
        'Responder solicitações de contato, inscrições, pedidos de informação sobre cursos, bolsas e processos seletivos.',
        'Enviar comunicações e novidades, quando você autoriza esse contato.',
        'Melhorar a experiência de navegação, medir desempenho do site e prevenir fraudes e usos indevidos.',
      ],
    },
    {
      titulo: '4. Base legal do tratamento',
      paragrafos: [
        'O tratamento é realizado com fundamento no consentimento do titular, na execução de procedimentos preliminares a contrato, no cumprimento de obrigação legal ou regulatória e no legítimo interesse, conforme o art. 7º da LGPD.',
      ],
    },
    {
      titulo: '5. Compartilhamento de dados',
      paragrafos: [
        'Não vendemos dados pessoais. Podemos compartilhá-los apenas com prestadores de serviço que apoiam nossa operação (como hospedagem, e-mail e ferramentas de análise), sempre sob obrigações de confidencialidade e segurança, ou quando houver determinação legal ou judicial.',
      ],
    },
    {
      titulo: '6. Seus direitos como titular',
      paragrafos: [
        'Nos termos do art. 18 da LGPD, você pode solicitar: confirmação da existência de tratamento, acesso, correção de dados incompletos ou desatualizados, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade, informação sobre compartilhamentos e revogação do consentimento.',
        'Para exercer seus direitos, envie um pedido para falekairos@hotmail.com. Responderemos dentro dos prazos previstos na legislação.',
      ],
    },
    {
      titulo: '7. Segurança e retenção',
      paragrafos: [
        'Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acessos não autorizados, perda, alteração ou destruição.',
        'Os dados são mantidos apenas pelo tempo necessário ao cumprimento das finalidades descritas nesta política ou de obrigações legais aplicáveis.',
      ],
    },
    {
      titulo: '8. Cookies',
      paragrafos: [
        'Utilizamos cookies essenciais para o funcionamento do site e cookies de desempenho para entender como as páginas são utilizadas. Você pode gerenciar ou desativar cookies nas configurações do seu navegador.',
      ],
    },
    {
      titulo: '9. Alterações desta política',
      paragrafos: [
        'Esta política pode ser atualizada para refletir mudanças legais ou operacionais. A data da última atualização será sempre indicada no topo desta página. Recomendamos consultá-la periodicamente.',
      ],
    },
  ],
}
