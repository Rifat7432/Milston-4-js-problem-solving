/******************inch to feet******************************/

 function inch_to_feet(inch){
     let feet1 = inch / 12;
     let feet = feet1.toFixed(2)
     return feet;
 }

 let inches = inch_to_feet(98);
 console.log(inches)
/******************mile to km*******************/ 

 function mile_to_km(mile){
     let km1 = mile * 1.60934;
     let km = km1.toFixed(4)
     return km;
 }
 let miles = mile_to_km(8);
 console.log(miles)
/******************The number is Even or odd*******************/ 


 function odd_even(number){

   var num =parseInt(number);
     if(num % 2 === 0 && num > 0 ){
       
         var result = "The number is Even" ;
     }
      else if(num % 2 === 1){
         var result = "The number is ODD"

      }
      else{
         var result = "The number is Zero"

      }
      return result;

 }
 var myNumber = odd_even(2);
 console.log(myNumber)
/******************hour to minute*******************/ 


 function hour_to_minute(hour){
     let minutes = hour * 60;
     return minutes;
 }
 let myMinute = hour_to_minute(36);
 console.log(myMinute)
/******************it is a leap year or not*******************/ 


 function is_leap_year(arr){
     for(let i = 0; i < arr.length; i++){
     
         if(arr[i] % 4 === 0){
             console.log("it is a leap year")
         }
         else{
             console.log("it is not a leap year")

         }
     }
   
 }
     let year = [2023,2024,2025,2028,2030];
   is_leap_year(year)
   
/******************sum of array*******************/ 


 function odd_sum(arr){
     let sum = 0;
     for(let i = 0; i < arr.length; i++){
         if(arr[i] % 2 === 1){
             sum += arr[i]
         }
     }
     return sum;
 }
 let myArr1 = [345 ,34 ,67 ,56 ,765 ,54 ,79 ,11]
 let sum1 = odd_sum(myArr1)
 console.log(sum1)
/******************sum of array odd number*******************/ 

 function odd_sum(arr){
     let sum = 0;
     for(let i = 0; i < arr.length; i++){
         if(arr[i] % 2 === 0){
             sum += arr[i]
         }
     }
     return sum;
 }
 let myArr = [345 ,34 ,67 ,56 ,765 ,54 ,79 ,11]
 let sum = odd_sum(myArr)
 console.log(sum)
/******************it is a leap year or not*******************/ 


function is_it_leap_year(arr){
for(let i = 0; i <arr.length; i++){
    let result = "";
    if(arr[i] % 4 === 0){
        result = "it is a leap year"
    }
    else{
        result = "it is not a leap year"
    }
    console.log(result)
}
}
 let output = [2023 ,2024 ,2025 , 2030];
is_it_leap_year(output)
/******************factorial*******************/ 


function factorial(number){
    let math = 1;
    for(var i = 1; i <= number; i++){
       math *= i

    }
    return math;
 }
 let myNumber1 = factorial(10)
 console.log(myNumber1)
/******************* celsius to fahrenheit*******************/

function fahrenheit(celsius){
    let math = 9 / 5;
    let math1 = celsius * math ;
    let fahrenheit = math1 + 32;
    return fahrenheit ;
}
let temp = fahrenheit(30)
console.log(temp)

/******************* fahrenheit to celsius *******************/

function celsius(fahrenheit){
    let math = 5/ 9;
    let math1 = fahrenheit - 32 ;
    let celsius = math1 * math;
    return celsius ;
}
let temp1 = celsius(98.6)
console.log(temp1)

/******************* kelvin to celsius*******************/


function kelvin_to_celsius(kelvin){
    let celsius = kelvin - 273.15 ;
    return celsius ;
}
let temp2 = kelvin_to_celsius(286)
console.log(temp2)

/******************* celsius to kelvin*******************/


function celsius_to_kelvin(celsius){
    let kelvin = celsius + 273.15 ;
   
    return kelvin ; 
}
let temp3 = celsius_to_kelvin(86)
console.log(temp3)

/******************* kelvin to fahrenheit *******************/

function kelvin_t0_fahrenheit(kelvin){
    let math = kelvin - 273.15;
    let math1 = 9 / 5;
    let math3 = math * math1;
    let fahrenheit = math3 + 32;
    return fahrenheit;
}
let temp4 = kelvin_t0_fahrenheit(286)
console.log(temp4)

/******************* fahrenheit to kelvin*******************/

function fahrenheit_to_kelvin(fahrenheit){

    let math = fahrenheit - 32;
    let math1 = 5 / 9;
    let math3 = math * math1;
    let kelvin = math3 + 273.15;
    return kelvin;
}
let temp5 = fahrenheit_to_kelvin(86)
console.log(temp5)

/*************************** simple interest *******************/

/*************************** finalAmount *******************/

function Final_Amount(principalAmount,interestRate,timeYear){
    let math = interestRate * timeYear;
    let math1 = 1 + math;
    let finalAmount = principalAmount * math1;
    return finalAmount;
}
let money = Final_Amount(30000,0.5,5)
console.log(money)

/*************************** interestAmount *******************/

function Interest_Amount(principalAmount,interestRate,timeYear){
    let math = interestRate * timeYear;
    let math1 = 1 + math;
    let finalAmount = principalAmount * math1;
    let interestAmount = finalAmount - principalAmount;
    return interestAmount;
}
let money1 = Interest_Amount(30000,0.5,5)
console.log(money1)

/***********************complex interest Final Amount *************************/

function complexFinalAmount(principle, rate, time) {
    let amount = principle * (1 + rate) ** time;
    return amount;
 }
 let money2 = complexFinalAmount(30000,0.5,5)
 console.log(money2)

/***********************complex interest Amount *************************/

function Complex_Interest_Amount(principalAmount,interestRate,timeYear){
    let finalAmount = principalAmount * (1 + interestRate) ** timeYear;
    let interestAmount = finalAmount - principalAmount;
    return interestAmount;

}
let money3 = Complex_Interest_Amount(30000,0.5,5)
console.log(money3)


