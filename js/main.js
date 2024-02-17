// רשימה של המערכות
const jsonData = {
    "cloudList": [
        {
            "id": 1,
            "title": "שבירת קרח",
            "content": "בקש מהמשתתפים ליצור ענן מילים באמצעות שמות תואר או ביטויים קצרים המתארים את עצמם. זו יכולה להיות דרך מהנה עבור אנשים להציג את עצמם במסגרת קבוצתית.",
            "img": "iceBreak.png",
            
        },
        {
            "id": 2,
            "title": "ניתוח ספר או סרט",
            "content": "לאחר קריאת ספר או צפייה בסרט, צור ענן מילים עם המילים או הנושאים הנפוצים ביותר. זה יכול לעזור לנתח את הנושאים המרכזיים או נושאי הדיון.",
            "img": "analyze.png",
            
        },
        {
            "id": 3,
            "title": "סיור מוחות צוותי",
            "content": "השתמש בענן מילים לסיעור מוחות לפרויקט או למפגש פתרון בעיות. המשתתפים יכולים להזין את הרעיונות שלהם, וההצעות הנפוצות ביותר יופיעו בגדול יותר בענן המילים.",
            "img": "barinStorm.png",
            
        },
        {
            "id": 4,
            "title": "בניית אוצר מילים",
            "content": "בהקשר של לימוד שפה, צור ענני מילים של מילים אוצר מילים מקובצות לפי נושא או רמת קושי. זה יכול לעזור ללומדים לדמיין ולזכור מילים חדשות בצורה יעילה יותר.",
            "img": "vocabulary (1).png",
            
        },
        {
            "id": 5,
            "title": "תכנון אירוע",
            "content": "בעת תכנון אירוע, השתמש בענן מילים כדי לאסוף רעיונות לפעילויות, נושאים או היבטים חשובים שיש לקחת בחשבון. זה יכול לעזור לתעדף ולארגן משימות.",
            "img": "event.png",
           
        },
        {
            "id": 6,
            "title": "ניתוח משוב",
            "content": "אסוף משוב מקבוצה או תשובות לסקר וצור ענן מילים כדי לדמיין את נושאי המשוב הנפוצים ביותר. זה יכול לעזור לזהות אזורים לשיפור או מיקוד.",
            "img": "analyzeFeedback.png",
            
        },
        {
            "id": 7,
            "title": "כתיבת יומן רפלקטיבי",
            "content": "בקש מהאנשים ליצור ענני מילים על סמך רשומות היומן הרפלקטיביות שלהם. זה יכול להדגיש מחשבות או רגשות חוזרים ולקדם מודעות עצמית.",
            "img": "writingJournal.png",
            
        },
        {
            "id": 8,
            "title": "ניתוח היסטורי",
            "content": "נתח מסמכים או נאומים היסטוריים על ידי יצירת ענני מילים של ביטויי מפתח או מונחים. זה יכול לספק תובנות לגבי הרעיונות או המסרים העיקריים המועברים.",
            "img": "historicAnalyze.png",
            
        },

        {
            "id": 9,
            "title": "קמפיינים שיווקים",
            "content": "נתחו את האפקטיביות של מסעות פרסום שיווקיים על ידי יצירת ענני מילים של משוב מלקוחות או אזכורים במדיה החברתית. זה יכול לעזור לזהות סנטימנטים חיוביים ושליליים ואזורים לשיפור.",
            "img": "campain.png",
           
        },
        {
            "id": 10,
            "title": "הגדרת יעדים אישיים",
            "content": "צור ענן מילים של מטרות אישיות או שאיפות לעתיד. ראייה חזותית של יעדים אלה יכולה לספק מוטיבציה ובהירות בתחומים שבהם יש להתמקד.",
            "img": "personalAchievment.png",
            
           
            
        },
    ]
}

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    // קריאה לפונקציה שתיצור את הרשימה אחרי עליית העמוד
    createItems()
    
});

// פונקציה ליצירת הרשימה
function createItems() {
    // הבאת האלמנט בו ניצור את הרשימה בדף
    const itemsContainer = document.getElementById('itemsContainer');
    // איפוס של האלמנט
    itemsContainer.innerHTML = "";
    // יצירת תגית של רשימה
    const list = document.createElement("ul");
    // השמת מזהה לתגית
    list.setAttribute("id", "topics-list");
    // הוספת מחלקה
    list.setAttribute("class", "flex-container-subjects");

    // מעבר על הרשימה מעלה והוספה של פריט לרשימה בדף בכל סיבוב
    jsonData.cloudList.forEach(generator => {
        // יצירה של תגית הפריט
        const listItem = document.createElement("li");
        // הוספת מזהה לתגית
        listItem.setAttribute("id", `li_${generator.id}`);
        // הוספת מחלקה
        listItem.setAttribute("class", "flex-container-subjects");
    

        // יצירת הטקסט של הפריט
        const listItemTitle = document.createTextNode(`${generator.title}`)
        // הוספת הטקסט לפריט
        listItem.appendChild(listItemTitle);
        // הוספת הפריט לרשימה
        list.appendChild(listItem);
        // יצירת התמונה
        const myImg = document.createElement("img");
        myImg.setAttribute("src", `images/${generator.img}`);
        listItem.appendChild(myImg);

       

        
    // הוספת אירועים
        // מעבר עכבר
        listItem.addEventListener("mouseover", hoverTopic);
        // יציאת עכבר
        listItem.addEventListener("mouseout", outTopic);
        // לחיצה
        listItem.addEventListener("click", clickTopic);

    });
    // הוספת הרשימה לאלמנט בדף
    itemsContainer.appendChild(list);
   
}

// פונקציית מעבר עכבר
function hoverTopic(e) {
 

    const currentId = e.target.id;

    document.getElementById(currentId).classList.add("hoverEffecr");

    
}

// פונקציית יציאת עכבר
function outTopic() {
    // נעבור על כלל האלמנטים ברשימה מעלה ונסיר מהאלמנטים שמציגים אותם את המחלקה
    jsonData.cloudList.forEach(generator => {
        // נפנה לאלמנט בדף לפי המזהה ונסיר ממנו את המחלקה
        document.getElementById(`li_${generator.id}`).classList.remove("hoverEffecr");
    });
}




// פונקציית לחיצה
function clickTopic(e) {
    // נמצא את המזהה של הפריט עליו לחצנו
    const currentId = e.target.id.split("_")[1];
    // נמצא את הפריט ברשימה מעלה ונשמור את התוכן והקישור שלו
    const content = jsonData.cloudList.find(g => g.id == currentId).content;
    
    
    // נזריק את התוכן והקישור במקומות המתאימים בדף - שימו לב לתגיות בדף
    document.querySelector("#chosenItem p").innerHTML = content;
    
    // נציג את התגיות שבדף בפופ-אפ
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  document.addEventListener("DOMContentLoaded", function (Event) {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");

  
    // Insert dots into the DOM
    items.forEach((_, index) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });
  
    let dots = document.querySelectorAll(".dot");
  
    // Function to show a specific item
    function showItem(index) {
      items.forEach((item, idx) => {
        item.classList.remove("active");
        dots[idx].classList.remove("active");
        if (idx === index) {
          item.classList.add("active");
          dots[idx].classList.add("active");
        }
      });
    }
  
    // Event listeners for buttons
    document.querySelector(".btn.prev").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index - 1 + items.length) % items.length);
    });
  
    document.querySelector(".btn.next").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index + 1) % items.length);
    });
  
    // Event listeners for dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        let index = parseInt(dot.dataset.index);
        showItem(index);
      });
    });
  });


  
  
