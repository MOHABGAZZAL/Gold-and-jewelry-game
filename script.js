let level = 1;
let score = 0;
const questionsPerLevel = 5;
let currentQuestionIndex = 0;

const questions = [
    // المستوى 1: أساسيات الذهب
    { question: "ما هو العنصر الكيميائي للذهب؟", options: ["Au", "Ag", "Fe"], answer: 0 },
    { question: "أي من هذه الصفات يميز الذهب؟", options: ["مغناطيسي", "غير مغناطيسي", "شفاف"], answer: 1 },
    { question: "ما هو اللون الطبيعي للذهب النقي؟", options: ["أبيض", "ذهبي", "وردي"], answer: 1 },
    { question: "الذهب نقي يكون في أي عيار؟", options: ["24K", "18K", "22K"], answer: 0 },
    { question: "أي من هذه الدول هي أكبر منتج للذهب؟", options: ["الصين", "الهند", "الولايات المتحدة"], answer: 0 },

    // المستوى 2: عيارات الذهب
    { question: "ما هو محتوى الذهب في عيار 18؟", options: ["75%", "50%", "90%"], answer: 0 },
    { question: "ما هو الاستخدام الرئيسي لعيار 14K؟", options: ["مجوهرات رخيصة", "عملات ذهبية", "مجوهرات دائمة"], answer: 2 },
    { question: "ما هو الفرق بين الذهب الأبيض والذهب الأصفر؟", options: ["لون الطلاء", "خلط المعادن", "درجة النقاء"], answer: 1 },
    { question: "الذهب الوردي يحتوي على خليط من:", options: ["الفضة", "النحاس", "الزنك"], answer: 1 },
    { question: "عيار 22 يستخدم عادةً في:", options: ["الاستثمار", "المجوهرات التقليدية", "الديكور"], answer: 1 },

    // المستوى 3: المعادن الثمينة الأخرى
    { question: "ما هو المعدن الأغلى ثمناً؟", options: ["البلاتين", "الروديوم", "الذهب"], answer: 1 },
    { question: "أي من هذه المعادن يشتهر بمرونته العالية؟", options: ["الفضة", "النحاس", "البلاتين"], answer: 0 },
    { question: "أي من هذه الأحجار يستخدم مع البلاتين؟", options: ["الياقوت", "الألماس", "التوباز"], answer: 1 },
    { question: "ما هو معدن 'الذهب الأخضر'؟", options: ["الذهب مع الفضة", "النحاس", "البلاديوم"], answer: 0 },
    { question: "ما هو المعدن المستخدم في صنع العملات الفضية؟", options: ["الفضة", "النحاس", "الذهب"], answer: 0 },

    // المستوى 4: أشكال المجوهرات
    { question: "أي من هذه الأشكال شائع في الخواتم؟", options: ["دائري", "مربع", "مستطيل"], answer: 0 },
    { question: "ما هو اسم القلادة التي تلتف حول الرقبة؟", options: ["كوليه", "سلسلة طويلة", "بروش"], answer: 0 },
    { question: "أي من هذه الأحجار يستخدم عادةً في الأقراط؟", options: ["الألماس", "الفيروز", "الزبرجد"], answer: 0 },
    { question: "ما هو اسم الإطار المحيط بالألماس في الخواتم؟", options: ["التاج", "الإطار", "القاعدة"], answer: 1 },
    { question: "ما هو الشكل الهندسي الأكثر مبيعًا للألماس؟", options: ["مربع", "دائري", "بيضاوي"], answer: 1 },

    // المستوى 5: تاريخ الذهب والمجوهرات
    { question: "أي حضارة قديمة استخدمت الذهب لأول مرة؟", options: ["المصرية", "الرومانية", "اليونانية"], answer: 0 },
    { question: "ما هو الغرض من العملات الذهبية قديمًا؟", options: ["الزينة", "التجارة", "الديكور"], answer: 1 },
    { question: "أي حضارة اخترعت المجوهرات المرصعة بالأحجار؟", options: ["الهندية", "المصرية", "الصينية"], answer: 1 },
    { question: "ما هو اسم التاج الذهبي الشهير في التاريخ البريطاني؟", options: ["تاج الملكة", "التاج الإمبراطوري", "التاج الملكي"], answer: 1 },
    { question: "ما هو أول معدن استخدم مع الذهب لصنع المجوهرات؟", options: ["النحاس", "الفضة", "البلاتين"], answer: 0 },

];

const gameContainer = document.getElementById('game-container');
const levelText = document.getElementById('level-text');
const scoreText = document.getElementById('score-text');
const feedbackText = document.getElementById('feedback-text');

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsList = document.getElementById('options-list');
    const options = question.options;

    // تحديث السؤال
    questionText.textContent = question.question;

    // تحديث الخيارات
    optionsList.innerHTML = '';
    options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.textContent = option;
        optionBtn.classList.add('option-btn');
        optionBtn.onclick = () => checkAnswer(index);
        optionsList.appendChild(optionBtn);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score += 10; // اجابة صحيحة
        feedbackText.textContent = 'إجابة صحيحة!';
    } else {
        feedbackText.textContent = 'إجابة خاطئة!';
    }

    currentQuestionIndex++;
    if (currentQuestionIndex % questionsPerLevel === 0) {
        level++;
        alert(`تهانينا! وصلت إلى المستوى ${level}`);
    }

    // تحديث المستوى
    levelText.textContent = `المستوى: ${level}`;
    scoreText.textContent = `المجوهرات المجمعة: ${score}`;
    
    // تغيير الخلفية بناءً على المستوى
    gameContainer.className = `level-${level}`;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        feedbackText.textContent = 'لقد أنهيت اللعبة!';
    }
}

loadQuestion();
