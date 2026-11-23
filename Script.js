// =========================================================
// 1. TEU ARMAZENAMENTO DE CONTACTOS DO GRUPO DO WHATSAPP
// Edita aqui com os dados reais dos membros do teu grupo!
// =========================================================
const contatosWhatsApp = [
    {
        nome: "Marcio",
        genero: "homem",
        whatsapp: "244974514495995", // Coloca o número real com 244 antes
        gostos: ["voz atraente", "gosta de falar", "obidiente", "caseiro","safadeza"]
    },
    {
        nome: "Isabel",
        genero: "mulher",
        whatsapp: "244950656114",
        gostos: ["bonito", "gosta de falar", "calmo", "voz atraente"]
    },
    {
        nome: "Chucy",
        genero: "homem",
        whatsapp: "24492788765",
        gostos: ["inteligente", "altura", "aroma", "gosta de falar"]
    },
    {
        nome: "Nádia",
        genero: "mulher",
        whatsapp: "244959388381",
        gostos: ["respeito", "gosta de falar", "curtir", "maturidade"]
    },
    {
        nome: "Angela",
        genero: "mulher",
        whatsapp: "244957769196",
        gostos: ["calma", "bonita", "corpo", "pretinha"]
    },
    {
        nome:"jose",
       genero:"homem",
       whataspp:"950649168", // coloca o numero real com 244 antes
       gostos:["voz atraente","comportamento","corpo","respeito","gosta de falar"] 
    },
    
    {
        nome:"Florinda",
       genero:"mulher",
       whataspp:"947280275", // coloca o numero real com 244 antes
       gostos:["atitude","o jeito de ser","alto"] 
    },
    
    {
        nome:"nelma",
       genero:"mulher",
       whataspp:"928637186", // coloca o numero real com 244 antes
       gostos:["calma","altura","bonita","caseira","corpo"] 
    },
    
    {
        nome:"zicelma",
       genero:"mulher",
       whataspp:"9544226969", // coloca o numero real com 244 antes
       gostos:["altura","cabelo","olhos","corpo","sorriso"] 
    },
    
    {
        nome:"alianypaulo11",
       genero:"mulher",
       whataspp:"925483920", // coloca o numero real com 244 antes
       gostos:["calma","caseira","cabelo"] 
    },
    
    {
        nome:"Aline",
       genero:"mulher",
       whataspp:"933252951", // coloca o numero real com 244 antes
       gostos:["bonita","sorriso","gosta de falar","calma","respeito","aroma"] 
    },
    
    {
        nome:"Luis",
       genero:"homem",
       whataspp:"9584991194", // coloca o numero real com 244 antes
       gostos:["comportamento","atitude","respeito","calmo","aroma"] 
    },
    
    {
        nome:"Szoboszlai",
       genero:"homem",
       whataspp:"998120287", // coloca o numero real com 244 antes
       gostos:["caracter","bonito","inteligente","caseira","obidiente"] 
    },
    
    {
        nome:"Mariana",
       genero:"mulher",
       whataspp:"951972483", // coloca o numero real com 244 antes
       gostos:["calma","gosta de dinheiro","pretinho"] 
    },
    {
        nome:"priscila",
       genero:"mulher",
       whataspp:"959665860", // coloca o numero real com 244 antes
       gostos:["calma","pretinho","gosta de falar","safadeza"] 
    },
    {
        nome:"Carlos",
       genero:"homem",
       whataspp:"9934934747", // coloca o numero real com 244 antes
       gostos:["calmo","gosta de falar","pretinho","gosta de dinheiro","obidiente","comportamento"] 
    },
{
        nome:"josilene",
       genero:"mulher",
       whataspp:"926480829", // coloca o numero real com 244 antes
       gostos:["bonita","inteligente","gosta de falar","cabelo","sorriso","olhos","respeito"] 
    },
    {
        nome:"Celcio",
       genero:"homem",
       whataspp:"946554600", // coloca o numero real com 244 antes
       gostos:["pretinho","corpo","olhos","sorriso","comportamento","voz atrente"] 
    },
    {
        nome:"Meury",
       genero:"mulher",
       whataspp:"9074605996", // coloca o numero real com 244 antes
       gostos:["bonito","calmo","caseiro","comportamento"] 
    },
    {
        nome:"tinilson",
       genero:"homem",
       whataspp:"93706284", // coloca o numero real com 244 antes
       gostos:["bonita","calma","gosta de falar","obidiente"] 
    },
    {
        nome:"Ivania",
       genero:"mulher",
       whataspp:"953559245", // coloca o numero real com 244 antes
       gostos:["bonito","gosta de falar","caseiro","altura","voz atraente","comportamento","safadeza"] 
    },
    {
        nome:"Lonely",
       genero:"homem",
       whataspp:"920639345", // coloca o numero real com 244 antes
       gostos:["calmo","gosta de falar","caseiro","bonito"] 
    },
    {
        nome:"O sabio",
       genero:"homem",
       whataspp:"924609072", // coloca o numero real com 244 antes
       gostos:["calma","inteligente","curtir"] 
    },
    {
        nome:"Coringa",
       genero:"homem",
       whataspp:"951678266", // coloca o numero real com 244 antes
       gostos:["bonita","inteligente","gosta de falar","calma","sorriso","corpo"] 
    },
    {
        nome: "Minato",
        genero: "homem",
        whatsapp: "244958169610",
        gostos: ["bonito", "gosta de falar", "calmo", "voz atreante"]
    },
];

