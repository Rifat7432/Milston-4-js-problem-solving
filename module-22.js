

// function search(arr,data){
//     if(arr.includes(data) === true){
//         return data;
//     }
//     else{
//         return 'data is not found'
//     }
// }

// let heights = [35, 34, 78, 69, 86, 669, 99, 100, 120]

// let output =search(heights,69)

// console.log(output)

function unCommonDates(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(result.includes(array[i]) === false){
            result.push(array[i])
        }
    }
    return result;
}
let heights3 = [35, 34, 78, 69, 86, 669, 99, 100, 120, 34, 35, 120, 669]
let output2 =unCommonDates(heights3)
console.log(output2)

function fooBarBoth(number){
    let finalResult = [];
    for(let i = 1; i <= number; i++){
        let result = i;
        if(i % 3 === 0){
            result = 'foo'
        }
      else if(i % 5 === 0){
            result = 'bar'
        }
      else if(i % 5 === 0 && i % 3 === 0){
            result = 'both'
        }
        finalResult.push(result)
    }
    return finalResult;
}
console.log(fooBarBoth(60))

function woodCalculate(chaer,table,bed){
    let chaerWood = 3;
    let tableWood = 6;
    let bedWood = 12;
    let chaerTotalWood = chaer * chaerWood;
    let tableTotalWood = table * tableWood;
    let bedTotalWood = bed * bedWood;
    let total = chaerTotalWood + tableTotalWood + bedTotalWood;
    return total;
}
console.log(woodCalculate(5,2,1))

let prices = [
    {price : 430,name : 'GP'},
    {price : 350,name : 'Bl'},
    {price : 320,name : 'RB'},
    {price : 333,name : 'A'},
    {price : 393,name : 'TT'},
]
function large(arrOfObject){
let check = arrOfObject[0]
for(let i = 0; i < arrOfObject.length;i++){
    let sim = arrOfObject[i]
    if(sim.price > check.price){
        check = sim
    }
}
return check;
}
let arr = large(prices)
console.log(arr)


function sumArrayObject(array){
    let sum = 0;
    let i = 0;
    while(i < array.length){
        let obj = array[i]
        sum += obj.price
        i++;
    }
    return sum;
}
let array = sumArrayObject(prices)
console.log(array)

function ticketDiscount(ticketAmount){
    let sum = 0;
    let ticketPrise100 = 100;
    let ticketPriseFor200 = 90;
    let ticketPriseFor201 = 80;
 if(ticketAmount <= 100){
     sum = ticketAmount * ticketPrise100;
    }
 else if(ticketAmount <= 200){
    let temp = ticketPrise100 *  100;
    let temp2 = ticketPriseFor200 * (ticketAmount - 100);
    sum = temp + temp2;
    }
 else if(ticketAmount > 200){
    let temp = ticketPrise100 *  100;
    let temp2 = ticketPriseFor200 * 100;
     let temp3 = ticketPriseFor201 * (ticketAmount - 200);
    sum = temp + temp2 + temp3;
    }
    console.log(sum)
}
ticketDiscount(280)




















