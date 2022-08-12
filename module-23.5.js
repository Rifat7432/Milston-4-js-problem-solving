function sum(i){
    if(i == 100){
        return 100;
    }
    return i + sum(i-1);
}
let j = sum(1)
console.log(j)