document.addEventListener('DOMContentLoaded', () => {

    
    const quizButtons = document.querySelectorAll('.quiz-btn');
    const resultDiv = document.getElementById('quiz-result');
    const resultText = document.getElementById('quiz-result-text');

    
    const quizData = {
        'institucional': {
            text: "<strong>Recomendação: Site Institucional.</strong> Ideal para apresentar sua empresa, serviços, equipe e portfólio. O objetivo é construir autoridade e credibilidade, funcionando como seu cartão de visitas digital."
        },
        'ecommerce': {
            text: "<strong>Recomendação: Loja Virtual (E-commerce).</strong> Uma plataforma completa para você cadastrar, gerenciar e vender seus produtos online com segurança, integrando meios de pagamento e cálculo de frete."
        },
        'landingpage': {
            text: "<strong>Recomendação: Página de Vendas (Landing Page).</strong> Perfeita para focar em uma única ação: vender um produto específico, promover um evento ou capturar contatos (leads). É projetada para máxima conversão."
        }
    };

    quizButtons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.dataset.type;
            const data = quizData[type];

            
            resultText.innerHTML = data.text; 

            
            resultDiv.classList.remove('quiz-result-hidden');

            
            quizButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Fade-in ao rolar a página ---
    
});