// GitHub Copilot Quiz Questions Database
// 180 questions covering all 7 domains of GH-300 certification

const questionsDatabase = [
    // Domain 1: IA Responsável (7% - 13 questions)
    {
        id: 1,
        domain: "Domínio 1: IA Responsável",
        question: "Qual é um dos principais princípios do uso responsável da IA?",
        alternatives: [
            "Maximizar o lucro sem considerar impactos sociais",
            "Garantir transparência e explicabilidade das decisões da IA",
            "Utilizar toda informação disponível sem restrições",
            "Priorizar velocidade sobre precisão",
            "Automatizar todos os processos possíveis"
        ],
        correct: 1
    },
    {
        id: 2,
        domain: "Domínio 1: IA Responsável",
        question: "Quais são os principais riscos associados ao uso inadequado de ferramentas de IA?",
        alternatives: [
            "Apenas custos financeiros elevados",
            "Somente problemas técnicos menores",
            "Bias, privacidade comprometida e decisões discriminatórias",
            "Redução da produtividade",
            "Incompatibilidade com sistemas legados"
        ],
        correct: 2
    },
    {
        id: 3,
        domain: "Domínio 1: IA Responsável",
        question: "Por que é importante validar as saídas de ferramentas de IA generativa?",
        alternatives: [
            "Para aumentar a velocidade de processamento",
            "Para reduzir custos operacionais",
            "Porque as IAs podem gerar informações incorretas ou enviesadas",
            "Para melhorar a interface do usuário",
            "Para compatibilidade com diferentes navegadores"
        ],
        correct: 2
    },
    {
        id: 4,
        domain: "Domínio 1: IA Responsável",
        question: "Qual é uma limitação importante das ferramentas de IA generativa relacionada aos dados de origem?",
        alternatives: [
            "Consomem muita energia elétrica",
            "Só funcionam em dispositivos modernos",
            "Os dados de treinamento podem ser desatualizados ou enviesados",
            "Requerem conexão constante com a internet",
            "Não suportam múltiplos idiomas"
        ],
        correct: 2
    },
    {
        id: 5,
        domain: "Domínio 1: IA Responsável",
        question: "Como uma organização pode operar IA de forma responsável?",
        alternatives: [
            "Implementando controles éticos, auditoria regular e transparência",
            "Automatizando todas as decisões sem supervisão humana",
            "Coletando o máximo de dados possível",
            "Priorizando velocidade sobre precisão",
            "Evitando qualquer tipo de regulamentação"
        ],
        correct: 0
    },
    {
        id: 6,
        domain: "Domínio 1: IA Responsável",
        question: "Qual é um exemplo de dano potencial da IA generativa relacionado ao enviesamento?",
        alternatives: [
            "Alto consumo de CPU",
            "Discriminação sistemática contra grupos específicos",
            "Lentidão no processamento",
            "Incompatibilidade de formatos",
            "Falhas de conectividade"
        ],
        correct: 1
    },
    {
        id: 7,
        domain: "Domínio 1: IA Responsável",
        question: "Como mitigar riscos de código inseguro gerado por IA?",
        alternatives: [
            "Acelerar o processo de desenvolvimento",
            "Implementar revisões de código, testes de segurança e validação humana",
            "Usar apenas bibliotecas proprietárias",
            "Evitar documentação detalhada",
            "Reduzir o número de desenvolvedores"
        ],
        correct: 1
    },
    {
        id: 8,
        domain: "Domínio 1: IA Responsável",
        question: "O que caracteriza a IA ética?",
        alternatives: [
            "Máximo lucro com mínimo investimento",
            "Decisões baseadas exclusivamente em dados",
            "Respeito por direitos humanos, equidade e bem-estar social",
            "Automação completa de processos",
            "Velocidade de processamento otimizada"
        ],
        correct: 2
    },
    {
        id: 9,
        domain: "Domínio 1: IA Responsável",
        question: "Qual é um risco de privacidade ao usar ferramentas de IA generativa?",
        alternatives: [
            "Lentidão na geração de respostas",
            "Exposição inadvertida de informações confidenciais nos prompts",
            "Alto custo de licenciamento",
            "Incompatibilidade com sistemas antigos",
            "Necessidade de atualizações frequentes"
        ],
        correct: 1
    },
    {
        id: 10,
        domain: "Domínio 1: IA Responsável",
        question: "Por que a transparência é importante no uso de IA?",
        alternatives: [
            "Para reduzir custos operacionais",
            "Para aumentar a velocidade de processamento",
            "Para permitir compreensão e auditoria das decisões da IA",
            "Para melhorar a interface do usuário",
            "Para compatibilidade com dispositivos móveis"
        ],
        correct: 2
    },
    {
        id: 11,
        domain: "Domínio 1: IA Responsável",
        question: "Como a equidade pode ser comprometida no uso de IA?",
        alternatives: [
            "Por meio de algoritmos que perpetuam discriminação histórica",
            "Pelo alto custo de implementação",
            "Por problemas de conectividade",
            "Por limitações de hardware",
            "Por falta de documentação técnica"
        ],
        correct: 0
    },
    {
        id: 12,
        domain: "Domínio 1: IA Responsável",
        question: "Qual é uma estratégia para promover IA responsável em uma equipe de desenvolvimento?",
        alternatives: [
            "Maximizar a automação sem supervisão",
            "Estabelecer diretrizes éticas e treinamento em IA responsável",
            "Focar apenas em métricas de performance",
            "Evitar qualquer regulamentação externa",
            "Priorizar velocidade sobre qualidade"
        ],
        correct: 1
    },
    {
        id: 13,
        domain: "Domínio 1: IA Responsável",
        question: "Qual é o papel da supervisão humana no uso responsável de IA?",
        alternatives: [
            "É desnecessária se a IA for suficientemente avançada",
            "Deve ser minimizada para reduzir custos",
            "É essencial para validar, corrigir e contextualizar saídas da IA",
            "Só é importante durante a fase de desenvolvimento",
            "Deve ser limitada a casos de erro"
        ],
        correct: 2
    },

    // Domain 2: Planos e recursos do GitHub Copilot (31% - 56 questions)
    {
        id: 14,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais são os principais planos disponíveis do GitHub Copilot?",
        alternatives: [
            "Apenas Individual e Business",
            "Individual, Business e Enterprise",
            "Free, Pro e Enterprise",
            "Basic, Standard e Premium",
            "Developer, Team e Organization"
        ],
        correct: 1
    },
    {
        id: 15,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é a principal diferença entre Copilot Individual e Copilot Business?",
        alternatives: [
            "O Individual é mais rápido",
            "O Business inclui exclusões de dados e indenização de IP",
            "O Individual suporta mais linguagens",
            "O Business é mais barato",
            "Não há diferenças significativas"
        ],
        correct: 1
    },
    {
        id: 16,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "O que é o GitHub Copilot Chat no IDE?",
        alternatives: [
            "Um sistema de mensagens entre desenvolvedores",
            "Uma interface conversacional para interagir com o Copilot",
            "Um canal de suporte técnico",
            "Um sistema de notificações",
            "Uma ferramenta de controle de versão"
        ],
        correct: 1
    },
    {
        id: 17,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais são as principais formas de acionar o GitHub Copilot?",
        alternatives: [
            "Apenas através de comandos de voz",
            "Chat, chat em linha, sugestões automáticas e CLI",
            "Somente via interface web",
            "Apenas por meio de extensões",
            "Exclusivamente através de APIs"
        ],
        correct: 1
    },
    {
        id: 18,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "O que são exclusões de dados no GitHub Copilot Business?",
        alternatives: [
            "Dados que são automaticamente deletados",
            "Configurações para impedir que códigos de repositórios específicos sejam usados pelo Copilot",
            "Dados corrompidos que devem ser ignorados",
            "Informações de backup desnecessárias",
            "Logs de erro que podem ser descartados"
        ],
        correct: 1
    },
    {
        id: 19,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Para que servem os logs de auditoria organizacionais no GitHub Copilot Business?",
        alternatives: [
            "Para melhorar a performance do sistema",
            "Para monitorar e rastrear o uso do Copilot na organização",
            "Para backup automático de dados",
            "Para compressão de arquivos",
            "Para sincronização entre dispositivos"
        ],
        correct: 1
    },
    {
        id: 20,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como é possível gerenciar assinaturas do GitHub Copilot Business?",
        alternatives: [
            "Apenas através da interface web",
            "Somente por telefone",
            "Via API REST e interface web do GitHub",
            "Exclusivamente por email",
            "Apenas através de tickets de suporte"
        ],
        correct: 2
    },
    {
        id: 21,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Em que cenários o GitHub Copilot Chat é mais eficaz?",
        alternatives: [
            "Apenas para correção de bugs simples",
            "Explicação de código, geração de testes e refatoração",
            "Somente para formatação de código",
            "Exclusivamente para documentação",
            "Apenas para compilação de projetos"
        ],
        correct: 1
    },
    {
        id: 22,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como melhorar o desempenho do GitHub Copilot Chat?",
        alternatives: [
            "Usar prompts específicos e contextualizados",
            "Fazer perguntas muito genéricas",
            "Evitar dar contexto sobre o projeto",
            "Usar apenas comandos curtos",
            "Não fornecer exemplos de código"
        ],
        correct: 0
    },
    {
        id: 23,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é uma limitação importante do GitHub Copilot Chat?",
        alternatives: [
            "Só funciona em horários específicos",
            "Pode gerar código incorreto ou inseguro que requer validação",
            "Não suporta linguagens populares",
            "Apenas funciona offline",
            "Requer hardware específico"
        ],
        correct: 1
    },
    {
        id: 24,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "O que são comandos de barra no GitHub Copilot Chat?",
        alternatives: [
            "Comandos para deletar código",
            "Comandos especiais que começam com '/' para ações específicas",
            "Comandos de navegação no código",
            "Comandos de compilação",
            "Comandos de debug"
        ],
        correct: 1
    },
    {
        id: 25,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é um recurso exclusivo do GitHub Copilot Enterprise?",
        alternatives: [
            "Sugestões de código mais rápidas",
            "Chat no GitHub.com e Bases de Conhecimento",
            "Suporte a mais linguagens de programação",
            "Interface mais amigável",
            "Menor consumo de recursos"
        ],
        correct: 1
    },
    {
        id: 26,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "O que são resumos de solicitação de pull do GitHub Copilot?",
        alternatives: [
            "Logs detalhados de todas as mudanças",
            "Resumos automáticos gerados pelo Copilot sobre as mudanças em PRs",
            "Estatísticas de performance do código",
            "Lista de desenvolvedores que contribuíram",
            "Análise de segurança automática"
        ],
        correct: 1
    },
    {
        id: 27,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "O que são Bases de Conhecimento no GitHub Copilot Enterprise?",
        alternatives: [
            "Repositórios públicos de código",
            "Coleções personalizadas de informações para melhorar sugestões do Copilot",
            "Documentação oficial do GitHub",
            "Tutoriais de programação",
            "Fóruns de discussão"
        ],
        correct: 1
    },
    {
        id: 28,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Que tipos de conhecimento podem ser armazenados em Bases de Conhecimento?",
        alternatives: [
            "Apenas código fonte",
            "Trechos de código, práticas recomendadas e padrões de design",
            "Somente documentação técnica",
            "Apenas informações de debug",
            "Exclusivamente dados de performance"
        ],
        correct: 1
    },
    {
        id: 29,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais são os benefícios das Bases de Conhecimento para desenvolvimento?",
        alternatives: [
            "Apenas redução de custos",
            "Melhorar qualidade, consistência e eficiência do código",
            "Somente aumento de velocidade",
            "Apenas compatibilidade",
            "Exclusivamente redução de bugs"
        ],
        correct: 1
    },
    {
        id: 30,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como instalar o GitHub Copilot na CLI?",
        alternatives: [
            "gh extension install github/gh-copilot",
            "npm install github-copilot-cli",
            "pip install github-copilot",
            "apt-get install gh-copilot",
            "curl -L copilot.github.com/install"
        ],
        correct: 0
    },
    {
        id: 31,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual comando é usado para interagir com o Copilot na CLI?",
        alternatives: [
            "copilot chat",
            "gh copilot",
            "git copilot",
            "github copilot",
            "cli copilot"
        ],
        correct: 1
    },
    {
        id: 32,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "O que é indenização de IP no GitHub Copilot Business?",
        alternatives: [
            "Seguro contra falhas de sistema",
            "Proteção legal contra reivindicações de propriedade intelectual",
            "Backup de dados automático",
            "Suporte técnico premium",
            "Garantia de uptime"
        ],
        correct: 1
    },
    {
        id: 33,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como compartilhar feedback sobre o GitHub Copilot Chat?",
        alternatives: [
            "Apenas por email",
            "Através de botões de feedback na interface e GitHub Community",
            "Somente por telefone",
            "Exclusivamente via tickets",
            "Apenas em fóruns não oficiais"
        ],
        correct: 1
    },
    {
        id: 34,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é uma prática recomendada para usar o GitHub Copilot Chat?",
        alternatives: [
            "Aceitar todas as sugestões sem revisão",
            "Fornecer contexto claro e específico nos prompts",
            "Usar apenas comandos de uma palavra",
            "Evitar dar exemplos",
            "Fazer perguntas muito vagas"
        ],
        correct: 1
    },
    {
        id: 35,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Para clientes que não são do GitHub, como o Copilot pode ser acessado?",
        alternatives: [
            "Não é possível usar sem conta GitHub",
            "Através de integrações em IDEs populares com conta Microsoft/GitHub",
            "Apenas via API externa",
            "Somente através de parceiros",
            "Exclusivamente via download standalone"
        ],
        correct: 1
    },
    {
        id: 36,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como demonstrar exclusão de arquivos específicos no GitHub Copilot?",
        alternatives: [
            "Editando .gitignore apenas",
            "Configurando .copilotignore ou políticas organizacionais",
            "Removendo permissões de arquivo",
            "Usando comandos de terminal",
            "Alterando configurações do IDE"
        ],
        correct: 1
    },
    {
        id: 37,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "O que permite estabelecer gerenciamento de políticas organizacionais no Copilot?",
        alternatives: [
            "Apenas administradores de repositório",
            "Configurações de organização no GitHub para controlar acesso e uso",
            "Somente proprietários de arquivos",
            "Apenas desenvolvedores sênior",
            "Exclusivamente via API"
        ],
        correct: 1
    },
    {
        id: 38,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como pesquisar eventos específicos nos logs de auditoria do Copilot Business?",
        alternatives: [
            "Apenas navegação manual",
            "Usando filtros por usuário, ação, data e repositório",
            "Somente busca textual simples",
            "Apenas ordenação cronológica",
            "Exclusivamente por download de arquivos"
        ],
        correct: 1
    },
    {
        id: 39,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais configurações podem ser ajustadas no GitHub Copilot CLI?",
        alternatives: [
            "Apenas idioma de interface",
            "Formato de saída, verbosidade e preferências de modelo",
            "Somente cores do terminal",
            "Apenas atalhos de teclado",
            "Exclusivamente configurações de rede"
        ],
        correct: 1
    },
    {
        id: 40,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "O que são sugestões múltiplas no GitHub Copilot?",
        alternatives: [
            "Sugestões para múltiplos arquivos",
            "Diferentes opções de completação de código para escolher",
            "Sugestões de múltiplos desenvolvedores",
            "Sugestões em múltiplos idiomas",
            "Sugestões para múltiplos projetos"
        ],
        correct: 1
    },
    {
        id: 41,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como o GitHub Copilot auxilia no tratamento de exceções?",
        alternatives: [
            "Apenas detectando erros",
            "Sugerindo blocos try-catch e estratégias de tratamento de erro",
            "Somente corrigindo sintaxe",
            "Apenas formatando código",
            "Exclusivamente removendo exceções"
        ],
        correct: 1
    },
    {
        id: 42,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é o benefício dos modelos personalizados no GitHub Copilot?",
        alternatives: [
            "Apenas velocidade maior",
            "Sugestões mais relevantes para padrões específicos da organização",
            "Somente redução de custos",
            "Apenas melhor interface",
            "Exclusivamente suporte offline"
        ],
        correct: 1
    },
    {
        id: 43,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como indexação funciona nas Bases de Conhecimento?",
        alternatives: [
            "Indexação manual apenas",
            "Processamento automático de conteúdo para busca e sugestões relevantes",
            "Apenas por tags manuais",
            "Somente ordenação alfabética",
            "Exclusivamente por data de criação"
        ],
        correct: 1
    },
    {
        id: 44,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Que tipos de prompts são mais eficazes no GitHub Copilot Chat?",
        alternatives: [
            "Prompts vagos e genéricos",
            "Prompts específicos com contexto, exemplos e objetivo claro",
            "Apenas comandos de uma palavra",
            "Somente perguntas técnicas complexas",
            "Exclusivamente comandos em inglês"
        ],
        correct: 1
    },
    {
        id: 45,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como usar sugestões de código do GitHub Copilot Chat?",
        alternatives: [
            "Apenas copiar e colar diretamente",
            "Revisar, adaptar e integrar sugestões no contexto do projeto",
            "Usar sem modificações sempre",
            "Apenas para referência visual",
            "Exclusivamente para aprendizado"
        ],
        correct: 1
    },
    {
        id: 46,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais são recursos disponíveis no IDE para GitHub Copilot Individual?",
        alternatives: [
            "Apenas completação básica",
            "Completação de código, chat inline e sugestões contextuais",
            "Somente correção de erros",
            "Apenas formatação de código",
            "Exclusivamente documentação automática"
        ],
        correct: 1
    },
    {
        id: 47,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como acessar GitHub Copilot Chat no GitHub.com?",
        alternatives: [
            "Disponível em todos os planos",
            "Recurso exclusivo do GitHub Copilot Enterprise",
            "Apenas via API",
            "Somente em repositórios privados",
            "Exclusivamente via aplicativo móvel"
        ],
        correct: 1
    },
    {
        id: 48,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual comando da CLI é usado para explicar comandos do terminal?",
        alternatives: [
            "gh copilot explain",
            "gh copilot help",
            "gh copilot describe",
            "gh copilot info",
            "gh copilot manual"
        ],
        correct: 0
    },
    {
        id: 49,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como gerenciar múltiplas sugestões no IDE?",
        alternatives: [
            "Aceitar sempre a primeira",
            "Usar Ctrl+Alt+] para navegar entre opções",
            "Apenas rejeitar todas",
            "Somente via menu contextual",
            "Exclusivamente por atalhos customizados"
        ],
        correct: 1
    },
    {
        id: 50,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "O que diferencia GitHub Copilot Business de Enterprise em termos de recursos?",
        alternatives: [
            "Apenas preço diferente",
            "Enterprise inclui Chat no GitHub.com e Bases de Conhecimento",
            "Business é mais rápido",
            "Enterprise suporta menos linguagens",
            "Não há diferenças funcionais"
        ],
        correct: 1
    },
    {
        id: 51,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como ativar chat inline no GitHub Copilot?",
        alternatives: [
            "Ctrl+I ou Cmd+I no IDE",
            "Apenas menu superior",
            "Somente clique direito",
            "Exclusivamente via comando",
            "Apenas tecla F1"
        ],
        correct: 0
    },
    {
        id: 52,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais informações são incluídas nos logs de auditoria organizacionais?",
        alternatives: [
            "Apenas dados de performance",
            "Usuário, ação, timestamp, repositório e detalhes de uso",
            "Somente erros do sistema",
            "Apenas estatísticas gerais",
            "Exclusivamente dados financeiros"
        ],
        correct: 1
    },
    {
        id: 53,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como criar uma Base de Conhecimento eficaz?",
        alternatives: [
            "Incluir apenas código",
            "Combinar código, documentação, padrões e melhores práticas",
            "Somente texto descritivo",
            "Apenas exemplos simples",
            "Exclusivamente links externos"
        ],
        correct: 1
    },
    {
        id: 54,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é o diferencial do faturamento entre Copilot Individual e Business?",
        alternatives: [
            "Individual é gratuito",
            "Business permite faturamento centralizado por organização",
            "Business é sempre mais barato",
            "Individual inclui mais recursos",
            "Não há diferenças de faturamento"
        ],
        correct: 1
    },
    {
        id: 55,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como pesquisar e gerenciar Bases de Conhecimento no Enterprise?",
        alternatives: [
            "Apenas navegação manual",
            "Interface de busca com filtros e categorização automática",
            "Somente por nome de arquivo",
            "Apenas ordenação cronológica",
            "Exclusivamente via API"
        ],
        correct: 1
    },
    {
        id: 56,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais comandos de barra são mais comuns no Copilot Chat?",
        alternatives: [
            "Apenas /help",
            "/explain, /fix, /test, /doc, /optimize",
            "Somente /run",
            "Apenas /save",
            "Exclusivamente /exit"
        ],
        correct: 1
    },
    {
        id: 57,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como configurar exclusões no nível organizacional?",
        alternatives: [
            "Apenas por repositório",
            "Configurações de organização no GitHub com políticas centralizadas",
            "Somente via arquivo local",
            "Apenas por usuário individual",
            "Exclusivamente via suporte"
        ],
        correct: 1
    },
    {
        id: 58,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é o propósito principal dos resumos de PR do Copilot?",
        alternatives: [
            "Apenas contar linhas de código",
            "Fornecer contexto automático sobre mudanças para revisores",
            "Somente listar arquivos modificados",
            "Apenas verificar sintaxe",
            "Exclusivamente calcular complexidade"
        ],
        correct: 1
    },
    {
        id: 59,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como o GitHub Copilot Business difere para não usuários de GHE?",
        alternatives: [
            "Funcionalidade idêntica",
            "Algumas limitações em recursos organizacionais específicos do GHE",
            "Completamente incompatível",
            "Apenas versão reduzida",
            "Sem diferenças práticas"
        ],
        correct: 1
    },
    {
        id: 60,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual API é usada para gerenciar assinaturas do Copilot Business?",
        alternatives: [
            "GraphQL API apenas",
            "GitHub REST API com endpoints específicos do Copilot",
            "API personalizada terceirizada",
            "Apenas webhooks",
            "API SOAP legada"
        ],
        correct: 1
    },
    {
        id: 61,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como otimizar o uso de modelos personalizados?",
        alternatives: [
            "Usar dados genéricos",
            "Treinar com padrões específicos da organização e casos de uso",
            "Apenas copiar modelos existentes",
            "Somente usar dados públicos",
            "Evitar personalização"
        ],
        correct: 1
    },
    {
        id: 62,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais etapas são necessárias para configurar Bases de Conhecimento?",
        alternatives: [
            "Apenas upload de arquivos",
            "Criação, indexação, categorização e configuração de acesso",
            "Somente definir permissões",
            "Apenas nomear repositórios",
            "Exclusivamente criar documentação"
        ],
        correct: 1
    },
    {
        id: 63,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como melhorar a precisão das sugestões do Copilot Chat?",
        alternatives: [
            "Usar prompts mais longos sempre",
            "Fornecer contexto específico, exemplos e objetivos claros",
            "Apenas usar linguagem técnica",
            "Somente fazer perguntas fechadas",
            "Evitar dar exemplos de código"
        ],
        correct: 1
    },
    {
        id: 64,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é uma configuração importante no GitHub Copilot CLI?",
        alternatives: [
            "Apenas cor do texto",
            "Definir formato de saída e nível de detalhamento",
            "Somente idioma da interface",
            "Apenas atalhos personalizados",
            "Exclusivamente configuração de proxy"
        ],
        correct: 1
    },
    {
        id: 65,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como acessar recursos do Enterprise sem estar no GitHub Enterprise?",
        alternatives: [
            "Não é possível",
            "Através de GitHub.com com licença Enterprise",
            "Apenas via API externa",
            "Somente com convite especial",
            "Exclusivamente via terceiros"
        ],
        correct: 1
    },
    {
        id: 66,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual comando do CLI é usado para sugerir comandos git?",
        alternatives: [
            "gh copilot suggest",
            "gh copilot git",
            "gh copilot command",
            "gh copilot shell",
            "gh copilot terminal"
        ],
        correct: 0
    },
    {
        id: 67,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como as exclusões de dados impactam o treinamento do modelo?",
        alternatives: [
            "Não têm impacto",
            "Impedem que código específico seja usado para treinar ou gerar sugestões",
            "Apenas reduzem velocidade",
            "Somente afetam a interface",
            "Exclusivamente alteram custos"
        ],
        correct: 1
    },
    {
        id: 68,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais são as limitações de configuração em organizações não-GHE?",
        alternatives: [
            "Nenhuma limitação",
            "Algumas políticas organizacionais podem não estar disponíveis",
            "Completamente sem suporte",
            "Apenas funcionalidades básicas",
            "Exclusivamente via terceiros"
        ],
        correct: 1
    },
    {
        id: 69,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como verificar se uma Base de Conhecimento está funcionando?",
        alternatives: [
            "Apenas verificar upload",
            "Testar sugestões e verificar se o contexto da base está sendo usado",
            "Somente contar arquivos",
            "Apenas verificar tamanho",
            "Exclusivamente via logs de sistema"
        ],
        correct: 1
    },

    // Domain 3: Como o GitHub Copilot funciona e lida com dados (15% - 27 questions)
    {
        id: 70,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é o primeiro passo no ciclo de vida de uma sugestão do GitHub Copilot?",
        alternatives: [
            "Geração da resposta pelo modelo",
            "Coleta e análise do contexto do código",
            "Pós-processamento da sugestão",
            "Validação de segurança",
            "Formatação para o IDE"
        ],
        correct: 1
    },
    {
        id: 71,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o GitHub Copilot reúne contexto para gerar sugestões?",
        alternatives: [
            "Apenas o arquivo atual",
            "Código circundante, comentários, nomes de variáveis e arquivos relacionados",
            "Somente comentários no código",
            "Apenas histórico de commits",
            "Exclusivamente documentação externa"
        ],
        correct: 1
    },
    {
        id: 72,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "O que acontece no serviço de proxy do GitHub Copilot?",
        alternatives: [
            "Apenas roteamento de dados",
            "Filtragem de conteúdo sensível e aplicação de políticas de segurança",
            "Somente compressão de dados",
            "Apenas cache de respostas",
            "Exclusivamente logging de atividades"
        ],
        correct: 1
    },
    {
        id: 73,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o modelo de linguagem de grande escala produz respostas?",
        alternatives: [
            "Busca em base de dados",
            "Análise probabilística de padrões baseada no prompt fornecido",
            "Execução de regras predefinidas",
            "Compilação de templates",
            "Recuperação de cache local"
        ],
        correct: 1
    },
    {
        id: 74,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "O que ocorre no pós-processamento das respostas do GitHub Copilot?",
        alternatives: [
            "Apenas formatação básica",
            "Filtragem de duplicações, verificação de qualidade e formatação",
            "Somente verificação de sintaxe",
            "Apenas compressão",
            "Exclusivamente tradução"
        ],
        correct: 1
    },
    {
        id: 75,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o GitHub Copilot identifica código correspondente?",
        alternatives: [
            "Por hash SHA",
            "Análise de similaridade semântica e estrutural",
            "Apenas por nome de arquivo",
            "Somente por data de criação",
            "Exclusivamente por autor"
        ],
        correct: 1
    },
    {
        id: 76,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como os dados são usados no GitHub Copilot Individual?",
        alternatives: [
            "Dados são sempre armazenados permanentemente",
            "Prompts podem ser usados para melhorar o serviço, mas não para treinar modelos",
            "Todos os dados são públicos automaticamente",
            "Dados são compartilhados com terceiros",
            "Informações ficam sempre locais"
        ],
        correct: 1
    },
    {
        id: 77,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é o fluxo de dados para completação de código no GitHub Copilot?",
        alternatives: [
            "Local → Modelo → Local",
            "IDE → Proxy → Modelo → Proxy → IDE",
            "Servidor → Cliente → Servidor",
            "Cache → Processo → Cache",
            "API → Database → API"
        ],
        correct: 1
    },
    {
        id: 78,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como funciona o fluxo de dados para GitHub Copilot Chat?",
        alternatives: [
            "Idêntico ao fluxo de completação",
            "Inclui processamento de conversação e contexto de chat histórico",
            "Apenas processamento local",
            "Somente via API REST",
            "Exclusivamente através de webhooks"
        ],
        correct: 1
    },
    {
        id: 79,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Quais tipos de processamento de entrada o GitHub Copilot Chat suporta?",
        alternatives: [
            "Apenas código",
            "Perguntas naturais, análise de código, geração e refatoração",
            "Somente comandos específicos",
            "Apenas texto simples",
            "Exclusivamente uploads de arquivo"
        ],
        correct: 1
    },
    {
        id: 80,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é uma limitação fundamental dos LLMs como o GitHub Copilot?",
        alternatives: [
            "Velocidade de processamento",
            "Podem gerar informações falsas ou alucinações",
            "Suporte limitado a idiomas",
            "Alto consumo de memória",
            "Incompatibilidade com sistemas antigos"
        ],
        correct: 1
    },
    {
        id: 81,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como os exemplos mais vistos nos dados de origem afetam as sugestões?",
        alternatives: [
            "Não têm impacto",
            "Padrões mais comuns nos dados de treinamento aparecem mais frequentemente",
            "Apenas afetam a velocidade",
            "Somente influenciam a formatação",
            "Exclusivamente alteram a linguagem"
        ],
        correct: 1
    },
    {
        id: 82,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é a limitação relacionada à idade das sugestões de código?",
        alternatives: [
            "Código sempre atual",
            "Dados de treinamento podem ser desatualizados para tecnologias recentes",
            "Apenas código antigo é sugerido",
            "Sem relação com cronologia",
            "Exclusivamente código moderno"
        ],
        correct: 1
    },
    {
        id: 83,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o GitHub Copilot difere de calculadoras em seu funcionamento?",
        alternatives: [
            "Funciona igual a uma calculadora",
            "Fornece raciocínio probabilístico e contextual, não cálculos exatos",
            "Apenas faz operações matemáticas",
            "Somente processamento lógico",
            "Exclusivamente baseado em regras"
        ],
        correct: 1
    },
    {
        id: 84,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "O que são janelas de contexto limitado?",
        alternatives: [
            "Limitações de interface",
            "Quantidade limitada de texto que o modelo pode processar por vez",
            "Restrições de permissão",
            "Limitações de rede",
            "Apenas limitações de tempo"
        ],
        correct: 1
    },
    {
        id: 85,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o GitHub Copilot cria um prompt internamente?",
        alternatives: [
            "Copia o texto exatamente",
            "Combina código circundante, comentários e metadados em formato estruturado",
            "Apenas pega a linha atual",
            "Somente usa comentários",
            "Exclusivamente histórico de edições"
        ],
        correct: 1
    },
    {
        id: 86,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Quais filtros são aplicados pelo serviço proxy?",
        alternatives: [
            "Apenas filtros de spam",
            "Filtros de privacidade, segurança, duplicação e políticas organizacionais",
            "Somente verificação de sintaxe",
            "Apenas compressão de dados",
            "Exclusivamente formatação"
        ],
        correct: 1
    },
    {
        id: 87,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o contexto é determinado para uma sugestão?",
        alternatives: [
            "Apenas o cursor atual",
            "Análise do código vizinho, estrutura do projeto e padrões de uso",
            "Somente o nome do arquivo",
            "Apenas comentários próximos",
            "Exclusivamente histórico git"
        ],
        correct: 1
    },
    {
        id: 88,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Quais dados são compartilhados no GitHub Copilot Individual?",
        alternatives: [
            "Todos os dados do repositório",
            "Trechos de código nos prompts, metadados de uso (não o código completo)",
            "Apenas dados públicos",
            "Nenhum dado é compartilhado",
            "Exclusivamente dados de performance"
        ],
        correct: 1
    },
    {
        id: 89,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o histórico de conversação influencia as respostas do Chat?",
        alternatives: [
            "Não influencia",
            "Fornece contexto contínuo para manter coerência na conversa",
            "Apenas acelera respostas",
            "Somente para estatísticas",
            "Exclusivamente para debug"
        ],
        correct: 1
    },
    {
        id: 90,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é o papel dos metadados no processamento do Copilot?",
        alternatives: [
            "Apenas para logging",
            "Ajudam a contextualizar e melhorar a relevância das sugestões",
            "Somente para faturamento",
            "Apenas para debug",
            "Exclusivamente para estatísticas"
        ],
        correct: 1
    },
    {
        id: 91,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como a estrutura do projeto influencia as sugestões?",
        alternatives: [
            "Não influencia",
            "Padrões arquiteturais e convenções ajudam a gerar código consistente",
            "Apenas pela velocidade",
            "Somente por tamanho de arquivo",
            "Exclusivamente por localização"
        ],
        correct: 1
    },
    {
        id: 92,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Quais informações sobre performance são coletadas?",
        alternatives: [
            "Todo o código fonte",
            "Métricas de uso, latência e satisfação do usuário",
            "Apenas dados pessoais",
            "Somente logs de erro",
            "Exclusivamente dados financeiros"
        ],
        correct: 1
    },
    {
        id: 93,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o Copilot trata dados sensíveis detectados?",
        alternatives: [
            "Ignora completamente",
            "Aplica filtros para reduzir exposição de informações sensíveis",
            "Armazena separadamente",
            "Reporta para administradores",
            "Apenas registra ocorrências"
        ],
        correct: 1
    },
    {
        id: 94,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é a diferença no manuseio de dados entre Individual e Business?",
        alternatives: [
            "Não há diferenças",
            "Business oferece mais controles de privacidade e exclusões",
            "Individual é mais seguro",
            "Business coleta mais dados",
            "Apenas diferenças de preço"
        ],
        correct: 1
    },
    {
        id: 95,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como funciona a detecção de código correspondente?",
        alternatives: [
            "Apenas comparação textual",
            "Análise semântica para identificar similaridades significativas",
            "Somente hash de arquivos",
            "Apenas por nome de função",
            "Exclusivamente por estrutura"
        ],
        correct: 1
    },
    {
        id: 96,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é o impacto das janelas de contexto nas sugestões?",
        alternatives: [
            "Não há impacto",
            "Limitam a quantidade de código que pode ser considerada simultaneamente",
            "Apenas afetam velocidade",
            "Somente influenciam formatação",
            "Exclusivamente alteram linguagem"
        ],
        correct: 1
    },

    // Domain 4: Elaboração de Prompts e Engenharia de Prompts (9% - 16 questions)
    {
        id: 97,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Quais são os fundamentos da criação de prompts eficazes?",
        alternatives: [
            "Apenas ser breve",
            "Clareza, contexto específico, objetivo definido e exemplos relevantes",
            "Somente usar linguagem técnica",
            "Apenas fazer perguntas fechadas",
            "Exclusivamente em inglês"
        ],
        correct: 1
    },
    {
        id: 98,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Como o contexto do prompt é determinado?",
        alternatives: [
            "Apenas pelo usuário",
            "Combinação de código circundante, projeto e entrada do usuário",
            "Somente por configurações",
            "Apenas por histórico",
            "Exclusivamente por templates"
        ],
        correct: 1
    },
    {
        id: 99,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Quais opções de idioma estão disponíveis para prompts no GitHub Copilot?",
        alternatives: [
            "Apenas inglês",
            "Múltiplos idiomas naturais e linguagens de programação",
            "Somente português",
            "Apenas linguagens de programação",
            "Exclusivamente idiomas europeus"
        ],
        correct: 1
    },
    {
        id: 100,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Quais são as diferentes partes de um prompt eficaz?",
        alternatives: [
            "Apenas a pergunta",
            "Contexto, objetivo, restrições, exemplos e formato de saída esperado",
            "Somente código exemplo",
            "Apenas palavras-chave",
            "Exclusivamente comandos"
        ],
        correct: 1
    },
    {
        id: 101,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Qual é a função principal do prompt?",
        alternatives: [
            "Apenas fazer perguntas",
            "Guiar o modelo para gerar respostas relevantes e úteis",
            "Somente executar comandos",
            "Apenas formatar texto",
            "Exclusivamente validar entrada"
        ],
        correct: 1
    },
    {
        id: 102,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Qual é a diferença entre prompt zero-shot e few-shot?",
        alternatives: [
            "Velocidade de processamento",
            "Zero-shot sem exemplos, few-shot com exemplos para orientar",
            "Apenas o tamanho do prompt",
            "Somente a linguagem usada",
            "Exclusivamente o contexto"
        ],
        correct: 1
    },
    {
        id: 103,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Como o histórico de chat é usado no GitHub Copilot?",
        alternatives: [
            "Apenas para logs",
            "Mantém contexto conversacional para melhorar respostas subsequentes",
            "Somente para estatísticas",
            "Apenas para debug",
            "Exclusivamente para cache"
        ],
        correct: 1
    },
    {
        id: 104,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Qual é uma melhor prática de criação de prompts?",
        alternatives: [
            "Ser sempre muito específico",
            "Equilibrar especificidade com clareza e incluir contexto relevante",
            "Usar apenas palavras técnicas",
            "Sempre fazer perguntas longas",
            "Evitar dar exemplos"
        ],
        correct: 1
    },
    {
        id: 105,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "O que são fundamentos da engenharia de prompts?",
        alternatives: [
            "Apenas escrever bem",
            "Técnicas sistemáticas para otimizar comunicação com modelos de IA",
            "Somente conhecer sintaxe",
            "Apenas usar templates",
            "Exclusivamente seguir regras"
        ],
        correct: 1
    },
    {
        id: 106,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Quais são princípios importantes na engenharia de prompts?",
        alternatives: [
            "Apenas brevidade",
            "Clareza, contexto, especificidade, iteração e validação",
            "Somente complexidade",
            "Apenas formalidade",
            "Exclusivamente precisão técnica"
        ],
        correct: 1
    },
    {
        id: 107,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Quais métodos de treinamento são relevantes para engenharia de prompts?",
        alternatives: [
            "Apenas tentativa e erro",
            "Iteração, teste A/B, análise de resultados e refinamento contínuo",
            "Somente memorização",
            "Apenas seguir templates",
            "Exclusivamente cópia de exemplos"
        ],
        correct: 1
    },
    {
        id: 108,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Como o fluxo do processo de prompt funciona?",
        alternatives: [
            "Entrada → Saída direta",
            "Análise → Contextualização → Processamento → Geração → Validação",
            "Apenas processamento linear",
            "Somente análise sintática",
            "Exclusivamente cache lookup"
        ],
        correct: 1
    },
    {
        id: 109,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Qual é uma técnica avançada de engenharia de prompts?",
        alternatives: [
            "Apenas repetir a pergunta",
            "Chain-of-thought reasoning e decomposição de problemas complexos",
            "Somente usar mais palavras",
            "Apenas mudar a ordem",
            "Exclusivamente usar maiúsculas"
        ],
        correct: 1
    },
    {
        id: 110,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Como melhorar a qualidade das respostas através de prompts?",
        alternatives: [
            "Apenas ser mais específico",
            "Fornecer contexto claro, exemplos e critérios de qualidade",
            "Somente usar linguagem formal",
            "Apenas fazer perguntas curtas",
            "Exclusivamente evitar exemplos"
        ],
        correct: 1
    },
    {
        id: 111,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Qual é o papel dos exemplos em prompts few-shot?",
        alternatives: [
            "Apenas decoração",
            "Demonstrar o padrão e formato esperado para a resposta",
            "Somente preencher espaço",
            "Apenas confundir o modelo",
            "Exclusivamente mostrar complexidade"
        ],
        correct: 1
    },
    {
        id: 112,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Como testar e iterar prompts eficazmente?",
        alternatives: [
            "Apenas uma tentativa",
            "Comparar variações, medir qualidade das respostas e refinar iterativamente",
            "Somente usar o primeiro resultado",
            "Apenas copiar exemplos existentes",
            "Exclusivamente seguir intuição"
        ],
        correct: 1
    },

    // Domain 5: Casos de uso de IA para desenvolvedores (14% - 25 questions)
    {
        id: 113,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como a IA pode melhorar a produtividade do desenvolvedor?",
        alternatives: [
            "Apenas acelerando digitação",
            "Automatizando tarefas repetitivas, sugerindo código e reduzindo tempo de pesquisa",
            "Somente corrigindo erros",
            "Apenas formatando código",
            "Exclusivamente documentando"
        ],
        correct: 1
    },
    {
        id: 114,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o GitHub Copilot ajuda no aprendizado de novas linguagens?",
        alternatives: [
            "Apenas fornecendo documentação",
            "Sugerindo sintaxe, padrões idiomáticos e boas práticas da linguagem",
            "Somente traduzindo código",
            "Apenas mostrando exemplos",
            "Exclusivamente corrigindo erros"
        ],
        correct: 1
    },
    {
        id: 115,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot facilita a tradução entre linguagens de programação?",
        alternatives: [
            "Tradução automática perfeita",
            "Sugere equivalentes idiomáticos e adapta padrões entre linguagens",
            "Apenas conversão de sintaxe",
            "Somente mudança de palavras-chave",
            "Exclusivamente cópia literal"
        ],
        correct: 1
    },
    {
        id: 116,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o GitHub Copilot auxilia na mudança de contexto?",
        alternatives: [
            "Apenas salvando progresso",
            "Fornecendo resumos de código e facilitando compreensão rápida de projetos",
            "Somente organizando arquivos",
            "Apenas criando backups",
            "Exclusivamente sincronizando dados"
        ],
        correct: 1
    },
    {
        id: 117,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot melhora a redação de documentação?",
        alternatives: [
            "Apenas verificação ortográfica",
            "Gerando explicações de código, README e comentários técnicos",
            "Somente formatação",
            "Apenas correção gramatical",
            "Exclusivamente tradução"
        ],
        correct: 1
    },
    {
        id: 118,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "O que são respostas personalizadas sensíveis ao contexto?",
        alternatives: [
            "Respostas genéricas",
            "Sugestões adaptadas ao projeto específico e padrões da equipe",
            "Apenas respostas rápidas",
            "Somente respostas formais",
            "Exclusivamente respostas curtas"
        ],
        correct: 1
    },
    {
        id: 119,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o GitHub Copilot ajuda na geração de dados de amostra?",
        alternatives: [
            "Apenas dados aleatórios",
            "Criando datasets realistas para testes e desenvolvimento",
            "Somente números sequenciais",
            "Apenas texto lorem ipsum",
            "Exclusivamente dados vazios"
        ],
        correct: 1
    },
    {
        id: 120,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot apoia a modernização de aplicativos legados?",
        alternatives: [
            "Apenas atualizando sintaxe",
            "Sugerindo refatorações, padrões modernos e migração gradual",
            "Somente mudando comentários",
            "Apenas formatação moderna",
            "Exclusivamente renomeando variáveis"
        ],
        correct: 1
    },
    {
        id: 121,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o GitHub Copilot auxilia no debugging?",
        alternatives: [
            "Apenas encontrando erros de sintaxe",
            "Sugerindo possíveis causas, soluções e estratégias de debugging",
            "Somente formatando código",
            "Apenas adicionando logs",
            "Exclusivamente comentando código"
        ],
        correct: 1
    },
    {
        id: 122,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot pode ser útil em ciência de dados?",
        alternatives: [
            "Apenas criando gráficos",
            "Sugerindo análises, visualizações e pipelines de processamento",
            "Somente limpando dados",
            "Apenas fazendo cálculos",
            "Exclusivamente organizando datasets"
        ],
        correct: 1
    },
    {
        id: 123,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o GitHub Copilot facilita refatoração de código?",
        alternatives: [
            "Apenas mudando nomes",
            "Sugerindo melhorias estruturais, padrões de design e otimizações",
            "Somente formatando",
            "Apenas removendo código",
            "Exclusivamente adicionando comentários"
        ],
        correct: 1
    },
    {
        id: 124,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot contribui para o gerenciamento do SDLC?",
        alternatives: [
            "Apenas criando cronogramas",
            "Auxiliando em code reviews, documentação e padronização",
            "Somente rastreando bugs",
            "Apenas gerenciando versões",
            "Exclusivamente criando relatórios"
        ],
        correct: 1
    },
    {
        id: 125,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Quais são limitações importantes do GitHub Copilot para desenvolvedores?",
        alternatives: [
            "Apenas velocidade",
            "Pode gerar código incorreto, requer validação e não substitui conhecimento técnico",
            "Somente custo",
            "Apenas compatibilidade",
            "Exclusivamente interface"
        ],
        correct: 1
    },
    {
        id: 126,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como usar a API de produtividade para avaliar impacto do Copilot?",
        alternatives: [
            "Apenas contando linhas",
            "Medindo métricas como velocidade de codificação, qualidade e satisfação",
            "Somente tempo gasto",
            "Apenas número de commits",
            "Exclusivamente bugs encontrados"
        ],
        correct: 1
    },
    {
        id: 127,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot melhora a experiência com frameworks desconhecidos?",
        alternatives: [
            "Apenas mostrando documentação",
            "Sugerindo padrões, configurações e implementações típicas do framework",
            "Somente instalando dependências",
            "Apenas criando boilerplate",
            "Exclusivamente fornecendo exemplos"
        ],
        correct: 1
    },
    {
        id: 128,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Qual é o papel do Copilot na manutenção de código?",
        alternatives: [
            "Apenas corrigindo bugs",
            "Sugerindo melhorias, atualizações e identificando código obsoleto",
            "Somente formatando",
            "Apenas documentando",
            "Exclusivamente testando"
        ],
        correct: 1
    },
    {
        id: 129,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o GitHub Copilot ajuda em prototipagem rápida?",
        alternatives: [
            "Apenas criando UI",
            "Gerando estruturas básicas, configurações e implementações iniciais",
            "Somente copiando templates",
            "Apenas criando mockups",
            "Exclusivamente validando ideias"
        ],
        correct: 1
    },
    {
        id: 130,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot facilita integração com APIs?",
        alternatives: [
            "Apenas fornecendo URLs",
            "Sugerindo implementações de clientes, tratamento de erros e autenticação",
            "Somente documentando endpoints",
            "Apenas testando conectividade",
            "Exclusivamente formatando requisições"
        ],
        correct: 1
    },
    {
        id: 131,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Qual é o benefício do Copilot para desenvolvedores júnior?",
        alternatives: [
            "Apenas acelerar digitação",
            "Aprender boas práticas através de sugestões e explicações",
            "Somente corrigir erros",
            "Apenas formatar código",
            "Exclusivamente completar tarefas"
        ],
        correct: 1
    },
    {
        id: 132,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot contribui para segurança no desenvolvimento?",
        alternatives: [
            "Apenas criptografando código",
            "Sugerindo práticas seguras e identificando potenciais vulnerabilidades",
            "Somente ocultando dados",
            "Apenas validando entradas",
            "Exclusivamente auditando logs"
        ],
        correct: 1
    },
    {
        id: 133,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o GitHub Copilot apoia desenvolvimento mobile?",
        alternatives: [
            "Apenas criando layouts",
            "Sugerindo padrões específicos de plataforma e otimizações mobile",
            "Somente testando apps",
            "Apenas gerenciando assets",
            "Exclusivamente publificando apps"
        ],
        correct: 1
    },
    {
        id: 134,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Qual é o impacto do Copilot na colaboração em equipe?",
        alternatives: [
            "Apenas facilita comunicação",
            "Promove consistência de código e compartilhamento de conhecimento",
            "Somente organiza arquivos",
            "Apenas sincroniza mudanças",
            "Exclusivamente cria documentação"
        ],
        correct: 1
    },
    {
        id: 135,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot auxilia em performance optimization?",
        alternatives: [
            "Apenas medindo velocidade",
            "Sugerindo algoritmos eficientes e identificando gargalos",
            "Somente comprimindo código",
            "Apenas removendo comentários",
            "Exclusivamente minificando arquivos"
        ],
        correct: 1
    },
    {
        id: 136,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como usar métricas da API de produtividade efetivamente?",
        alternatives: [
            "Apenas para relatórios gerenciais",
            "Para identificar padrões, gargalos e oportunidades de melhoria",
            "Somente para comparações",
            "Apenas para auditoria",
            "Exclusivamente para faturamento"
        ],
        correct: 1
    },
    {
        id: 137,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Qual é o papel do Copilot em DevOps e automação?",
        alternatives: [
            "Apenas criando scripts",
            "Sugerindo pipelines, configurações de CI/CD e automações",
            "Somente monitorando sistemas",
            "Apenas fazendo deploy",
            "Exclusivamente gerenciando logs"
        ],
        correct: 1
    },

    // Domain 6: Teste com o GitHub Copilot (9% - 16 questions)
    {
        id: 138,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Quais opções o GitHub Copilot oferece para gerar testes?",
        alternatives: [
            "Apenas testes unitários",
            "Testes unitários, integração, end-to-end e casos de borda",
            "Somente testes manuais",
            "Apenas testes de performance",
            "Exclusivamente testes de UI"
        ],
        correct: 1
    },
    {
        id: 139,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o GitHub Copilot ajuda na criação de testes unitários?",
        alternatives: [
            "Apenas criando estrutura básica",
            "Gerando casos de teste abrangentes, mocks e asserções relevantes",
            "Somente nomeando testes",
            "Apenas importando bibliotecas",
            "Exclusivamente documentando testes"
        ],
        correct: 1
    },
    {
        id: 140,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o Copilot facilita a criação de testes de integração?",
        alternatives: [
            "Apenas testando APIs",
            "Sugerindo cenários de integração, configurações e validações de fluxos",
            "Somente conectando sistemas",
            "Apenas verificando dados",
            "Exclusivamente testando rede"
        ],
        correct: 1
    },
    {
        id: 141,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o GitHub Copilot ajuda na identificação de casos limite?",
        alternatives: [
            "Apenas casos óbvios",
            "Analisando código e sugerindo cenários edge cases e validações",
            "Somente valores nulos",
            "Apenas erros comuns",
            "Exclusivamente inputs inválidos"
        ],
        correct: 1
    },
    {
        id: 142,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como melhorar testes existentes com GitHub Copilot?",
        alternatives: [
            "Apenas adicionando mais testes",
            "Sugerindo cobertura adicional, refatoração e otimização de testes",
            "Somente renomeando testes",
            "Apenas corrigindo sintaxe",
            "Exclusivamente documentando"
        ],
        correct: 1
    },
    {
        id: 143,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o Copilot gera código boilerplate para testes?",
        alternatives: [
            "Apenas templates básicos",
            "Estruturas completas baseadas no framework e padrões do projeto",
            "Somente imports",
            "Apenas nomes de métodos",
            "Exclusivamente comentários"
        ],
        correct: 1
    },
    {
        id: 144,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o GitHub Copilot ajuda a escrever asserções?",
        alternatives: [
            "Apenas asserções básicas",
            "Sugerindo asserções específicas baseadas no contexto e tipo de teste",
            "Somente assertTrue/False",
            "Apenas comparações simples",
            "Exclusivamente verificações nulas"
        ],
        correct: 1
    },
    {
        id: 145,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o Copilot aprende com testes existentes?",
        alternatives: [
            "Apenas copiando estrutura",
            "Analisando padrões para sugerir melhorias e identificar lacunas",
            "Somente renomeando",
            "Apenas contando testes",
            "Exclusivamente organizando arquivos"
        ],
        correct: 1
    },
    {
        id: 146,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como usar GitHub Copilot Enterprise para revisões de código com foco em testes?",
        alternatives: [
            "Apenas verificando sintaxe",
            "Sugerindo melhorias de cobertura, segurança e performance em testes",
            "Somente formatando código",
            "Apenas contando linhas",
            "Exclusivamente verificando nomes"
        ],
        correct: 1
    },
    {
        id: 147,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o Copilot identifica vulnerabilidades de segurança através de testes?",
        alternatives: [
            "Apenas testes básicos",
            "Sugerindo testes de segurança específicos e cenários de ataque",
            "Somente verificações de input",
            "Apenas testes de autenticação",
            "Exclusivamente validações simples"
        ],
        correct: 1
    },
    {
        id: 148,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o GitHub Copilot sugere otimizações de performance através de testes?",
        alternatives: [
            "Apenas medindo tempo",
            "Propondo benchmarks, profiling e testes de carga específicos",
            "Somente contando operações",
            "Apenas verificando memória",
            "Exclusivamente testando CPU"
        ],
        correct: 1
    },
    {
        id: 149,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Quais tipos de teste o GitHub Copilot pode gerar além de unitários?",
        alternatives: [
            "Apenas testes funcionais",
            "Integração, E2E, performance, segurança e acessibilidade",
            "Somente testes manuais",
            "Apenas smoke tests",
            "Exclusivamente regression tests"
        ],
        correct: 1
    },
    {
        id: 150,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o Copilot facilita TDD (Test-Driven Development)?",
        alternatives: [
            "Apenas escrevendo testes depois",
            "Sugerindo testes antes da implementação e guiando desenvolvimento",
            "Somente verificando testes",
            "Apenas executando testes",
            "Exclusivamente documentando TDD"
        ],
        correct: 1
    },
    {
        id: 151,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como configurar o GitHub Copilot para otimizar geração de testes?",
        alternatives: [
            "Configuração não necessária",
            "Definir padrões de projeto, frameworks de teste e convenções",
            "Apenas instalar extensões",
            "Somente escolher linguagem",
            "Exclusivamente configurar IDE"
        ],
        correct: 1
    },
    {
        id: 152,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Qual é o papel do arquivo de configuração do GitHub Copilot Editor?",
        alternatives: [
            "Apenas aparência",
            "Define preferências de sugestão, filtros e comportamentos específicos",
            "Somente atalhos",
            "Apenas idioma",
            "Exclusivamente performance"
        ],
        correct: 1
    },
    {
        id: 153,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o Copilot ajuda na criação de mocks e stubs?",
        alternatives: [
            "Apenas objetos vazios",
            "Gerando mocks realistas baseados em interfaces e comportamentos esperados",
            "Somente valores fixos",
            "Apenas null objects",
            "Exclusivamente dados falsos"
        ],
        correct: 1
    },

    // Domain 7: Fundamentos de privacidade e exclusões de contexto (15% - 27 questions)
    {
        id: 154,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "O que são exclusões de conteúdo no GitHub Copilot?",
        alternatives: [
            "Arquivos deletados",
            "Configurações para impedir que certos arquivos/padrões sejam usados pelo Copilot",
            "Dados corrompidos",
            "Backups desnecessários",
            "Logs de erro"
        ],
        correct: 1
    },
    {
        id: 155,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como configurar exclusões de conteúdo em um repositório?",
        alternatives: [
            "Apenas .gitignore",
            "Arquivo .copilotignore ou configurações do repositório",
            "Somente permissões de arquivo",
            "Apenas configurações do IDE",
            "Exclusivamente via API"
        ],
        correct: 1
    },
    {
        id: 156,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como configurar exclusões de conteúdo no nível organizacional?",
        alternatives: [
            "Apenas por repositório",
            "Configurações de organização no GitHub com políticas centralizadas",
            "Somente via tickets de suporte",
            "Apenas por usuário individual",
            "Exclusivamente via email"
        ],
        correct: 1
    },
    {
        id: 157,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais são os efeitos das exclusões de conteúdo?",
        alternatives: [
            "Apenas ocultar arquivos",
            "Impedir que o Copilot use ou referencie o conteúdo excluído",
            "Somente backup automático",
            "Apenas compressão",
            "Exclusivamente criptografia"
        ],
        correct: 1
    },
    {
        id: 158,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais são as limitações das exclusões de conteúdo?",
        alternatives: [
            "Não há limitações",
            "Não são retroativas e podem afetar qualidade das sugestões",
            "Apenas em arquivos pequenos",
            "Somente em repositórios privados",
            "Exclusivamente em linguagens específicas"
        ],
        correct: 1
    },
    {
        id: 159,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quem possui as saídas geradas pelo GitHub Copilot?",
        alternatives: [
            "Sempre o GitHub",
            "O usuário que recebeu a sugestão, sujeito aos termos de uso",
            "Sempre a Microsoft",
            "Proprietários dos dados de origem",
            "Domínio público automaticamente"
        ],
        correct: 1
    },
    {
        id: 160,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "O que é o filtro do detector de duplicação?",
        alternatives: [
            "Remove arquivos duplicados",
            "Identifica e filtra código que pode coincidir significativamente com código existente",
            "Apenas verifica arquivos idênticos",
            "Somente remove comentários repetidos",
            "Exclusivamente detecta nomes duplicados"
        ],
        correct: 1
    },
    {
        id: 161,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "O que é proteção contratual no GitHub Copilot?",
        alternatives: [
            "Apenas termos de uso",
            "Compromisso legal do GitHub de defender usuários contra reivindicações de IP",
            "Somente garantia de uptime",
            "Apenas backup de dados",
            "Exclusivamente suporte técnico"
        ],
        correct: 1
    },
    {
        id: 162,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como definir configurações do GitHub Copilot no GitHub.com?",
        alternatives: [
            "Apenas no IDE",
            "Através das configurações de usuário ou organização no GitHub.com",
            "Somente via API",
            "Apenas por email",
            "Exclusivamente via suporte"
        ],
        correct: 1
    },
    {
        id: 163,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como ativar/desativar a detecção de duplicação?",
        alternatives: [
            "Apenas no código",
            "Configurações do usuário ou organização no GitHub",
            "Somente via comandos",
            "Apenas no IDE",
            "Exclusivamente via API"
        ],
        correct: 1
    },
    {
        id: 164,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como controlar a coleta de solicitações e sugestões?",
        alternatives: [
            "Não é possível controlar",
            "Configurações de privacidade nas preferências do usuário/organização",
            "Apenas via firewall",
            "Somente por região",
            "Exclusivamente por IP"
        ],
        correct: 1
    },
    {
        id: 165,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais verificações de segurança são aplicadas pelo Copilot?",
        alternatives: [
            "Apenas sintaxe",
            "Filtros de conteúdo sensível, malware e vulnerabilidades conhecidas",
            "Somente performance",
            "Apenas formatação",
            "Exclusivamente compatibilidade"
        ],
        correct: 1
    },
    {
        id: 166,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Que avisos de segurança o Copilot pode fornecer?",
        alternatives: [
            "Apenas erros de sintaxe",
            "Alertas sobre código inseguro, vulnerabilidades e práticas inadequadas",
            "Somente avisos de performance",
            "Apenas problemas de formatação",
            "Exclusivamente incompatibilidades"
        ],
        correct: 1
    },
    {
        id: 167,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como resolver quando sugestões não aparecem para alguns arquivos?",
        alternatives: [
            "Reiniciar sempre o IDE",
            "Verificar exclusões, permissões e configurações específicas do arquivo",
            "Apenas aguardar",
            "Somente reinstalar extensão",
            "Exclusivamente limpar cache"
        ],
        correct: 1
    },
    {
        id: 168,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Por que exclusões de contexto podem não ser aplicadas?",
        alternatives: [
            "Sempre funcionam perfeitamente",
            "Configuração incorreta, propagação demorada ou precedência de configurações",
            "Apenas por problemas de rede",
            "Somente em horários específicos",
            "Exclusivamente por limitações de hardware"
        ],
        correct: 1
    },
    {
        id: 169,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como acionar Copilot quando sugestões estão ausentes?",
        alternatives: [
            "Apenas esperar",
            "Ctrl+Space, Alt+\\, ou comandos manuais de trigger",
            "Somente reiniciar IDE",
            "Apenas digitar mais código",
            "Exclusivamente via menu"
        ],
        correct: 1
    },
    {
        id: 170,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como configurar exclusões de contexto em editores de código?",
        alternatives: [
            "Apenas via .gitignore",
            "Arquivos de configuração específicos do Copilot ou extensão",
            "Somente por comentários",
            "Apenas via menu",
            "Exclusivamente por API"
        ],
        correct: 1
    },
    {
        id: 171,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é o impacto das exclusões na qualidade das sugestões?",
        alternatives: [
            "Sempre melhora",
            "Pode reduzir contexto disponível e afetar relevância das sugestões",
            "Não tem impacto",
            "Apenas acelera sugestões",
            "Exclusivamente melhora segurança"
        ],
        correct: 1
    },
    {
        id: 172,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como funciona a hierarquia de configurações de privacidade?",
        alternatives: [
            "Todas têm peso igual",
            "Organização > Repositório > Usuário, com configurações mais restritivas prevalecendo",
            "Apenas configurações locais",
            "Somente configurações globais",
            "Exclusivamente por ordem cronológica"
        ],
        correct: 1
    },
    {
        id: 173,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais dados são coletados quando a coleta está habilitada?",
        alternatives: [
            "Todo o código do usuário",
            "Trechos de código dos prompts, metadados de uso e feedback",
            "Apenas dados públicos",
            "Somente estatísticas agregadas",
            "Exclusivamente logs de erro"
        ],
        correct: 1
    },
    {
        id: 174,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como verificar se exclusões estão funcionando corretamente?",
        alternatives: [
            "Apenas assumir que funcionam",
            "Testar sugestões em arquivos excluídos e verificar logs de auditoria",
            "Somente contar arquivos",
            "Apenas verificar tamanho",
            "Exclusivamente por tempo de resposta"
        ],
        correct: 1
    },
    {
        id: 175,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais são considerações importantes para exclusões organizacionais?",
        alternatives: [
            "Apenas performance",
            "Balancear segurança/privacidade com produtividade e funcionalidade",
            "Somente custo",
            "Apenas compatibilidade",
            "Exclusivamente facilidade de uso"
        ],
        correct: 1
    },
    {
        id: 176,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como as exclusões afetam diferentes planos do Copilot?",
        alternatives: [
            "Igualmente em todos os planos",
            "Business/Enterprise têm mais opções e controles granulares",
            "Apenas no plano Individual",
            "Somente no plano Enterprise",
            "Não há diferenças"
        ],
        correct: 1
    },
    {
        id: 177,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é o propósito dos logs de auditoria para privacidade?",
        alternatives: [
            "Apenas estatísticas",
            "Rastrear uso, acessos e compliance com políticas de privacidade",
            "Somente debug",
            "Apenas performance",
            "Exclusivamente faturamento"
        ],
        correct: 1
    },
    {
        id: 178,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como implementar uma estratégia eficaz de exclusões?",
        alternatives: [
            "Excluir tudo para máxima segurança",
            "Identificar dados sensíveis, definir políticas claras e monitorar eficácia",
            "Não excluir nada",
            "Apenas excluir arquivos grandes",
            "Exclusivamente por tipo de arquivo"
        ],
        correct: 1
    },
    {
        id: 179,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais são as melhores práticas para configuração de privacidade?",
        alternatives: [
            "Configuração mínima",
            "Revisão regular, princípio do menor privilégio e documentação clara",
            "Máxima restrição sempre",
            "Configuração única inicial",
            "Apenas seguir padrões externos"
        ],
        correct: 1
    },
    {
        id: 180,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como treinar equipes sobre configurações de privacidade do Copilot?",
        alternatives: [
            "Apenas documentação escrita",
            "Treinamento prático, exemplos reais e revisões periódicas de políticas",
            "Somente vídeos tutoriais",
            "Apenas workshops únicos",
            "Exclusivamente auto-aprendizado"
        ],
        correct: 1
    }
];