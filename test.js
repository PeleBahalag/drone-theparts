// Total amount of questions, needs to be changed if the amount of question changes
let questionAmount = 10;
// Questions json data
let questions = {
    "1": {
        "q": 'מהי המהירות המקסימלית של הרחפן?',
        "a1": '72',
        "a2": '60',
        "a3": '18',
        "a4": '65',
        "correct": 'a4',
        "chosen": ''
    },
    "2": {
        "q": 'מהו תפקיד הברומטר?',
        "a1": 'מודד את המהירות הרוח',
        "a2": 'מודד את הגובה של הרחפן מנקודת ההמראה',
        "a3": 'מודד מרחק מעצמים עד 13 מ׳ באוויר',
        "a4": 'מפיץ אור ב-5 מטר בהמראה ובנחיתה',
        "correct": 'a2',
        "chosen": ''
    },
    "3": {
        "q": 'מהם מרחקי הבטיחות במערכת הימנעות ממכשולים?',
        "a1": '0.5 מתריאה, 2.5 עוצר לפני האובייקט',
        "a2": '0.5 מתריאה, 2.0 עוצר לפני האובייקט',
        "a3": '2.5 מתריאה, 0.5 עוצר לפני האובייקט',
        "a4": '2.5 מתריאה, 1.5 עוצר לפני האובייקט',
        "correct": 'a3',
        "chosen": ''
    },
    "4": {
        "q": 'מהו תפקידו של הגימבל?',
        "a1": 'לייצב ולקזז את תנועות המצלמה',
        "a2": 'להחזיק את המצלמה',
        "a3": 'למדוד את הגובה מהנק׳ שהרחפן המריא ממנה',
        "a4": 'לשמור על המצלמה מלהשבר',
        "correct": 'a1',
        "chosen": ''
    },
    "5": {
        "q": 'מה ההבדלים בין המצבים של נורת החיווי ברחפן?',
        "a1": 'אדום- תקין, צהוב- סוללה נמוכה, ירוק- באוויר',
        "a2": 'אדום- סוללה נמוכה, צהוב- תקלה, ירוק- באוויר',
        "a3": 'אדום- נחיתה, צהוב- תקלה, ירוק- באוויר',
        "a4": 'אדום-סוללה נמוכה, צהוב- תקלה, ירוק-באוויר',
        "correct": 'a4',
        "chosen": ''
    },
    "6": {
        "q": 'באיזה זווית אנטנות השלט צריכות להיות?',
        "a1": '45 מעלות',
        "a2": '180 מעלות',
        "a3": '90 מעלות',
        "a4": '75 מעלות',
        "correct": 'a3',
        "chosen": ''
    },
    "7": {
        "q": 'מה המהירות של המצב S ברחפן?',
        "a1": '50 קמ״ש',
        "a2": '72 קמ״ש',
        "a3": '65 קמ״ש',
        "a4": '18 קמ״ש',
        "correct": 'a2',
        "chosen": ''
    },
    "8": {
        "q": 'באיזה מצב נטיס את הרחפן?',
        "a1": 'PGPS',
        "a2": 'PATTI',
        "a3": 'POPTI',
        "a4": 'מצב T',
        "correct": 'a1',
        "chosen": ''
    },
    "9": {
        "q": 'מה בודקים בפרופלורים?',
        "a1": 'שחור שחור, לבן ללבן באלכסון',
        "a2": 'לא סדוק, שבור',
        "a3": 'מחוברים כמו שצריך לרחפן',
        "a4": 'כל התשובות נכונות',
        "correct": 'a4',
        "chosen": ''
    },
    "10": {
        "q": 'מה תפקיד כפתורי C1 וC2?',
        "a1": 'לחצני חזרה הביתה',
        "a2": 'לחצני הפסקת טיסה',
        "a3": 'לחצני קיצור דרך',
        "a4": 'לחצן להחלפת מצבים של הרחפן',
        "correct": 'a4',
        "chosen": ''
    },
}

let currentQuestion;
let currentQuestionNumber = 1;
let questionNumbers;
let questionTitle;



window.addEventListener('load', () => {
    startTest();
    document.getElementById('lomda').addEventListener('click', () => {
        window.location.href = ("./index.html");
    });
});

const startTest = () => {
    questionTitle = document.getElementById('question');
    questionNumbers = document.getElementsByClassName('qc');

    // Set up the first question
    questionTitle.innerText = questions[currentQuestionNumber].q;


    // Set up the other questions
    currentQuestion = questionNumbers[0];
    for (let i = 0; i < questionNumbers.length; i++) {
        questionNumbers[i].addEventListener('click', () => {
            document.getElementById('questionCount').innerText = `${i+1}/${questionAmount}`;
            currentQuestionNumber = i + 1;
            chooseQuestion(event);
        });
    }
}

const chooseQuestion = (event) => {
    currentQuestion.classList.remove('current');
    event.currentTarget.classList.add('current');
    currentQuestion = event.currentTarget;

    // Change title and questions
    console.log(currentQuestionNumber);
    questionTitle.innerText = questions[currentQuestionNumber].q;
    document.getElementById('ans1').innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a1}`;
    document.getElementById('ans2').innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a2}`;
    document.getElementById('ans3').innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a3}`;
    document.getElementById('ans4').innerHTML = `<span class="pick"> ▫ </span>${questions[currentQuestionNumber].a4}`;
}