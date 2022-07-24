let toControllerBtn;
let page1;
let page2;
let scrollval = 0;

let data = {
    "d1": {
        "title": "מנועים",
        "subtitle": "מורכבים מתחת לפרופלורים",
        "paragraph": "תפקידם להמיר את אנרגיית החשמל לעבודה מכאנית.",
        "paragraph2": ""
    },
    "d2": {
        "title": "פרופלורים",
        "subtitle": "",
        "paragraph": "לפרופלורים חיבור של לבן ושחור. כל זוג פרופלורים מנוגדים (כלומר זוג אחד מסתובב לכיוון מסויים והזוג השני לכיוון השני) כדי ליצור שיווי משקל ברחפן. ניתן לראות על הפרופלור צבע שחור או צבע לבן ועל המנוע המתאים לו גם צבע לבן או שחור.",
        "paragraph2": ""
    },
    "d3": {
        "title": "תאורות LED",
        "subtitle": "מתריעות על כלי טיס באוויר",
        "paragraph": "תאורות LED קדמיות יופיעו בצבע אדום",
        "paragraph2": "תאורות LED אחוריות יופיעו בצבע ירוק"
    },
    "d4": {
        "title": "אנטנות",
        "subtitle": "קליטה ושידור בין הרחפן לשלט",
        "paragraph": "נמצאות ברגליים של הרחפן.",
        "paragraph2": ""
    },
    "d5": {
        "title": "מצלמה וגימבל",
        "subtitle": "הגימבל מקזז את תנועת הרחפן כך שהתמונה במסך תהיה יציבה.",
        "paragraph": "* ישנה גומיה המחברת בין גוף הרחפן לגימבל ולמצלמה",
        "paragraph2": "* כאשר הגימבל ומצלמה בתוך הערכה, קיים גם כיסוי פלסטיק שתפקידו לשמור על המצלמה ועל הגימבל. לא נטיס עם כיסוי זה."
    },
    "d6": {
        "title": "מערכת הימנעות ממכשולים",
        "subtitle": "המערכת מזהה אובייקט מטווח של 2.5 מטר ועוצרת מאובייקט בטווח של 0.5 מטר.",
        "paragraph": "המערכת משתמשת ב8 מצלמות שלא נועדו לצילום- בחלק הקדמי, צדדי, אחורי ותחתון של הרחפן.",
        "paragraph2": ""
    },
    "d7": {
        "title": "תוספות אפשריות",
        "subtitle": "",
        "paragraph": "",
        "paragraph2": ""
    },
    "d8": {
        "title": "סוללה",
        "subtitle": "",
        "paragraph": "זמן ההטענה משתנה מרחפן לרחפן.",
        "paragraph2": "בMavic2 זמן ההטענה לסוללה אחת הוא שעה ועשרים דקות."
    },
    "c1": {
        "title": "אנטנות",
        "subtitle": "קליטה ושידור בין השלט לרחפן.",
        "paragraph": "האנטנות יכוונו ל90 מעלות.",
        "paragraph2": ""
    },
    "c2": {
        "title": "לחצן הפעלה",
        "subtitle": "",
        "paragraph": "לחיצה קצרה מציגה את חיווי הטעינה של השלט.",
        "paragraph2": "לחיצה קצרה + לחיצה ארוכה מיד אחריה מפעילה את השלט."
    },
    "c3": {
        "title": "מוטות / סטיקים שליטה",
        "subtitle": "שולטים ברחפן",
        "paragraph": "סטיק ימני- קדימה,אחורה,ימינה,שמאלה.",
        "paragraph2": "סטיק שמאלי- למעלה, למטה, סיבוב 360 מעלות לשני הכיוונים."
    },
    "c4": {
        "title": "כפתור שחור",
        "subtitle": "",
        "paragraph": "",
        "paragraph2": ""
    },
    "c5": {
        "title": "כפתור אדום",
        "subtitle": "",
        "paragraph": "",
        "paragraph2": ""
    },
    "c6": {
        "title": "לחצן חזרה הביתה",
        "subtitle": "RTH (Return To Home)",
        "paragraph": "כאשר לוחצים על לחצן זה הרחפן חוזר הביתה (אל המקום אשר הגדרנו לו כבית).",
        "paragraph2": ""
    },
    "c7": {
        "title": "צד",
        "subtitle": "",
        "paragraph": "",
        "paragraph2": ""
    },
    "c8": {
        "title": "מחזיק טאבלט",
        "subtitle": "",
        "paragraph": "",
        "paragraph2": ""
    },
    "c9": {
        "title": "מסך",
        "subtitle": "",
        "paragraph": "",
        "paragraph2": ""
    },
    "drown-btn-count": 8,
    "controller-btn-count": 9
};

