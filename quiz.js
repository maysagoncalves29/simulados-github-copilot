// GitHub Copilot Quiz Application
class GitHubCopilotQuiz {
    constructor() {
        this.allQuestions = questionsDatabase;
        this.selectedQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.isQuizActive = false;
        this.quizMode = 'practice'; // 'practice' or 'exam'
        this.startTime = null;
        this.endTime = null;
        
        this.initializeEventListeners();
        this.showWelcomeScreen();
    }

    initializeEventListeners() {
        // Start quiz button
        document.getElementById('start-quiz').addEventListener('click', () => {
            this.startQuiz();
        });

        // Navigation buttons
        document.getElementById('prev-question').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-question').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('finish-quiz').addEventListener('click', () => {
            this.finishQuiz();
        });

        // Try again button
        document.getElementById('try-again').addEventListener('click', () => {
            this.resetQuiz();
        });

        // Review answers button
        document.getElementById('review-answers').addEventListener('click', () => {
            this.showReviewScreen();
        });

        // Back to results button
        document.getElementById('back-to-results').addEventListener('click', () => {
            this.showResultsScreen();
        });
    }

    showWelcomeScreen() {
        this.hideAllScreens();
        document.getElementById('welcome-screen').classList.add('active');
    }

    showQuizScreen() {
        this.hideAllScreens();
        document.getElementById('quiz-screen').classList.add('active');
    }

    showResultsScreen() {
        this.hideAllScreens();
        document.getElementById('results-screen').classList.add('active');
    }

    showReviewScreen() {
        this.hideAllScreens();
        document.getElementById('review-screen').classList.add('active');
        this.populateReviewContent();
    }

    hideAllScreens() {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.remove('active'));
    }

    startQuiz() {
        // Captura modo selecionado
        const selectedMode = document.querySelector('input[name="quiz-mode"]:checked').value;
        this.quizMode = selectedMode;
        
        // Captura domínios selecionados
        const checkedBoxes = document.querySelectorAll('.domain-checkbox:checked');
        const selectedDomains = Array.from(checkedBoxes).map(cb => cb.value);
        this.selectRandomQuestions(selectedDomains);
        if (!this.selectedQuestions.length) {
            alert('Não há questões disponíveis para os domínios selecionados. Por favor, escolha outros domínios.');
            return;
        }
        this.userAnswers = new Array(60).fill(null);
        this.currentQuestionIndex = 0;
        this.isQuizActive = true;
        this.startTime = new Date();
        
        this.showQuizScreen();
        this.displayCurrentQuestion();
        this.updateNavigationButtons();
        this.updateProgressBar();
    }

    selectRandomQuestions(selectedDomains = []) {
        let pool;
        if (selectedDomains && selectedDomains.length > 0) {
            pool = this.allQuestions.filter(q => selectedDomains.includes(q.domain));
        } else {
            pool = [...this.allQuestions];
        }
        // Shuffle and select 60
        const shuffled = pool.sort(() => 0.5 - Math.random());
        this.selectedQuestions = shuffled.slice(0, 60);
        // Se todos os domínios, garantir distribuição
        if (!selectedDomains || selectedDomains.length === 0) {
            this.ensureDomainDistribution();
        }
    }

    ensureDomainDistribution() {
        const domainCounts = {};
        const targetDistribution = {
            "Domínio 1: IA Responsável": 4,
            "Domínio 2: Planos e recursos do GitHub Copilot": 19,
            "Domínio 3: Como o GitHub Copilot funciona e lida com dados": 9,
            "Domínio 4: Elaboração de Prompts e Engenharia de Prompts": 5,
            "Domínio 5: Casos de uso de IA para desenvolvedores": 8,
            "Domínio 6: Teste com o GitHub Copilot": 5,
            "Domínio 7: Fundamentos de privacidade e exclusões de contexto": 10
        };

        // Agrupa as questões por domínio
        const questionsByDomain = {};
        this.allQuestions.forEach(q => {
            if (!questionsByDomain[q.domain]) questionsByDomain[q.domain] = [];
            questionsByDomain[q.domain].push(q);
        });

        // Seleciona a quantidade exata de cada domínio
        let selected = [];
        Object.keys(targetDistribution).forEach(domain => {
            const domainQuestions = questionsByDomain[domain] || [];
            // Embaralha as questões do domínio
            const shuffled = domainQuestions.sort(() => 0.5 - Math.random());
            // Seleciona a quantidade necessária (ou o máximo disponível)
            selected = selected.concat(shuffled.slice(0, targetDistribution[domain]));
        });

        // Embaralha o conjunto final
        this.selectedQuestions = selected.sort(() => 0.5 - Math.random());
    }

    displayCurrentQuestion() {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        
        // Clear previous feedback
        const feedbackArea = document.getElementById('feedback-area');
        feedbackArea.style.display = 'none';
        feedbackArea.innerHTML = '';
        
        // Update question counter
        document.getElementById('question-counter').textContent = 
            `Questão ${this.currentQuestionIndex + 1} de 60`;
        
        // Update domain tag
        document.getElementById('domain-tag').textContent = question.domain;
        
        // Update question text
        document.getElementById('question-text').textContent = question.question;
        
        // Create alternatives
        this.createAlternatives(question);
        
        // Update progress bar
        this.updateProgressBar();
    }

    createAlternatives(question) {
        const alternativesContainer = document.getElementById('alternatives');
        alternativesContainer.innerHTML = '';
        
        question.alternatives.forEach((alternative, index) => {
            const alternativeDiv = document.createElement('div');
            alternativeDiv.className = 'alternative';
            
            const isSelected = this.userAnswers[this.currentQuestionIndex] === index;
            if (isSelected) {
                alternativeDiv.classList.add('selected');
            }
            
            alternativeDiv.innerHTML = `
                <input type="radio" id="alt-${index}" name="question-${this.currentQuestionIndex}" value="${index}">
                <span class="alternative-label">${String.fromCharCode(65 + index)})</span>
                <span class="alternative-text">${alternative}</span>
            `;
            
            alternativeDiv.addEventListener('click', () => {
                this.selectAlternative(index);
            });
            
            alternativesContainer.appendChild(alternativeDiv);
        });
    }

    selectAlternative(alternativeIndex) {
        this.userAnswers[this.currentQuestionIndex] = alternativeIndex;
        
        // Update UI
        const alternatives = document.querySelectorAll('.alternative');
        alternatives.forEach((alt, index) => {
            if (index === alternativeIndex) {
                alt.classList.add('selected');
                alt.querySelector('input[type="radio"]').checked = true;
            } else {
                alt.classList.remove('selected');
                alt.querySelector('input[type="radio"]').checked = false;
            }
        });
        
        // Show immediate feedback in practice mode
        if (this.quizMode === 'practice') {
            this.showImmediateFeedback(alternativeIndex);
        }
        
        this.updateNavigationButtons();
    }

    showImmediateFeedback(selectedIndex) {
        const question = this.selectedQuestions[this.currentQuestionIndex];
        const feedbackArea = document.getElementById('feedback-area');
        const isCorrect = this.isCorrectAnswer(question, selectedIndex);
        
        if (isCorrect) {
            feedbackArea.innerHTML = `
                <div class="feedback-correct">
                    <strong>✅ Correto!</strong>
                </div>
            `;
        } else {
            const correctAnswers = this.getCorrectAnswers(question);
            const correctTexts = correctAnswers.map(index => 
                `${String.fromCharCode(65 + index)}) ${question.alternatives[index]}`
            ).join('<br>');
            
            feedbackArea.innerHTML = `
                <div class="feedback-incorrect">
                    <strong>❌ Incorreto!</strong><br>
                    <strong>Resposta(s) correta(s):</strong><br>
                    ${correctTexts}
                </div>
            `;
        }
        
        feedbackArea.style.display = 'block';
    }

    isCorrectAnswer(question, selectedIndex) {
        if (Array.isArray(question.correct)) {
            return question.correct.includes(selectedIndex);
        }
        return question.correct === selectedIndex;
    }

    getCorrectAnswers(question) {
        if (Array.isArray(question.correct)) {
            return question.correct;
        }
        return [question.correct];
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-question');
        const nextBtn = document.getElementById('next-question');
        const finishBtn = document.getElementById('finish-quiz');
        
        // Previous button
        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        // Next/Finish button logic
        const hasAnswer = this.userAnswers[this.currentQuestionIndex] !== null;
        const isLastQuestion = this.currentQuestionIndex === this.selectedQuestions.length - 1;
        
        if (isLastQuestion) {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'inline-block';
            finishBtn.disabled = !this.allQuestionsAnswered();
        } else {
            nextBtn.style.display = 'inline-block';
            finishBtn.style.display = 'none';
            nextBtn.disabled = !hasAnswer;
        }
    }

    allQuestionsAnswered() {
        return this.userAnswers.every(answer => answer !== null);
    }

    updateProgressBar() {
        const progress = ((this.currentQuestionIndex + 1) / this.selectedQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayCurrentQuestion();
            this.updateNavigationButtons();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.selectedQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayCurrentQuestion();
            this.updateNavigationButtons();
        }
    }

    finishQuiz() {
        if (!this.allQuestionsAnswered()) {
            alert('Por favor, responda todas as questões antes de finalizar o simulado.');
            return;
        }

        this.endTime = new Date();
        this.isQuizActive = false;
        this.calculateResults();
        this.showResultsScreen();
        this.displayResults();
    }

    calculateResults() {
        let correctAnswers = 0;
        
        this.selectedQuestions.forEach((question, index) => {
            if (this.isCorrectAnswer(question, this.userAnswers[index])) {
                correctAnswers++;
            }
        });
        
        this.results = {
            correctAnswers,
            totalQuestions: this.selectedQuestions.length,
            percentage: Math.round((correctAnswers / this.selectedQuestions.length) * 100),
            passed: correctAnswers >= 48,            duration: this.calculateDuration()
        };
    }

    calculateDuration() {
        if (!this.startTime || !this.endTime) return '0 min';
        
        const diffMs = this.endTime - this.startTime;
        const diffMins = Math.floor(diffMs / 60000);
        const diffSecs = Math.floor((diffMs % 60000) / 1000);
        
        if (diffMins === 0) {
            return `${diffSecs} seg`;
        } else if (diffSecs === 0) {
            return `${diffMins} min`;
        } else {
            return `${diffMins} min ${diffSecs} seg`;
        }
    }

    displayResults() {
        const resultsContent = document.getElementById('results-content');
        const { correctAnswers, totalQuestions, percentage, passed, duration } = this.results;
        
        const statusClass = passed ? 'passed' : 'failed';
        const statusMessage = passed ? 'Parabéns! Você foi aprovado!' : 'Você não atingiu a nota mínima.';
        const encouragement = passed ? 
            'Você demonstrou conhecimento sólido sobre GitHub Copilot!' : 
            'Continue estudando e tente novamente. Você consegue!';
        
        resultsContent.innerHTML = `
            <div class="results-header">
                <div class="score-circle ${statusClass}">
                    ${percentage}%
                </div>
                <div class="status-message ${statusClass}">
                    ${statusMessage}
                </div>
                <p>${encouragement}</p>
            </div>
            
            <div class="score-details">
                <div class="score-item">
                    <span>Questões corretas:</span>
                    <span>${correctAnswers} de ${totalQuestions}</span>
                </div>
                <div class="score-item">
                    <span>Percentual de acerto:</span>
                    <span>${percentage}%</span>
                </div>
                <div class="score-item">
                    <span>Nota mínima:</span>
                    <span>70%</span>
                </div>
                <div class="score-item">
                    <span>Tempo gasto:</span>
                    <span>${duration}</span>
                </div>
                <div class="score-item">
                    <span>Status:</span>
                    <span class="${statusClass}">${passed ? 'APROVADO' : 'REPROVADO'}</span>
                </div>
            </div>
        `;
    }

    populateReviewContent() {
        const reviewContent = document.getElementById('review-content');
        reviewContent.innerHTML = '';
        
        this.selectedQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = this.isCorrectAnswer(question, userAnswer);
            const correctClass = isCorrect ? 'correct' : 'incorrect';
            
            const questionDiv = document.createElement('div');
            questionDiv.className = `review-question ${correctClass}`;
            
            const userAnswerText = userAnswer !== null ? 
                `${String.fromCharCode(65 + userAnswer)}) ${question.alternatives[userAnswer]}` : 
                'Não respondida';
            
            const correctAnswers = this.getCorrectAnswers(question);
            const correctAnswerTexts = correctAnswers.map(correctIndex => 
                `${String.fromCharCode(65 + correctIndex)}) ${question.alternatives[correctIndex]}`
            ).join('<br>');
            
            questionDiv.innerHTML = `
                <div class="review-question-number">
                    Questão ${index + 1} - ${question.domain}
                </div>
                <div class="review-question-text">
                    ${question.question}
                </div>
                <div class="review-answer ${isCorrect ? 'user-correct' : 'user-answer'}">
                    <strong>Sua resposta:</strong> ${userAnswerText}
                </div>
                ${!isCorrect ? `
                    <div class="review-answer correct-answer">
                        <strong>Resposta(s) correta(s):</strong><br>${correctAnswerTexts}
                    </div>
                ` : ''}
            `;
            
            reviewContent.appendChild(questionDiv);
        });
    }

    resetQuiz() {
        this.selectedQuestions = [];
        this.userAnswers = [];
        this.currentQuestionIndex = 0;
        this.isQuizActive = false;
        this.startTime = null;
        this.endTime = null;
        this.results = null;
        
        this.showWelcomeScreen();
    }

    // Utility method to get domain statistics
    getDomainStatistics() {
        if (!this.results) return null;
        
        const domainStats = {};
        
        this.selectedQuestions.forEach((question, index) => {
            const domain = question.domain;
            if (!domainStats[domain]) {
                domainStats[domain] = { correct: 0, total: 0 };
            }
            
            domainStats[domain].total++;
            if (this.isCorrectAnswer(question, this.userAnswers[index])) {
                domainStats[domain].correct++;
            }
        });
        
        // Calculate percentages
        Object.keys(domainStats).forEach(domain => {
            const stats = domainStats[domain];
            stats.percentage = Math.round((stats.correct / stats.total) * 100);
        });
        
        return domainStats;
    }

    // Save results to localStorage (optional feature)
    saveResults() {
        if (!this.results) return;
        
        const resultData = {
            date: new Date().toISOString(),
            score: this.results.percentage,
            passed: this.results.passed,
            duration: this.results.duration,
            domainStats: this.getDomainStatistics()
        };
        
        let savedResults = JSON.parse(localStorage.getItem('copilot-quiz-results') || '[]');
        savedResults.push(resultData);
        
        // Keep only last 10 results
        if (savedResults.length > 10) {
            savedResults = savedResults.slice(-10);
        }
        
        localStorage.setItem('copilot-quiz-results', JSON.stringify(savedResults));
    }

    // Load previous results (optional feature)
    loadPreviousResults() {
        return JSON.parse(localStorage.getItem('copilot-quiz-results') || '[]');
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.copilotQuiz = new GitHubCopilotQuiz();
});

// Prevent accidental page reload during quiz
window.addEventListener('beforeunload', (e) => {
    if (window.copilotQuiz && window.copilotQuiz.isQuizActive) {
        e.preventDefault();
        e.returnValue = '';
        return 'Tem certeza que deseja sair? Seu progresso será perdido.';
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (!window.copilotQuiz || !window.copilotQuiz.isQuizActive) return;
    
    // Number keys 1-5 for selecting alternatives
    if (e.key >= '1' && e.key <= '5') {
        const alternativeIndex = parseInt(e.key) - 1;
        window.copilotQuiz.selectAlternative(alternativeIndex);
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowLeft') {
        window.copilotQuiz.previousQuestion();
    } else if (e.key === 'ArrowRight') {
        window.copilotQuiz.nextQuestion();
    }
});