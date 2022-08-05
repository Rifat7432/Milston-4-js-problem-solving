
function make_avg(arr){
    var sum = 0;
    for(var i = 0; i<arr.length;i++){

        
        sum += arr[i]
    }
    var avg = sum / arr.length
    return avg;
}
var totalResult =[90 ,85 ,88 ,67 ,91 ,79]
var printResult = make_avg(totalResult)
console.log(printResult)


 function make_avg1(number1 ,number2 ,number3){
    var sum1 = number1 + number2 + number3;
    var avg1 = sum1 / 3;
    return avg1;

}

var avarege = make_avg1(20 ,30 ,10)
console.log(avarege)


 function odd_even(number){

    var num = parseInt(number);
    if(num % 2 === 0 && num > 0 ){
        var result = "The number is Even"
    }
     else if(num % 2 === 1){
        var result = "The number is ODD"

     }
     else{
        var result = "The number is Zero"

     }
     return result;

}
var myNumber = odd_even(1);
console.log(myNumber)

 function foo(){
     console.log('foo')
     bar();
 }
 function bar(){
     console.log('bar')
 }
 foo();