document.getElementById("page1").addEventListener("scroll", function() {
    window.scrollTo(0, 0)
}, false)

// window.addEventListener("touchstart", function(event) {
//     if (event.target.tagName == "HTML" || event.target.tagName == "BODY") {
//         event.preventDefault();
//     }
// }, false);

window.addEventListener("load", () => {
    toControllerBtn = document.getElementById("next");
    toDrownBtn = document.getElementById("prev");
    page1 = document.getElementById("page1");
    page2 = document.getElementById("page2");


    document.getElementById("btd1").addEventListener("click", function() {
        showCard('d1')
    });
    document.getElementById("btd2").addEventListener("click", function() {
        showCard('d2')
    });
    document.getElementById("btd3").addEventListener("click", function() {
        showCard('d3')
    });
    document.getElementById("btd4").addEventListener("click", function() {
        showCard('d4')
    });
    document.getElementById("btd5").addEventListener("click", function() {
        showCard('d5')
    });
    document.getElementById("btd6").addEventListener("click", function() {
        showCard('d6')
    });
    document.getElementById("btd7").addEventListener("click", function() {
        showCard('d7')
    });
    document.getElementById("btd8").addEventListener("click", function() {
        showCard('d8')
    });
    document.getElementById("btc1").addEventListener("click", function() {
        showCard('c1')
    });
    document.getElementById("btc2").addEventListener("click", function() {
        showCard('c2')
    });
    document.getElementById("btc3").addEventListener("click", function() {
        showCard('c3')
    });
    document.getElementById("btc4").addEventListener("click", function() {
        showCard('c4')
    });
    document.getElementById("btc5").addEventListener("click", function() {
        showCard('c5')
    });
    document.getElementById("btc6").addEventListener("click", function() {
        showCard('c6')
    });
    document.getElementById("btc7").addEventListener("click", function() {
        showCard('c7')
    });
    document.getElementById("btc8").addEventListener("click", function() {
        showCard('c8')
    });
    document.getElementById("btc9").addEventListener("click", function() {
        showCard('c9')
    });

    document.getElementById("x").addEventListener("click", hideCard);

    toDrownBtn.addEventListener("click", moveToDrown);
    toControllerBtn.addEventListener("click", moveToController);

});

window.addEventListener("wheel", (event) => {
    console.log(event.deltaY)
    if (event.deltaY < 0) {
        moveToDrown();
    } else {
        moveToController();
    }
});


const moveToController = () => {
    page2.classList.remove("animsecond-playrev");
    page1.classList.remove("animfirst-playrev");

    page2.classList.add("animsecond-play");
    page1.classList.add("animfirst-play");

    page2.classList.add("page2-shown");
    page2.classList.remove("page2-hidden");

    page1.classList.add("page1-hidden");
    page1.classList.remove("page1-shown");
}

const moveToDrown = () => {
    page2.classList.remove("animsecond-play");
    page1.classList.remove("animfirst-play");


    page2.classList.add("animsecond-playrev");
    page1.classList.add("animfirst-playrev");



    page2.classList.remove("page2-shown");
    page2.classList.add("page2-hidden");

    page1.classList.remove("page1-hidden");
    page1.classList.add("page1-shown");
}


const showCard = (btnNum) => {
    document.getElementById("info-page1").style.display = 'block';
    document.getElementById("info-page1").classList.add("showCard");
    document.getElementById("info-page1-ttl").innerText = data[btnNum].title;
    document.getElementById("info-page1-subttl").innerText = data[btnNum].subtitle;
    document.getElementById("info-page1-para").innerText = data[btnNum].paragraph;
    document.getElementById("info-page1-para2").innerText = data[btnNum].paragraph2;
}

const hideCard = () => {
    document.getElementById("info-page1").style.display = 'none';
    document.getElementById("info-page1").classList.remove("showCard");
}