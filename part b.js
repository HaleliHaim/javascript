
///תרגיל 5

const calculateOrderTotal = (unitPrice , quantity) => (unitPrice*quantity);


let orderTotal = calculateOrderTotal(35,4);
console.log(orderTotal);


orderTotal = calculateOrderTotal(60,10);
console.log(orderTotal);

orderTotal = calculateOrderTotal(15,7);
console.log(orderTotal);


function calculateOrderTotal(unitPrice, quantity) { ////הקוד הנתון
console.log(unitPrice * quantity);
}
let result = calculateOrderTotal(20, 3);
console.log(result);


const calculateOrderTotal = (unitPrice, quantity) => unitPrice * quantity; //הקוד המתוקן 
result = calculateOrderTotal(20, 3);
console.log(result);




////תרגיל 6

const getLetterGrade = grade => {

    if(grade>100 || grade<0)
    {
        return "grade Invalid";
    }
    else if(grade>=90)
    {
        return 'A';
    }
    else if(grade>=80)
    {
        return 'B';
    }
    if(grade>=70)
    {
        return 'C';
    }
    if(grade>=60)
    {
        return 'D';
    }
    else
    {
        return 'F';
    }

}


console.log(getLetterGrade(95));
console.log(getLetterGrade(83));
console.log(getLetterGrade(70));
console.log(getLetterGrade(48));
console.log(getLetterGrade(101));




////תרגיל 7

function greet(name) { /////קוד נתון
return `Hello, ${name}`;
}
function calculateFinalPrice(price, discountPercent) {
const discount = price * discountPercent / 100;
const finalPrice = price - discount;
return finalPrice;
}

const greet = (name) => {return `Hello, ${name}`};

const calculateFinalPrice = (price, discountPercent) => {
    const discount = (price * discountPercent) / 100;
    const finalPrice = price - discount;
    return finalPrice;
};

const greetPelet= greet("haleli");
console.log(greetpelet);

const totalPricePelet=calculateFinalPrice(500,15);
console.log(totalPricePelet);

const greet = name => `Hello, ${name}`;  ///אפשר לכתוב בכתיבה מקוצרת של רק שורה אחת את הפונקצייה גריט מכיוון שהיא מבצעת רק פעולה אחת




////תרגיל 8

const calculatePrice = (price1, price2) => {
if (price1 < price2){
    return (price1*0.5) + price2;
}
else{
    return (price2*0.5) + price1;
}
};

const isExpensive = price => (price > 500);

// const square = number => { ///הקוד הנתון 
// number * number;
// };

const square = number => number * number; ///הקוד המתוקן


console.log(calculatePrice(50,80));
console.log(calculatePrice(20,12));

console.log(isExpensive(700));
console.log(isExpensive(350));

console.log(square(8));
console.log(square(2));




////תרגיל 9

const product = {
id: 1,
name: "Laptop",
price: 999,
inStock: true
};


const getProductSummary = product => `${product.name} - ${product.price} NIS`;

const getAvailability = product => product.inStock ? "Available" : "Unavailable";

const summary = getProductSummary(product);
const availability = getAvailability(product);

console.log(summary);      
console.log(availability);

////סעיף ד : עדיף לעשות את זה כדי שנוכל להשתמש בפונקציה עוד פעםעם משתנים אחרים,כלומר שהיא לא תיהיה תלויה באובייקט מסוייים