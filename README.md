# Simulado GitHub Copilot - GH-300

Uma aplicação web completa para simulados de preparação para a certificação GitHub Copilot GH-300.

![Simulado GitHub Copilot](https://github.com/user-attachments/assets/6380b87c-2ac7-42b1-b51c-68f20cb0e120)

## 📋 Características

- **180 questões** cobrindo todos os 7 domínios da certificação GH-300
- **60 questões aleatórias** por simulado para máxima variedade  
- **Interface responsiva** e intuitiva
- **Critério de aprovação**: 65% (39 de 60 questões corretas)
- **Revisão detalhada** das respostas após o simulado
- **Sem frameworks**: HTML, CSS e JavaScript puro
- **Suporte a teclado**: teclas 1-5 para selecionar alternativas, setas para navegar

## 🎯 Domínios Cobertos

1. **IA Responsável** (7% - ~13 questões)
2. **Planos e recursos do GitHub Copilot** (31% - ~56 questões)  
3. **Como o GitHub Copilot funciona e lida com dados** (15% - ~27 questões)
4. **Elaboração de Prompts e Engenharia de Prompts** (9% - ~16 questões)
5. **Casos de uso de IA para desenvolvedores** (14% - ~25 questões)
6. **Teste com o GitHub Copilot** (9% - ~16 questões)
7. **Fundamentos de privacidade e exclusões de contexto** (15% - ~27 questões)

## 🚀 Como Usar

### Método 1: Servidor Local Simples
```bash
# Clone o repositório
git clone https://github.com/maysagoncalves29/simulados-github-copilot.git
cd simulados-github-copilot

# Inicie um servidor HTTP simples
python3 -m http.server 8000

# Acesse http://localhost:8000 no seu navegador
```

### Método 2: Abrir Diretamente
```bash
# Clone o repositório
git clone https://github.com/maysagoncalves29/simulados-github-copilot.git
cd simulados-github-copilot

# Abra o arquivo index.html no seu navegador
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

## 📁 Estrutura do Projeto

```
simulados-github-copilot/
├── index.html          # Página principal da aplicação
├── styles.css          # Estilos e design responsivo
├── quiz.js             # Lógica principal da aplicação
├── questions.js        # Base de dados com 180 questões
└── README.md           # Documentação
```

## 🎮 Funcionalidades

### Tela de Boas-vindas
- Informações sobre o simulado
- Botão para iniciar

### Durante o Simulado
- Indicador de progresso
- Navegação entre questões
- Marcação visual das alternativas selecionadas
- Identificação do domínio de cada questão

### Tela de Resultados  
- Pontuação percentual
- Status de aprovação/reprovação
- Tempo gasto no simulado
- Estatísticas detalhadas

### Revisão de Respostas
- Visualização de todas as questões
- Comparação entre resposta dada e resposta correta
- Identificação visual de acertos e erros

## ⌨️ Atalhos de Teclado

- **1-5**: Selecionar alternativas A-E
- **← →**: Navegar entre questões
- **Ctrl+R**: Reiniciar (apenas na tela de boas-vindas)

## 🎨 Design

- Interface moderna com gradiente atraente
- Design responsivo para dispositivos móveis
- Cores consistentes com a identidade GitHub
- Tipografia legível e hierarquia visual clara
- Animações suaves para melhor experiência

## 📊 Critério de Avaliação

- **Total de questões**: 60 (selecionadas aleatoriamente)
- **Nota mínima**: 65% (39 questões corretas)
- **Status**: APROVADO/REPROVADO baseado na nota mínima
- **Tentativas**: Ilimitadas

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox/Grid
- **JavaScript ES6+**: Lógica da aplicação
- **LocalStorage**: Persistência opcional de resultados

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Adicionando Questões

As questões estão organizadas no arquivo `questions.js`. Para adicionar novas questões:

```javascript
{
    id: 181,
    domain: "Domínio X: Nome do Domínio", 
    question: "Texto da pergunta?",
    alternatives: [
        "Alternativa A",
        "Alternativa B", 
        "Alternativa C",
        "Alternativa D",
        "Alternativa E"
    ],
    correct: 1 // Índice da resposta correta (0-4)
}
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🎓 Sobre a Certificação GH-300

A certificação GitHub Copilot demonstra competência no uso eficaz do GitHub Copilot e IA generativa para desenvolvimento de software. Este simulado cobre todos os domínios oficiais do exame.

### Recursos Oficiais
- [Guia de Estudo GitHub Copilot](https://docs.github.com/en/copilot)
- [Documentação GitHub Copilot](https://docs.github.com/en/copilot)
- [GitHub Learning](https://skills.github.com/)

---

Desenvolvido com ❤️ para a comunidade de desenvolvedores preparando-se para a certificação GitHub Copilot GH-300.