// =========================================================
// 2. PERGUNTAS (Cada resposta dá uma "tag" de gosto)
// =========================================================
const questions = [
    {
        question: "O que ele ou ela deve ter?",
        answers: [
            { text: "que saiba estar, calmo", tag: "que saiba estar" },
            { text: "inteligente, gosta de falar", tag: "caseira" },
            { text: " gosta de dinheiro", tag: "gosta de dinheiro" },
            { text: "curtir", tag: "curtir" },
            { text: "carcter", tag: "caracter" },
               { text: "sorisso", tag: "sorriso" },
            { text: "Ser inteligente", tag: "ser inteligente " },
            { text: "Ser calma, parceira e caseiro", tag: "caseiro" },
            { text: "cabelo", tag: "cabelo" },
            { text: "altura", tag: "altura" },
            { text: "olhos", tag: "olhos" },
            { text: "atitude", tag: "atitude" },
            { text: "aroma", tag: "aroma" },
            { text: "seu jeito de ser", tag: "seu jeto de ser" },
            { text: "safadeza", tag: "safadeza" },
            { text: "beleza", tag: "beleza" },
            { text: "ser calmo ou calma", tag: "ser calmo ou calma" },
            { text: "ir pra festas", tag: "curtir" },
            { text: "bloguerinho ou bloguerinha", tag: "bluguerinha bloguerinho" },
             { text: "voz atraente", tag: "voz atraente" },
             { text: "corpo", tag: "corpo" },
             { text: "pretinha", tag: "pretinha" },
             { text: "obidiente", tag: "obidiente" },
             { text: "lealdade", tag: "lealdade" },
             { text: "presenca", tag: "presenca" },
             { text: "bom humor", tag: "bom humor" },
             { text: "voz atraente", tag: "comportamento" },
             { text: "respeito", tag: "respeito" },
             { text: "maturidade", tag: "maturidade" },
            { text: "pretinha", tag: "pretinho" },
            { text: "bandida", tag: "bandida" } 

        ]
    },
    {
        question: "Qual a primeira coisa que vcs fariam juntos🤵🏾🤵🏾‍♀️?",
        answers: [
            { text: "bater o kumbo que tem na parede",tag: "gosta de dinheiro" },
            { text: "chamada o fim de semana inteiro", tag: "gosta de falar" },
            { text: "ficar sem fazer nada em casa", tag: "calma" },
            { text: "Ficar na minha tranquilidade em casa", tag: "caseiro" },
              { text: "ir pra uma festa sem limites", tag: "curtir" },
                  { text: "ir pra qualquer lugar divertido", tag: "ir pra qualquer lugar divertido" },
                      { text: "me surpreenda!", tag: "me supreenda!" },
                          { text: "restaurante chinque", tag: "restaurante chique" }
        ]
    },
    {
        question: "Qual é o teu estilo musical favorito?",
        answers: [
            { text: "Kizomba / Semba", tag: "kizomba" },
            { text: "Afrobeat / Kuduro", tag: "afrobeat" },
            { text: "Rap / Trap / Hip-Hop", tag: "rap" },
            { text: "Gosto de tudo um pouco / Pop / R&B", tag: "musica" }
        ]
    },
    {
        question: "O que te chama logo atenção numa pessoa?",
        answers: [
            { text: "Ter gostos parecidos com os meus (ex: comer/dormir)", tag: "comer" },
            { text: "sorisso", tag: "sorriso" },
            { text: "Ser inteligente", tag: "ser inteligente " },
            { text: "Ser calma, parceira e caseiro", tag: "caseiro" },
            { text: "cabelo", tag: "cabelo" },
            { text: "altura", tag: "altura" },
            { text: "olhos", tag: "olhos" },
            { text: "atitude", tag: "atitude" },
            { text: "aroma", tag: "aroma" },
            { text: "seu jeito de ser", tag: "seu jeto de ser" },
            { text: "safadeza", tag: "safadeza" },
            { text: "beleza", tag: "beleza" },
            { text: "ser calmo ou calma", tag: "ser calmo ou calma" },
            { text: "ir pra festas", tag: "curtir" },
            { text: "bloguerinho ou bloguerinha", tag: "bluguerinha bloguerinho" },
             { text: "voz atraente", tag: "voz atraente" }

        ]
    }
];

