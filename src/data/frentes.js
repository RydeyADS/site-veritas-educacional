// Estrutura de informação organizada por "Frentes de conhecimento",
// no mesmo espírito do site de referência (blocos numerados de áreas com subitens).

export const frentes = [
  {
    slug: 'tecnologia-e-inovacao',
    numero: 'Frente 01',
    titulo: 'Tecnologia e Inovação',
    icone: 'mdi-cpu-64-bit',
    cor: '#1E88E5',
    descricao:
      'Formação prática em desenvolvimento, dados, infraestrutura e segurança da informação, com laboratórios próprios e projetos integradores desde o primeiro semestre.',
    cursos: [
      {
        slug: 'analise-e-desenvolvimento-de-sistemas',
        nome: 'Análise e Desenvolvimento de Sistemas',
        grau: 'Tecnólogo',
        duracao: '5 semestres',
        modalidade: 'Híbrido',
        turnos: ['Manhã', 'Noite'],
        mensalidade: 389,
        resumo:
          'Projete, construa e mantenha aplicações web e mobile, trabalhando em equipe com metodologias ágeis.',
        descricao:
          'O curso forma profissionais capazes de analisar requisitos, modelar dados e entregar software de qualidade. A grade combina fundamentos de programação com frameworks modernos, banco de dados, APIs e testes automatizados.',
        competencias: [
          'Lógica de programação e estrutura de dados',
          'Desenvolvimento web front-end e back-end',
          'APIs REST, banco de dados e integrações',
          'Metodologias ágeis e versionamento de código',
          'Testes automatizados e qualidade de software'
        ],
        coordenador: 'Prof.ª Helena Marques',
        destaques: ['Laboratório de desenvolvimento', 'Projetos reais com empresas parceiras']
      },
      {
        slug: 'ciencia-de-dados',
        nome: 'Ciência de Dados',
        grau: 'Tecnólogo',
        duracao: '5 semestres',
        modalidade: 'EAD',
        turnos: ['Flexível'],
        mensalidade: 349,
        resumo:
          'Transforme dados brutos em decisões: estatística, engenharia de dados e aprendizado de máquina.',
        descricao:
          'Curso voltado à leitura, tratamento e modelagem de grandes volumes de dados. O aluno aprende a construir pipelines, criar painéis analíticos e aplicar modelos preditivos em problemas de negócio.',
        competencias: [
          'Estatística aplicada e análises exploratórias',
          'Python, SQL e engenharia de dados',
          'Visualização de dados e storytelling',
          'Machine learning e modelos preditivos',
          'Governança e ética em dados'
        ],
        coordenador: 'Prof. Rodrigo Tavares',
        destaques: ['Trilha com projetos de portfólio', 'Ambientes em nuvem para os alunos']
      },
      {
        slug: 'seguranca-da-informacao',
        nome: 'Segurança da Informação',
        grau: 'Tecnólogo',
        duracao: '5 semestres',
        modalidade: 'Presencial',
        turnos: ['Noite'],
        mensalidade: 419,
        resumo: 'Proteja pessoas, sistemas e redes com práticas de defesa, monitoramento e resposta a incidentes.',
        descricao:
          'O curso prepara profissionais para identificar vulnerabilidades, implantar controles de segurança e responder a incidentes. Inclui laboratórios de redes, análise de malwares e governança em conformidade com a LGPD.',
        competencias: [
          'Redes, firewall e segmentação',
          'Criptografia e gestão de identidades',
          'Análise de vulnerabilidades e pentest ético',
          'Resposta a incidentes e forense digital',
          'Conformidade, LGPD e políticas de segurança'
        ],
        coordenador: 'Prof. Bruno Alcântara',
        destaques: ['Laboratório de cibersegurança', 'Simulações de ataque e defesa']
      }
    ]
  },
  {
    slug: 'saude-e-bem-estar',
    numero: 'Frente 02',
    titulo: 'Saúde e Bem-Estar',
    icone: 'mdi-heart-pulse',
    cor: '#2E7D32',
    descricao:
      'Cursos com forte carga prática em clínicas-escola, laboratórios de simulação e estágios supervisionados em rede própria de atendimento.',
    cursos: [
      {
        slug: 'enfermagem',
        nome: 'Enfermagem',
        grau: 'Bacharelado',
        duracao: '10 semestres',
        modalidade: 'Presencial',
        turnos: ['Manhã', 'Noite'],
        mensalidade: 699,
        resumo: 'Cuide de pessoas em todas as fases da vida, com estágio supervisionado desde o terceiro ano.',
        descricao:
          'Formação generalista com ênfase em saúde coletiva, urgência e emergência, e cuidado hospitalar. O curso possui laboratórios de simulação realística e convênios com hospitais da região.',
        competencias: [
          'Semiologia e semiotécnica',
          'Saúde coletiva e atenção primária',
          'Urgência, emergência e UTI',
          'Gestão de serviços de enfermagem',
          'Práticas integrativas e cuidado humanizado'
        ],
        coordenador: 'Prof.ª Camila Nogueira',
        destaques: ['Clínica-escola própria', 'Simulação realística de alta fidelidade']
      },
      {
        slug: 'fisioterapia',
        nome: 'Fisioterapia',
        grau: 'Bacharelado',
        duracao: '10 semestres',
        modalidade: 'Presencial',
        turnos: ['Manhã'],
        mensalidade: 749,
        resumo: 'Reabilite movimentos e melhore a qualidade de vida com atendimento em clínica-escola gratuita.',
        descricao:
          'O curso desenvolve competências em fisioterapia traumato-ortopédica, neurofuncional, respiratória e esportiva, com ambulatório que atende a comunidade.',
        competencias: [
          'Avaliação funcional e cinesiologia',
          'Fisioterapia traumato-ortopédica',
          'Fisioterapia neurofuncional',
          'Fisioterapia respiratória e cardíaca',
          'Fisioterapia esportiva e prevenção'
        ],
        coordenador: 'Prof. Diego Fontes',
        destaques: ['Ambulatório comunitário', 'Acompanhamento de atletas amadores']
      },
      {
        slug: 'psicologia',
        nome: 'Psicologia',
        grau: 'Bacharelado',
        duracao: '10 semestres',
        modalidade: 'Presencial',
        turnos: ['Manhã', 'Noite'],
        mensalidade: 819,
        resumo: 'Compreenda o comportamento humano e atue em clínica, organizações, saúde pública e educação.',
        descricao:
          'Grade com sólida base teórica e intensa prática supervisionada. O aluno realiza atendimentos na clínica-escola sob supervisão docente ao longo dos últimos semestres.',
        competencias: [
          'Fundamentos e história da psicologia',
          'Avaliação e testes psicológicos',
          'Psicologia clínica e psicoterapia',
          'Psicologia organizacional',
          'Saúde mental e políticas públicas'
        ],
        coordenador: 'Prof.ª Renata Lemes',
        destaques: ['Clínica-escola de atendimento', 'Grupos de estudo e pesquisa']
      }
    ]
  },
  {
    slug: 'gestao-e-negocios',
    numero: 'Frente 03',
    titulo: 'Gestão e Negócios',
    icone: 'mdi-chart-line',
    cor: '#C97E00',
    descricao:
      'Formação para quem quer liderar resultados: administração, finanças, marketing e inovação com estudos de caso reais.',
    cursos: [
      {
        slug: 'administracao',
        nome: 'Administração',
        grau: 'Bacharelado',
        duracao: '8 semestres',
        modalidade: 'Híbrido',
        turnos: ['Manhã', 'Noite'],
        mensalidade: 559,
        resumo: 'Aprenda a planejar, organizar e liderar organizações em um mercado em constante mudança.',
        descricao:
          'Curso generalista com trilhas de aprofundamento em finanças, gestão de pessoas e estratégia. Inclui empresa júnior e projetos de consultoria comunitária.',
        competencias: [
          'Teoria geral da administração',
          'Finanças e controladoria',
          'Gestão de pessoas e liderança',
          'Marketing e estratégia',
          'Empreendedorismo e inovação'
        ],
        coordenador: 'Prof. Marcos Vinícius Prado',
        destaques: ['Empresa júnior ativa', 'Trilhas de especialização']
      },
      {
        slug: 'ciencias-contabeis',
        nome: 'Ciências Contábeis',
        grau: 'Bacharelado',
        duracao: '8 semestres',
        modalidade: 'EAD',
        turnos: ['Flexível'],
        mensalidade: 449,
        resumo: 'Domine números e normas contábeis para atuar como contador ou analista financeiro.',
        descricao:
          'O curso prepara para escrituração, análise de demonstrações contábeis, auditoria e planejamento tributário, com laboratório contábil informatizado.',
        competencias: [
          'Contabilidade geral e societária',
          'Legislação tributária e fiscal',
          'Auditoria e perícia contábil',
          'Análise das demonstrações contábeis',
          'Sistemas de informação contábil'
        ],
        coordenador: 'Prof.ª Patrícia Fernandes',
        destaques: ['Preparatório para o CRC', 'Laboratório contábil']
      },
      {
        slug: 'marketing-digital',
        nome: 'Marketing Digital',
        grau: 'Tecnólogo',
        duracao: '4 semestres',
        modalidade: 'Híbrido',
        turnos: ['Noite'],
        mensalidade: 399,
        resumo: 'Construa estratégias de conteúdo, tráfego e relacionamento para marcas digitais.',
        descricao:
          'Curso rápido e prático, com agência-modelo onde o aluno gerencia campanhas reais de pequenos negócios.',
        competencias: [
          'Comportamento do consumidor',
          'Conteúdo e SEO',
          'Tráfego pago e mídia',
          'Analytics e métricas',
          'CRM e automação de marketing'
        ],
        coordenador: 'Prof. Fábio Andrade',
        destaques: ['Agência-modelo', 'Certificações parceiras']
      }
    ]
  },
  {
    slug: 'educacao-e-humanidades',
    numero: 'Frente 04',
    titulo: 'Educação e Humanidades',
    icone: 'mdi-school',
    cor: '#6A1B9A',
    descricao:
      'Licenciaturas e cursos voltados à formação docente, ao serviço social e à comunicação, com prática em escolas parceiras.',
    cursos: [
      {
        slug: 'pedagogia',
        nome: 'Pedagogia',
        grau: 'Licenciatura',
        duracao: '8 semestres',
        modalidade: 'Híbrido',
        turnos: ['Manhã', 'Noite'],
        mensalidade: 419,
        resumo: 'Forme-se para educar crianças e coordenar projetos pedagógicos na escola e além dela.',
        descricao:
          'Curso com sólida base em didática, psicologia da educação e gestão escolar, com estágios em escolas conveniadas desde o primeiro ano.',
        competencias: [
          'Didática e metodologias ativas',
          'Psicologia da aprendizagem',
          'Alfabetização e letramento',
          'Gestão e coordenação pedagógica',
          'Educação inclusiva'
        ],
        coordenador: 'Prof.ª Luciana Barreto',
        destaques: ['Estágio em escolas parceiras', 'Laboratório de aprendizagem']
      },
      {
        slug: 'servico-social',
        nome: 'Serviço Social',
        grau: 'Bacharelado',
        duracao: '8 semestres',
        modalidade: 'Presencial',
        turnos: ['Noite'],
        mensalidade: 489,
        resumo: 'Atue na garantia de direitos e no enfrentamento das desigualdades sociais.',
        descricao:
          'O curso articula teoria e prática na formulação e execução de políticas públicas, com núcleo de prática supervisionada em equipamentos sociais.',
        competencias: [
          'Fundamentos histórico-teóricos do serviço social',
          'Políticas sociais e seguridade',
          'Trabalho social com famílias',
          'Direitos humanos',
          'Pesquisa social e avaliação de projetos'
        ],
        coordenador: 'Prof. Alex Ribeiro',
        destaques: ['Núcleo de prática supervisionada', 'Projetos com a comunidade']
      }
    ]
  },
  {
    slug: 'engenharias-e-sustentabilidade',
    numero: 'Frente 05',
    titulo: 'Engenharias e Sustentabilidade',
    icone: 'mdi-factory',
    cor: '#00838F',
    descricao:
      'Engenharia com laboratórios de ponta e projetos aplicados a energia, produção e construção sustentável.',
    cursos: [
      {
        slug: 'engenharia-de-producao',
        nome: 'Engenharia de Produção',
        grau: 'Bacharelado',
        duracao: '10 semestres',
        modalidade: 'Presencial',
        turnos: ['Manhã'],
        mensalidade: 799,
        resumo: 'Otimize processos, custos e qualidade unindo engenharia e gestão.',
        descricao:
          'Formação que integra engenharia, gestão e análise de dados para projetar e melhorar sistemas produtivos em indústrias e serviços.',
        competencias: [
          'Pesquisa operacional e otimização',
          'Gestão da qualidade e lean',
          'Logística e cadeia de suprimentos',
          'Engenharia de produto',
          'Simulação de processos'
        ],
        coordenador: 'Prof. Ricardo Teles',
        destaques: ['Laboratório de processos', 'Parcerias com indústrias']
      },
      {
        slug: 'engenharia-ambiental',
        nome: 'Engenharia Ambiental',
        grau: 'Bacharelado',
        duracao: '10 semestres',
        modalidade: 'Presencial',
        turnos: ['Manhã'],
        mensalidade: 829,
        resumo: 'Projete soluções para água, resíduos e energia com foco em sustentabilidade.',
        descricao:
          'O curso forma engenheiros capazes de desenvolver tecnologias limpas, monitorar impactos ambientais e atuar em saneamento e gestão de recursos naturais.',
        competencias: [
          'Química e microbiologia ambiental',
          'Tratamento de água e efluentes',
          'Gestão de resíduos sólidos',
          'Energias renováveis',
          'Licenciamento e legislação ambiental'
        ],
        coordenador: 'Prof.ª Aline Coelho',
        destaques: ['Laboratório de análises', 'Projetos de extensão ambiental']
      }
    ]
  }
]

export const todosOsCursos = frentes.flatMap((frente) =>
  frente.cursos.map((curso) => ({
    ...curso,
    frente: { slug: frente.slug, titulo: frente.titulo, numero: frente.numero, cor: frente.cor }
  }))
)

export function encontrarCurso(slug) {
  return todosOsCursos.find((curso) => curso.slug === slug)
}

export function encontrarFrente(slug) {
  return frentes.find((frente) => frente.slug === slug)
}
