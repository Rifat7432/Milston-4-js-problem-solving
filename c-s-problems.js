function areaOfCircle(radius){
    const pi = 3.1416;
    let area = pi * (radius ** 2 );
    let areaTo = area.toFixed(2)
    let areaInMeter = areaTo + " m"
    return areaInMeter;
}
let circle = areaOfCircle(5)
console.log(circle)
 function discount(amount){
     let discount = 0;
     switch(true){
         case amount >= 1000 :
             let math1 = 10 / 100;
             discount = amount - (amount * math1)
             break;
         case amount >= 5000 :
             let math2 = 15 / 100;
             discount = amount - (amount * math2)
             break;
         case amount >= 10000 :
             let math3 = 20 / 100;
             discount = amount - (amount * math3)
             break;
        
     }
     return discount;
 }
 let shopping1 = discount(11500)
 console.log(shopping1)

function discount(amount){
    let discount = 0;
    if(amount >= 1000 && amount < 5000 ){
     let math1 = 10 / 100;            discount = amount - (amount * math1)
    }
    else if(amount >= 5000 && amount < 10000 ){
     let math2 = 15 / 100;            discount = amount - (amount * math2)
    }
    else if(amount >= 10000){
     let math2 = 20 / 100;            discount = amount - (amount * math2)
    }
    return discount;
}
let shopping = discount(11500)
 console.log(shopping)