let userName = "";
let userInterest = "";
let userTags = [];
let currentQuestionIndex = 0;

// 3. Iniciar o Quiz
function startQuiz() {
    userName = document.getElementById("user-name").value.trim();
    userInterest = document.getElementById("user-interest").value;

    if (!userName || !userInterest) {
        alert("Escreve o teu nome e escolhe quem procuras!");
        return;
    }

    userTags = [];
    currentQuestionIndex = 0;

    document.getElementById("register-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
}

// 4. Mostrar pergunta atual
function showQuestion() {
    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";

    const currentQ = questions[currentQuestionIndex];
    document.getElementById("question").innerText = `${currentQuestionIndex + 1}. ${currentQ.question}`;

    currentQ.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.onclick = () => selectAnswer(answer.tag);
        answerButtons.appendChild(button);
    });
}

// 5. Guardar o gosto escolhido e avançar
function selectAnswer(tag) {
    userTags.push(tag);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        calculatePerfectMatch();
    }
}

// 6. Cruzar os gostos do utilizador com os contactos do WhatsApp
function calculatePerfectMatch() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    // Filtrar pelo género escolhido (e evitar que a própria pessoa dê match consigo mesma)
    const candidatos = contatosWhatsApp.filter(pessoa => {
        const naoSouEu = pessoa.nome.toLowerCase() !== userName.toLowerCase();
        const generoCompativel = userInterest === "ambos" || pessoa.genero === userInterest;
        return naoSouEu && generoCompativel;
    });

    // Calcular pontos de afinidade com base nos gostos em comum
    const resultados = candidatos.map(pessoa => {
        let gostosEmComum = [];

        userTags.forEach(tag => {
            if (pessoa.gostos.includes(tag) && !gostosEmComum.includes(tag)) {
                gostosEmComum.push(tag);
            }
        });

        // Calcular percentagem (mínimo de 35% para ficar divertido no grupo)
        let percentagem = Math.round((gostosEmComum.length / questions.length) * 100);
        if (percentagem < 35) percentagem += 30; 
        if (percentagem > 100) percentagem = 100;

        return {
            ...pessoa,
            gostosEmComum,
            percentagem
        };
    });

    // Ordenar do maior match para o menor
    resultados.sort((a, b) => b.percentagem - a.percentagem);

    showResults(resultados);
}

// 7. Exibir o vencedor e configurar os botões do WhatsApp
function showResults(resultados) {
    const bestMatchCard = document.getElementById("best-match-card");
    const shareBtn = document.getElementById("share-whatsapp-btn");

    if (resultados.length === 0) {
        bestMatchCard.innerHTML = "<p>Nenhum contacto compatível encontrado na lista.</p>";
        return;
    }

    const parPerfeito = resultados[0];
    const textoGostos = parPerfeito.gostosEmComum.length > 0 
        ? `Gostos em comum: <strong>${parPerfeito.gostosEmComum.join(", ")}</strong>` 
        : "Vibe complementar!";

    // Cartão do Par Perfeito
    bestMatchCard.innerHTML = `
        <h3>${parPerfeito.nome} (${parPerfeito.percentagem}% de Afinidade)</h3>
        <p>${textoGostos}</p>
        <a href="https://wa.me/${parPerfeito.whatsapp}?text=Oi%20${encodeURIComponent(parPerfeito.nome)}!%20Fiz%20o%20teste%20do%20THE%20LOVE%20ANGOLA%20e%20deu%20${parPerfeito.percentagem}%25%20de%20match%20entre%20nós%20👀❤️" 
           target="_blank" class="chat-link">
           💬 Mandar mensagem para ${parPerfeito.nome}
        </a>
    `;

    // Configurar botão para mandar o resultado no Grupo do WhatsApp
    const mensagemGrupo = `🔥 *THE LOVE ANGOLA* 🔥\n\nO meu nome é *${userName}* e descobri que o meu par perfeito no grupo é *${parPerfeito.nome}* com *${parPerfeito.percentagem}%* de compatibilidade! 💘\n\nQuem será o teu? Faz o teste também!`;
    
    shareBtn.onclick = () => {
        const urlWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagemGrupo)}`;
        window.open(urlWhatsApp, "_blank");
    };
}
