
//תרגיל 1

const isStudent = true;
const age = 17;
const myName = "Haleli";

const introduction= `My name is ${myName} , I am ${age} years old , student: ${isStudent}`;

console.log(introduction);
console.log(typeof isStudent);
console.log(typeof age);
console.log(typeof myName);

const course = "JavaScript";
let completedExercises;
const isReady = false;
console.log(typeof course); //string  //תודפס המילה סטרינג כי קורס מטיפוס סטרינג   
console.log(typeof completedExercises); //undefined     //  תודפס המילה אנדפיינד מכיוון שהמשתנה קומפליטד אקסרסייז אינו מוגדר 
console.log(typeof isReady); //boolean    //תודפס המילה בוללין כי המשתנה מוגדר מסוג זה 

let completedCount=0;
completedCount=1;
console.log(completedCount);
//לט מתאים יותר מקונסט במקרה זה מכיוון שמשנים את ערך המשתנה קומפליטקאונט מאפס ולאחד ואי אפשר לשנות משתנה המוגדר בקונסט כי הוא קבוע 




//תרגיל 2

const priceText = "120";
const quantityText = "3";
const orderNumber = 5021;

console.log(typeof priceText); //לפני ההמרה 
console.log(typeof quantityText);
console.log(typeof orderNumber);


const numberPrice= Number(priceText);
const numberQuantity=Number(quantityText);

const totalprice=numberPrice*numberQuantity;
console.log(totalprice);

const orderIdText=string(orderNumber);

console.log(typeof numberPrice);//אחרי ההמרה 
console.log(typeof numberQuantity);
console.log(typeof orderIdText);

// const price = "120";// מקור הבאג: המשתנה מחיר הוא מטיפוס מחרוזת ולא מטיפוס מספר ולכן כאשר נחבר את המחיר שלוש פעמים התוצאה לא תיהיה 360 אלא שרשור של שלוש פעמיים המספר 120 בצורה כזו 120120120.כלומר,טוטל יחזיר את המחרוזת 120120120 במקום את תוצאת החיבור 360
// const quantity = 3;
// const total = price + price + price;
// console.log(total);

console.log(Number("8") + 2);///לפי דעתי הפלט בשורה זו יהיה 10 ,כלומר חיבור של שמונה שהמרנו למספר ממחרוזת ושתיים שמוגדר גם הוא כמספר
console.log(String(8) + 2);///לפי דעתי הפלט בשורה זו יהיה 82,כלומר שרשור של הספרה שמונה שהמרנו לסוג מחרוזת מסוג מספר ושתיים המוגדר כמספר




//תרגיל 3

const my_age = 17; //גיל
const has_Permission = true; //אישור
const is_Registration_Open = true; //הרשמה פתוחה
const participant_Id = 24; //מספר משתתף

if((my_age>=18) || (has_Permission===true && is_Registration_Open ===true)){
    console.log("eligible");
}
else{
    console.log("not eligible");
}


if(participant_Id % 2===0){
    console.log("zugi");
}
else{
    console.log("not zugi");
}


// if (isRegistrationOpen = true && participantId == "24") { ///הקוד הנתון
//     console.log("registered");
// }

if (is_Registration_Open === true && participant_Id === 24) { ///הקוד המתוקן
  console.log("registered");
}


const eligible = ((my_age>=18) || (has_Permission===true && is_Registration_Open ===true));
if(is_Registration_Open !== true)
{
    console.log("closed");
}
else if(eligible!==true)
{
    console.log("waiting for approval");
}
else
{
    console.log("registered");
}



//תרגיל 4

// const completed = true; ///קוד נתון
// let status;
// if (completed) {
// status = "Done";
// } else {
// status ="In progress";
// }

const completed = true;
const status= completed ? "Done" : "In progress" ;

const stock = 10;
const stockMessage = stock > 0 ? "In stock" : "Out of stock";

// /סעיף ג : לפי דעתי,הפלט יהיה פרימיום כי לפני התנאי פרייס שווה ל750 לכן התנאי הוא נכון ובמשתנה תגית שמורה המילה פרימיום ,לאחר מכן השורה האחרונה מציגה את מה שיש בתוך המשתנה תוית ,שזה פרימיום

// /סעיף ד : מתאים להשתמש בתנאי טרנרי כאשר התנאי בוחר בין שני ערכים ואנו רוצים לשמור את התוצאה ישר ,ובאיף ואלס מתאים להשתמש כאשר אנחנו רוצים לבצע כמה פעולות בהתאם לתנאי או כאשר יש יותר משתי אפשרויות 


