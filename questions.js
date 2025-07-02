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
    },

    // Sample questions with multiple correct answers (some questions have 2 correct alternatives)
    {
        id: 181,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais são características do GitHub Copilot Business? (Selecione as opções corretas)",
        alternatives: [
            "Exclusões de dados organizacionais",
            "Apenas suporte via chat",
            "Logs de auditoria organizacionais",
            "Preço mais barato que Individual",
            "Funciona apenas em VS Code"
        ],
        correct: [0, 2] // Multiple correct answers: exclusões de dados e logs de auditoria
    },
    {
        id: 182,
        domain: "Domínio 1: IA Responsável",
        question: "Quais são princípios fundamentais da IA responsável? (Selecione as opções corretas)",
        alternatives: [
            "Transparência nas decisões",
            "Maximizar lucros a qualquer custo",
            "Equidade e não discriminação",
            "Velocidade sobre precisão",
            "Evitar qualquer supervisão humana"
        ],
        correct: [0, 2] // Transparência e equidade
    },
    {
        id: 183,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Que tipos de dados o GitHub Copilot considera para gerar sugestões?",
        alternatives: [
            "Contexto do código atual",
            "Apenas código público no GitHub",
            "Comentários e nomes de variáveis",
            "Exclusivamente dados de performance",
            "Somente dados de usuários pagos"
        ],
        correct: [0, 2] // Contexto do código e comentários/nomes de variáveis
    },
    {
        id: 184,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Qual é a melhor estratégia para criar prompts eficazes no GitHub Copilot?",
        alternatives: [
            "Usar comentários descritivos e específicos",
            "Apenas escrever código sem contexto",
            "Fornecer exemplos relevantes no código",
            "Evitar qualquer documentação",
            "Usar apenas palavras-chave técnicas"
        ],
        correct: [0, 2] // Comentários descritivos e exemplos relevantes
    },
    {
        id: 185,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o GitHub Copilot pode melhorar a produtividade em desenvolvimento?",
        alternatives: [
            "Automatizando tarefas repetitivas",
            "Substituindo completamente o desenvolvedor",
            "Acelerando a escrita de código boilerplate",
            "Eliminando a necessidade de testes",
            "Removendo a necessidade de documentação"
        ],
        correct: [0, 2] // Automatização e código boilerplate
    },
    {
        id: 186,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Que tipos de testes o GitHub Copilot pode ajudar a gerar?",
        alternatives: [
            "Testes unitários",
            "Apenas testes manuais",
            "Testes de integração",
            "Exclusivamente testes de UI",
            "Somente testes de performance"
        ],
        correct: [0, 2] // Testes unitários e de integração
    },
    {
        id: 187,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais são opções de configuração de privacidade no GitHub Copilot?",
        alternatives: [
            "Exclusões de arquivos específicos",
            "Compartilhamento obrigatório de todo código",
            "Configurações de organização",
            "Bloqueio total sem configuração",
            "Apenas configurações globais"
        ],
        correct: [0, 2] // Exclusões de arquivos e configurações de organização
    },

    // Additional questions to reach ~280 total
    // Domain 1: IA Responsável - adding 6 more questions
    {
        id: 188,
        domain: "Domínio 1: IA Responsável",
        question: "Qual é o papel da auditoria em sistemas de IA responsável?",
        alternatives: [
            "Apenas verificar custos operacionais",
            "Monitorar performance e identificar vieses em resultados",
            "Somente documentar processos",
            "Apenas validar código fonte",
            "Exclusivamente medir velocidade"
        ],
        correct: 1
    },
    {
        id: 189,
        domain: "Domínio 1: IA Responsável",
        question: "Como garantir a explicabilidade de decisões tomadas por IA?",
        alternatives: [
            "Ocultar o processo decisório",
            "Documentar apenas resultados finais",
            "Fornecer rastreabilidade e justificativas compreensíveis para as decisões",
            "Usar apenas modelos complexos",
            "Evitar qualquer documentação"
        ],
        correct: 2
    },
    {
        id: 190,
        domain: "Domínio 1: IA Responsável",
        question: "Quais são os desafios éticos no uso de IA em desenvolvimento de software?",
        alternatives: [
            "Apenas questões técnicas",
            "Viés algorítmico, privacidade de dados e impacto social",
            "Somente custos financeiros",
            "Apenas compatibilidade de sistemas",
            "Exclusivamente performance"
        ],
        correct: 1
    },
    {
        id: 191,
        domain: "Domínio 1: IA Responsável",
        question: "Como mitigar riscos de discriminação em sistemas de IA?",
        alternatives: [
            "Ignorar dados demográficos",
            "Usar apenas algoritmos simples",
            "Testar com dados diversos e monitorar resultados para diferentes grupos",
            "Evitar qualquer tipo de teste",
            "Usar apenas dados históricos"
        ],
        correct: 2
    },
    {
        id: 192,
        domain: "Domínio 1: IA Responsável",
        question: "Qual é a importância da diversidade em equipes que desenvolvem IA?",
        alternatives: [
            "Não tem importância",
            "Apenas para questões legais",
            "Reduz vieses e aumenta perspectivas na tomada de decisões",
            "Somente para marketing",
            "Apenas para reduzir custos"
        ],
        correct: 2
    },
    {
        id: 193,
        domain: "Domínio 1: IA Responsável",
        question: "Como estabelecer governança adequada para IA em organizações?",
        alternatives: [
            "Evitar qualquer estrutura",
            "Apenas documentar processos",
            "Criar políticas claras, comitês de supervisão e processos de revisão",
            "Deixar tudo para desenvolvedores",
            "Usar apenas ferramentas automatizadas"
        ],
        correct: 2
    },

    // Domain 2: Planos e recursos do GitHub Copilot - adding 13 more questions
    {
        id: 194,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é a diferença principal entre Copilot Individual e Enterprise em termos de dados?",
        alternatives: [
            "Individual não usa dados",
            "Enterprise oferece maior controle sobre dados e possibilita bases de conhecimento customizadas",
            "Não há diferença",
            "Individual é mais seguro",
            "Enterprise usa apenas dados públicos"
        ],
        correct: 1
    },
    {
        id: 195,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como funciona a indexação de Bases de Conhecimento no Copilot Enterprise?",
        alternatives: [
            "Indexação manual apenas",
            "Apenas arquivos de código",
            "Indexação automática de repositórios selecionados incluindo código e documentação",
            "Somente dados públicos",
            "Apenas metadados"
        ],
        correct: 2
    },
    {
        id: 196,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais métricas estão disponíveis nos logs de auditoria do Copilot Business?",
        alternatives: [
            "Apenas número de usuários",
            "Uso por usuário, aceitação de sugestões, e atividade por repositório",
            "Somente erros do sistema",
            "Apenas dados financeiros",
            "Exclusivamente logs de performance"
        ],
        correct: 1
    },
    {
        id: 197,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como configurar políticas de uso do Copilot em nível organizacional?",
        alternatives: [
            "Não é possível configurar",
            "Apenas individualmente",
            "Através das configurações da organização no GitHub com políticas de bloqueio/permissão",
            "Somente via API",
            "Apenas por ticket de suporte"
        ],
        correct: 2
    },
    {
        id: 198,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual comando do GitHub CLI permite sugerir comandos shell?",
        alternatives: [
            "gh copilot suggest",
            "gh copilot shell",
            "gh copilot cmd",
            "gh copilot terminal",
            "gh copilot bash"
        ],
        correct: 0
    },
    {
        id: 199,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como funciona a indenização de propriedade intelectual no Copilot Business?",
        alternatives: [
            "Não oferece proteção",
            "Apenas para código público",
            "GitHub oferece proteção legal contra reivindicações de IP para clientes Business",
            "Somente para empresas grandes",
            "Apenas para código original"
        ],
        correct: 2
    },
    {
        id: 200,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais são os requisitos para usar Copilot Enterprise?",
        alternatives: [
            "Qualquer conta GitHub",
            "Apenas GitHub Pro",
            "GitHub Enterprise Cloud com repositórios da organização",
            "Somente contas pagas",
            "Apenas para desenvolvedores certificados"
        ],
        correct: 2
    },
    {
        id: 201,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como personalizar o comportamento do Copilot Chat para projetos específicos?",
        alternatives: [
            "Não é possível personalizar",
            "Apenas mudando configurações globais",
            "Usando arquivos de configuração específicos do projeto e contexto do repositório",
            "Somente via API",
            "Apenas para administradores"
        ],
        correct: 2
    },
    {
        id: 202,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é o limite de caracteres para prompts no Copilot Chat?",
        alternatives: [
            "500 caracteres",
            "1000 caracteres",
            "Varia dependendo do contexto, mas geralmente alguns milhares de caracteres",
            "Sem limite",
            "100 caracteres apenas"
        ],
        correct: 2
    },
    {
        id: 203,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como funciona o recurso de resumos de Pull Request no Copilot?",
        alternatives: [
            "Apenas conta linhas modificadas",
            "Somente lista arquivos alterados",
            "Analisa as mudanças e gera resumos descritivos automáticos do que foi alterado",
            "Apenas copia descrições existentes",
            "Somente funciona com PRs pequenos"
        ],
        correct: 2
    },
    {
        id: 204,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Quais IDEs suportam oficialmente o GitHub Copilot?",
        alternatives: [
            "Apenas VS Code",
            "VS Code, Visual Studio, IntelliJ, Neovim e outros editores JetBrains",
            "Somente IDEs da Microsoft",
            "Apenas editores web",
            "Somente IDEs pagos"
        ],
        correct: 1
    },
    {
        id: 205,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Como gerenciar licenças do Copilot Business via API REST?",
        alternatives: [
            "Não é possível via API",
            "Apenas listagem de usuários",
            "Endpoints para adicionar/remover usuários e gerenciar configurações organizacionais",
            "Somente consulta de dados",
            "Apenas para administradores de sistema"
        ],
        correct: 2
    },
    {
        id: 206,
        domain: "Domínio 2: Planos e recursos do GitHub Copilot",
        question: "Qual é o benefício dos modelos personalizados no Copilot Enterprise?",
        alternatives: [
            "Apenas redução de custos",
            "Somente mais velocidade",
            "Sugestões mais contextualizadas para padrões específicos da organização",
            "Apenas interface diferente",
            "Somente para grandes volumes"
        ],
        correct: 2
    },

    // Domain 3: Como o GitHub Copilot funciona e lida com dados - adding 12 more questions  
    {
        id: 207,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o GitHub Copilot processa comentários no código para gerar sugestões?",
        alternatives: [
            "Ignora todos os comentários",
            "Analisa comentários como parte do contexto para entender a intenção do código",
            "Apenas copia comentários",
            "Somente usa comentários em inglês",
            "Remove comentários automaticamente"
        ],
        correct: 1
    },
    {
        id: 208,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é o papel do servidor proxy no pipeline do Copilot?",
        alternatives: [
            "Apenas acelerar conexões",
            "Aplicar filtros de segurança e políticas antes de enviar prompts ao modelo",
            "Somente armazenar cache",
            "Apenas rotear requisições",
            "Exclusivamente monitorar performance"
        ],
        correct: 1
    },
    {
        id: 209,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o GitHub Copilot identifica código duplicado ou semelhante?",
        alternatives: [
            "Comparação simples de strings",
            "Não identifica duplicações",
            "Análise semântica e comparação com padrões conhecidos nos dados de treinamento",
            "Apenas por hash MD5",
            "Somente por número de linhas"
        ],
        correct: 2
    },
    {
        id: 210,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é a limitação da janela de contexto nos LLMs?",
        alternatives: [
            "Não há limitações",
            "Quantidade limitada de tokens que podem ser processados simultaneamente",
            "Apenas velocidade de processamento",
            "Somente uso de memória",
            "Apenas compatibilidade de linguagens"
        ],
        correct: 1
    },
    {
        id: 211,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o Copilot determina a relevância do contexto do arquivo atual?",
        alternatives: [
            "Apenas pelo nome do arquivo",
            "Análise da linguagem, imports, estrutura do código e proximidade do cursor",
            "Somente pelo tamanho do arquivo",
            "Apenas por metadados",
            "Exclusivamente por data de modificação"
        ],
        correct: 1
    },
    {
        id: 212,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Quais dados do repositório influenciam as sugestões do Copilot?",
        alternatives: [
            "Apenas o arquivo atual",
            "Arquivos relacionados, estrutura do projeto, dependências e padrões de código",
            "Somente arquivos abertos",
            "Apenas arquivos modificados recentemente",
            "Exclusivamente arquivos de configuração"
        ],
        correct: 1
    },
    {
        id: 213,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o pós-processamento funciona nas respostas do Copilot?",
        alternatives: [
            "Não há pós-processamento",
            "Apenas formatação básica",
            "Filtros de segurança, validação de sintaxe e ajustes de contexto",
            "Somente verificação de tamanho",
            "Apenas tradução de idiomas"
        ],
        correct: 2
    },
    {
        id: 214,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é o impacto da idade dos dados de treinamento nas sugestões?",
        alternatives: [
            "Não tem impacto",
            "Dados mais antigos podem não refletir práticas e tecnologias atuais",
            "Apenas afeta velocidade",
            "Somente influencia formatação",
            "Exclusivamente altera linguagens suportadas"
        ],
        correct: 1
    },
    {
        id: 215,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o Copilot Chat mantém contexto durante uma conversa?",
        alternatives: [
            "Não mantém contexto",
            "Apenas lembra a última mensagem",
            "Histórico da conversa é incluído no prompt para manter coerência",
            "Somente salva em cache local",
            "Apenas para conversas curtas"
        ],
        correct: 2
    },
    {
        id: 216,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Quais são os tipos de processamento de entrada para o Copilot Chat?",
        alternatives: [
            "Apenas texto simples",
            "Perguntas sobre código, explicações, geração de testes e refatoração",
            "Somente comandos predefinidos",
            "Apenas análise de bugs",
            "Exclusivamente tradução de código"
        ],
        correct: 1
    },
    {
        id: 217,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Como o GitHub Copilot lida com diferentes linguagens de programação?",
        alternatives: [
            "Suporta apenas JavaScript",
            "Modelos específicos para cada linguagem com diferentes níveis de suporte",
            "Traduz tudo para uma linguagem base",
            "Apenas linguagens compiladas",
            "Somente linguagens de script"
        ],
        correct: 1
    },
    {
        id: 218,
        domain: "Domínio 3: Como o GitHub Copilot funciona e lida com dados",
        question: "Qual é a diferença entre dados usados no Individual vs Business?",
        alternatives: [
            "Não há diferença",
            "Business permite exclusões organizacionais e maior controle sobre dados",
            "Individual usa mais dados",
            "Business usa apenas dados públicos",
            "Individual é mais restritivo"
        ],
        correct: 1
    },

    // Domain 4: Elaboração de Prompts e Engenharia de Prompts - adding 8 more questions
    {
        id: 219,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Qual é a diferença entre prompts zero-shot e few-shot?",
        alternatives: [
            "Não há diferença",
            "Zero-shot não fornece exemplos, few-shot inclui exemplos no prompt",
            "Zero-shot é mais rápido",
            "Few-shot usa menos memória",
            "Zero-shot é mais preciso"
        ],
        correct: 1
    },
    {
        id: 220,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Como estruturar um prompt eficaz para geração de código?",
        alternatives: [
            "Apenas escrever a funcionalidade desejada",
            "Contexto claro, exemplo de entrada/saída, e especificações técnicas",
            "Somente palavras-chave",
            "Apenas comentários vagos",
            "Exclusivamente código existente"
        ],
        correct: 1
    },
    {
        id: 221,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Qual é o papel das instruções de sistema em prompts?",
        alternatives: [
            "Não têm papel importante",
            "Apenas formatação",
            "Definem comportamento global e estilo de resposta do modelo",
            "Somente para debug",
            "Apenas para performance"
        ],
        correct: 2
    },
    {
        id: 222,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Como melhorar a precisão de prompts para documentação de código?",
        alternatives: [
            "Usar apenas palavras técnicas",
            "Especificar audiência-alvo, nível de detalhe e formato desejado",
            "Apenas copiar código",
            "Somente usar templates",
            "Exclusivamente exemplos genéricos"
        ],
        correct: 1
    },
    {
        id: 223,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Qual é a importância do contexto em prompts para o Copilot?",
        alternatives: [
            "Contexto não é importante",
            "Apenas para acelerar respostas",
            "Fundamental para gerar sugestões relevantes e precisas",
            "Somente para formatação",
            "Apenas para compatibilidade"
        ],
        correct: 2
    },
    {
        id: 224,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Como usar chain-of-thought reasoning em prompts?",
        alternatives: [
            "Apenas fazer perguntas diretas",
            "Quebrar problemas complexos em etapas lógicas sequenciais",
            "Somente usar exemplos simples",
            "Apenas repetir a pergunta",
            "Exclusivamente usar palavras-chave"
        ],
        correct: 1
    },
    {
        id: 225,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Quais são as melhores práticas para prompt engineering?",
        alternatives: [
            "Apenas ser breve",
            "Clareza, especificidade, exemplos relevantes e iteração baseada em resultados",
            "Somente usar linguagem técnica",
            "Apenas copiar prompts existentes",
            "Exclusivamente usar templates"
        ],
        correct: 1
    },
    {
        id: 226,
        domain: "Domínio 4: Elaboração de Prompts e Engenharia de Prompts",
        question: "Como validar a eficácia de um prompt?",
        alternatives: [
            "Apenas usar uma vez",
            "Testar com diferentes entradas e avaliar qualidade das respostas",
            "Somente medir velocidade",
            "Apenas contar caracteres",
            "Exclusivamente usar feedback automático"
        ],
        correct: 1
    },

    // Domain 5: Casos de uso de IA para desenvolvedores - adding 14 more questions
    {
        id: 227,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot pode auxiliar na migração de sistemas legados?",
        alternatives: [
            "Apenas documentando código antigo",
            "Sugerindo refatorações, modernização de sintaxe e padrões atuais",
            "Somente copiando código",
            "Apenas identificando bugs",
            "Exclusivamente criando testes"
        ],
        correct: 1
    },
    {
        id: 228,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Qual é o papel do Copilot na criação de APIs?",
        alternatives: [
            "Apenas documentação",
            "Geração de endpoints, validações, e padrões REST/GraphQL",
            "Somente testes de API",
            "Apenas configuração de servidor",
            "Exclusivamente monitoramento"
        ],
        correct: 1
    },
    {
        id: 229,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot pode melhorar o desenvolvimento mobile?",
        alternatives: [
            "Apenas para aplicações web",
            "Sugestões para componentes nativos, layouts responsivos e integração de APIs",
            "Somente para Android",
            "Apenas para iOS",
            "Exclusivamente para híbridos"
        ],
        correct: 1
    },
    {
        id: 230,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Qual é a utilidade do Copilot para aprendizado de novas tecnologias?",
        alternatives: [
            "Não ajuda no aprendizado",
            "Fornece exemplos práticos, explicações e padrões de uso",
            "Apenas traduz documentação",
            "Somente para tecnologias antigas",
            "Exclusivamente para linguagens populares"
        ],
        correct: 1
    },
    {
        id: 231,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot pode auxiliar em arquitetura de software?",
        alternatives: [
            "Apenas criando diagramas",
            "Sugerindo padrões de design, estruturas de projeto e melhores práticas",
            "Somente nomenclatura",
            "Apenas documentação",
            "Exclusivamente refatoração"
        ],
        correct: 1
    },
    {
        id: 232,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Qual é o benefício do Copilot para desenvolvimento em equipe?",
        alternatives: [
            "Apenas sincronização de código",
            "Padronização de código, convenções consistentes e transferência de conhecimento",
            "Somente resolução de conflitos",
            "Apenas controle de versão",
            "Exclusivamente revisão de código"
        ],
        correct: 1
    },
    {
        id: 233,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot pode ajudar com performance de aplicações?",
        alternatives: [
            "Apenas medindo velocidade",
            "Sugerindo otimizações de código, algoritmos eficientes e melhores práticas",
            "Somente monitoramento",
            "Apenas profiling",
            "Exclusivamente cache"
        ],
        correct: 1
    },
    {
        id: 234,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Qual é o papel do Copilot na automação de tarefas repetitivas?",
        alternatives: [
            "Não ajuda com automação",
            "Geração de scripts, pipelines de CI/CD e tarefas de build",
            "Apenas execução manual",
            "Somente documentação",
            "Exclusivamente monitoramento"
        ],
        correct: 1
    },
    {
        id: 235,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot pode auxiliar em análise de dados e machine learning?",
        alternatives: [
            "Apenas visualização",
            "Sugestões para pipelines de dados, modelos ML e análises estatísticas",
            "Somente limpeza de dados",
            "Apenas gráficos",
            "Exclusivamente relatórios"
        ],
        correct: 1
    },
    {
        id: 236,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Qual é a utilidade do Copilot para debugging?",
        alternatives: [
            "Apenas executar código",
            "Sugerir pontos de breakpoint, análise de logs e identificação de problemas",
            "Somente formatação",
            "Apenas compilação",
            "Exclusivamente testes unitários"
        ],
        correct: 1
    },
    {
        id: 237,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como o Copilot pode melhorar a documentação de projetos?",
        alternatives: [
            "Apenas copiando código",
            "Gerando READMEs, comentários de código e documentação de APIs",
            "Somente tradução",
            "Apenas formatação",
            "Exclusivamente correção ortográfica"
        ],
        correct: 1
    },
    {
        id: 238,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Qual é o benefício do Copilot para prototipagem rápida?",
        alternatives: [
            "Apenas design visual",
            "Geração rápida de código base, estruturas e funcionalidades básicas",
            "Somente wireframes",
            "Apenas mockups",
            "Exclusivamente testes de conceito"
        ],
        correct: 1
    },
    {
        id: 239,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Como usar a API de produtividade do GitHub para medir impacto do Copilot?",
        alternatives: [
            "Apenas contagem manual",
            "Métricas de aceitação de sugestões, tempo de desenvolvimento e qualidade do código",
            "Somente número de commits",
            "Apenas linhas de código",
            "Exclusivamente bugs reportados"
        ],
        correct: 1
    },
    {
        id: 240,
        domain: "Domínio 5: Casos de uso de IA para desenvolvedores",
        question: "Quais são as limitações do Copilot que desenvolvedores devem conhecer?",
        alternatives: [
            "Não há limitações",
            "Pode gerar código incorreto, requer validação humana e não substitui expertise",
            "Apenas limitações de velocidade",
            "Somente questões de custo",
            "Exclusivamente compatibilidade"
        ],
        correct: 1
    },

    // Domain 6: Teste com o GitHub Copilot - adding 8 more questions
    {
        id: 241,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o Copilot pode auxiliar na criação de testes end-to-end?",
        alternatives: [
            "Apenas testes unitários",
            "Geração de cenários de usuário, automação de interface e validações completas",
            "Somente testes manuais",
            "Apenas smoke tests",
            "Exclusivamente testes de carga"
        ],
        correct: 1
    },
    {
        id: 242,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Qual é o benefício do Copilot para Test-Driven Development (TDD)?",
        alternatives: [
            "Não suporta TDD",
            "Geração de testes primeiro, estruturas de teste e casos de borda",
            "Apenas execução de testes",
            "Somente relatórios",
            "Exclusivamente debugging"
        ],
        correct: 1
    },
    {
        id: 243,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o Copilot pode melhorar testes de performance?",
        alternatives: [
            "Apenas medição básica",
            "Sugestões para cenários de carga, benchmarks e análise de métricas",
            "Somente execução",
            "Apenas monitoramento",
            "Exclusivamente relatórios"
        ],
        correct: 1
    },
    {
        id: 244,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Qual é o papel do Copilot em testes de segurança?",
        alternatives: [
            "Não ajuda com segurança",
            "Identificação de vulnerabilidades e sugestão de testes de penetração",
            "Apenas auditoria",
            "Somente compliance",
            "Exclusivamente logs"
        ],
        correct: 1
    },
    {
        id: 245,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como gerar dados de teste eficazes com o Copilot?",
        alternatives: [
            "Apenas dados aleatórios",
            "Geração de datasets realistas, casos extremos e dados sintéticos",
            "Somente dados de produção",
            "Apenas valores fixos",
            "Exclusivamente dados históricos"
        ],
        correct: 1
    },
    {
        id: 246,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Qual é a utilidade do Copilot para testes de acessibilidade?",
        alternatives: [
            "Não suporta acessibilidade",
            "Sugestões para testes WCAG, validações de elementos e navegação por teclado",
            "Apenas cores",
            "Somente fontes",
            "Exclusivamente contrast ratio"
        ],
        correct: 1
    },
    {
        id: 247,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Como o Copilot pode auxiliar em testes de API?",
        alternatives: [
            "Apenas documentação",
            "Geração de casos de teste, validação de schemas e testes de contratos",
            "Somente execução manual",
            "Apenas monitoramento",
            "Exclusivamente logs"
        ],
        correct: 1
    },
    {
        id: 248,
        domain: "Domínio 6: Teste com o GitHub Copilot",
        question: "Qual é o benefício do Copilot para manutenção de suites de teste?",
        alternatives: [
            "Apenas execução",
            "Refatoração de testes, identificação de testes redundantes e otimização",
            "Somente relatórios",
            "Apenas documentação",
            "Exclusivamente debugging"
        ],
        correct: 1
    },

    // Domain 7: Fundamentos de privacidade e exclusões de contexto - adding 32 more questions
    {
        id: 249,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como configurar exclusões em nível de repositório?",
        alternatives: [
            "Apenas via suporte técnico",
            "Arquivo .copilotignore ou configurações do repositório",
            "Somente via API",
            "Apenas administradores globais",
            "Exclusivamente por ticket"
        ],
        correct: 1
    },
    {
        id: 250,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é o impacto das exclusões na performance do Copilot?",
        alternatives: [
            "Sempre melhora performance",
            "Pode reduzir contexto disponível e afetar qualidade das sugestões",
            "Não afeta performance",
            "Apenas acelera respostas",
            "Exclusivamente melhora segurança"
        ],
        correct: 1
    },
    {
        id: 251,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como funciona a detecção de duplicação no GitHub Copilot?",
        alternatives: [
            "Apenas comparação de texto",
            "Filtros que identificam código similar ao dos dados de treinamento",
            "Somente hash MD5",
            "Apenas por número de linhas",
            "Exclusivamente por sintaxe"
        ],
        correct: 1
    },
    {
        id: 252,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é a diferença entre exclusões de organização vs repositório?",
        alternatives: [
            "Não há diferença",
            "Organização afeta todos os repositórios, repositório apenas aquele específico",
            "Apenas nomenclatura diferente",
            "Organização é mais restritiva",
            "Repositório tem precedência sempre"
        ],
        correct: 1
    },
    {
        id: 253,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como verificar se exclusões estão funcionando corretamente?",
        alternatives: [
            "Apenas confiar nas configurações",
            "Testar sugestões em arquivos excluídos e verificar logs de auditoria",
            "Somente através de suporte",
            "Apenas por feedback visual",
            "Exclusivamente via API"
        ],
        correct: 1
    },
    {
        id: 254,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais tipos de arquivos podem ser excluídos do Copilot?",
        alternatives: [
            "Apenas código fonte",
            "Qualquer tipo de arquivo incluindo configurações, documentos e dados",
            "Somente arquivos de texto",
            "Apenas arquivos binários",
            "Exclusivamente arquivos de configuração"
        ],
        correct: 1
    },
    {
        id: 255,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como as exclusões afetam o Copilot Chat?",
        alternatives: [
            "Chat não é afetado",
            "Arquivos excluídos não são usados como contexto nas respostas do Chat",
            "Apenas sugestões inline são afetadas",
            "Somente para conversas longas",
            "Exclusivamente para comandos específicos"
        ],
        correct: 1
    },
    {
        id: 256,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é a propriedade das saídas geradas pelo Copilot?",
        alternatives: [
            "Sempre do GitHub",
            "Do usuário que recebe a sugestão, sujeito aos termos de serviço",
            "Domínio público automaticamente",
            "Compartilhada entre todos os usuários",
            "Exclusivamente da Microsoft"
        ],
        correct: 1
    },
    {
        id: 257,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como configurar políticas de privacidade em nível empresarial?",
        alternatives: [
            "Não é possível",
            "Através das configurações da organização GitHub Enterprise",
            "Apenas individualmente",
            "Somente via contratos especiais",
            "Exclusivamente por suporte premium"
        ],
        correct: 1
    },
    {
        id: 258,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais são as limitações das exclusões de contexto?",
        alternatives: [
            "Não há limitações",
            "Podem afetar qualidade das sugestões e não garantem 100% de privacidade",
            "Apenas limitações técnicas",
            "Somente questões de performance",
            "Exclusivamente problemas de configuração"
        ],
        correct: 1
    },
    {
        id: 259,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como ativar/desativar coleta de dados de telemetria?",
        alternatives: [
            "Não é possível controlar",
            "Através das configurações de conta ou organização no GitHub",
            "Apenas via suporte",
            "Somente para contas Enterprise",
            "Exclusivamente por API"
        ],
        correct: 1
    },
    {
        id: 260,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é o escopo da proteção contratual do GitHub Copilot?",
        alternatives: [
            "Apenas código original",
            "Proteção contra reivindicações de IP para código gerado pelo Copilot",
            "Somente para grandes empresas",
            "Apenas para código público",
            "Exclusivamente para usuários pagos"
        ],
        correct: 1
    },
    {
        id: 261,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como resolver problemas de sugestões não aparecendo em alguns arquivos?",
        alternatives: [
            "Sempre é problema do IDE",
            "Verificar exclusões configuradas, extensão ativa e conexão de rede",
            "Apenas reiniciar o computador",
            "Somente reinstalar extensão",
            "Exclusivamente contatar suporte"
        ],
        correct: 1
    },
    {
        id: 262,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais dados são compartilhados quando usando Copilot Individual?",
        alternatives: [
            "Todo o código do repositório",
            "Trechos de código no contexto do prompt e metadados de uso",
            "Apenas metadados",
            "Nenhum dado é compartilhado",
            "Exclusivamente dados públicos"
        ],
        correct: 1
    },
    {
        id: 263,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como configurar exclusões para arquivos sensíveis?",
        alternatives: [
            "Não é possível",
            "Usar padrões glob em .copilotignore ou configurações de repositório",
            "Apenas renomear arquivos",
            "Somente mover para pastas especiais",
            "Exclusivamente criptografar arquivos"
        ],
        correct: 1
    },
    {
        id: 264,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é a hierarquia de aplicação de exclusões?",
        alternatives: [
            "Todas têm peso igual",
            "Configurações mais restritivas prevalecem: organização > repositório > usuário",
            "Apenas configurações locais",
            "Usuário sempre tem precedência",
            "Apenas configurações globais"
        ],
        correct: 1
    },
    {
        id: 265,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como monitorar o uso do Copilot em uma organização?",
        alternatives: [
            "Não é possível monitorar",
            "Através de logs de auditoria e métricas de uso organizacionais",
            "Apenas contagem manual",
            "Somente via faturas",
            "Exclusivamente por relatórios de usuários"
        ],
        correct: 1
    },
    {
        id: 266,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais são as opções de retenção de dados para Copilot Business?",
        alternatives: [
            "Dados são mantidos indefinidamente",
            "Diferentes períodos de retenção baseados no tipo de dado e configurações",
            "Apenas 30 dias",
            "Somente durante a sessão",
            "Exclusivamente até cancelamento"
        ],
        correct: 1
    },
    {
        id: 267,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como configurar alertas de segurança para uso do Copilot?",
        alternatives: [
            "Não há alertas disponíveis",
            "Através de webhooks e integrações com sistemas de monitoramento",
            "Apenas via email manual",
            "Somente logs locais",
            "Exclusivamente por notificações push"
        ],
        correct: 1
    },
    {
        id: 268,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é o impacto das regulamentações GDPR/LGPD no uso do Copilot?",
        alternatives: [
            "Não há impacto",
            "Requer configurações específicas de privacidade e consentimento de dados",
            "Apenas para empresas europeias",
            "Somente para dados pessoais óbvios",
            "Exclusivamente para setores específicos"
        ],
        correct: 1
    },
    {
        id: 269,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como implementar Data Loss Prevention (DLP) com Copilot?",
        alternatives: [
            "DLP não é aplicável",
            "Configurar exclusões baseadas em padrões sensíveis e políticas organizacionais",
            "Apenas criptografia",
            "Somente acesso restrito",
            "Exclusivamente backup seguro"
        ],
        correct: 1
    },
    {
        id: 270,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais são os requisitos de compliance para usar Copilot em ambientes regulados?",
        alternatives: [
            "Não há requisitos especiais",
            "Avaliação de riscos, configurações de privacidade e auditoria regular",
            "Apenas documentação básica",
            "Somente treinamento de usuários",
            "Exclusivamente contratos especiais"
        ],
        correct: 1
    },
    {
        id: 271,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como garantir que código proprietário não seja exposto através do Copilot?",
        alternatives: [
            "Não é possível garantir",
            "Configurar exclusões adequadas e usar Copilot Business/Enterprise",
            "Apenas não usar Copilot",
            "Somente código público",
            "Exclusivamente licenças especiais"
        ],
        correct: 1
    },
    {
        id: 272,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é o processo para reportar problemas de privacidade relacionados ao Copilot?",
        alternatives: [
            "Não há processo específico",
            "Através dos canais oficiais de suporte GitHub e relatórios de segurança",
            "Apenas redes sociais",
            "Somente fóruns comunitários",
            "Exclusivamente via advogados"
        ],
        correct: 1
    },
    {
        id: 273,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como configurar Copilot para ambientes air-gapped ou offline?",
        alternatives: [
            "Copilot sempre requer internet",
            "Configurações especiais para ambientes isolados com modelos locais",
            "Não é possível usar offline",
            "Apenas cache local limitado",
            "Exclusivamente para Enterprise"
        ],
        correct: 1
    },
    {
        id: 274,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais são as melhores práticas para onboarding de equipes com questões de privacidade?",
        alternatives: [
            "Apenas training básico",
            "Treinamento em privacidade, configuração de exclusões e políticas claras",
            "Somente documentação",
            "Apenas demonstrações",
            "Exclusivamente auto-aprendizado"
        ],
        correct: 1
    },
    {
        id: 275,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como avaliar riscos de segurança antes de implementar Copilot?",
        alternatives: [
            "Avaliar riscos não é necessário",
            "Análise de dados sensíveis, configurações necessárias e políticas de uso",
            "Apenas verificar compatibilidade técnica",
            "Somente questões de custo",
            "Exclusivamente feedback de usuários"
        ],
        correct: 1
    },
    {
        id: 276,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é o impacto das exclusões na colaboração em equipe?",
        alternatives: [
            "Não afeta colaboração",
            "Pode reduzir sugestões contextuais mas melhora segurança e compliance",
            "Apenas melhora colaboração",
            "Somente afeta performance",
            "Exclusivamente questões técnicas"
        ],
        correct: 1
    },
    {
        id: 277,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como configurar diferentes níveis de acesso ao Copilot na organização?",
        alternatives: [
            "Todos têm mesmo acesso",
            "Através de políticas de organização e configurações por equipe/repositório",
            "Apenas admin global pode configurar",
            "Somente configurações individuais",
            "Exclusivamente via contratos"
        ],
        correct: 1
    },
    {
        id: 278,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Quais são os indicadores de que exclusões precisam ser ajustadas?",
        alternatives: [
            "Nunca precisam ajustes",
            "Sugestões inadequadas, exposição de dados sensíveis ou impacto na produtividade",
            "Apenas feedback negativo",
            "Somente questões de performance",
            "Exclusivamente por auditoria externa"
        ],
        correct: 1
    },
    {
        id: 279,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Como integrar Copilot com sistemas de gestão de identidade corporativa?",
        alternatives: [
            "Não é possível integrar",
            "Através de SSO, SAML e configurações de organização Enterprise",
            "Apenas autenticação básica",
            "Somente para grandes empresas",
            "Exclusivamente via API custom"
        ],
        correct: 1
    },
    {
        id: 280,
        domain: "Domínio 7: Fundamentos de privacidade e exclusões de contexto",
        question: "Qual é a estratégia recomendada para migração gradual para Copilot com foco em privacidade?",
        alternatives: [
            "Implementação imediata para todos",
            "Implementação por fases com grupos piloto, configurações progressivas e monitoramento",
            "Apenas para desenvolvedores senior",
            "Somente projetos não críticos",
            "Exclusivamente ambiente de desenvolvimento"
        ],
        correct: 1
    }
];