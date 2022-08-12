  function tallest(height){
      let tallest = height[0];
    for(let i = 0; i < height.length; i++){
      if(tallest <= height[i]){
          tallest = height[i]
      }
  }
  return tallest;
  }
 
  let heights = [35, 34, 78, 69, 86, 669, 99, 100, 120]
 let output = tallest(heights)
 console.log(output)
  function reverse(input){
   let rev = [];
   for(let i = input.length - 1;i>=0;i--){
     rev.push(input[i])
   }
   console.log(rev)
  }
  let heights1 = [35, 34, 78, 69, 86, 669, 99, 100, 120]
  reverse(heights1)


  function stringReverse(input){
      let word = input.split(" ");
    let reverse = [];
      for(let i = word.length-1; i >= 0; i--){
          reverse.push(word[i])
      }
      let result = reverse.join(" ")
      return result;
  }

  let heights2 = "my name is rifat. i ma a good boy";
  let tallestOne2 = stringReverse(heights2)
  console.log(tallestOne2)

  // 0,1,1,2,3,5,8,12,21,34,55,89,144

 function fibo(n){
   let fibo = [];
   for(let i = 0; i <= n; i++){
     if(i === 0){
       fibo[i] = i;
     }
     else if(i === 1){
       fibo[i] = i;
     }
     else{
       fibo[i] = fibo[i - 1] + fibo[i - 2]
     }
   }
   console.log(fibo)
 }
 fibo(13)

function scendLargeNumber(arr){
  let LargeNumber = arr[0];
  let scendLargeNumber = 0;
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > LargeNumber){
      scendLargeNumber = LargeNumber;
      LargeNumber = arr[i];
    }
    else if(arr[i] < LargeNumber && arr[i] > scendLargeNumber){
      scendLargeNumber = arr[i]
    }
  }
  return scendLargeNumber;
}let heights3 = [35, 34, 78, 69, 86, 669, 99, 100, 120]
 let output3 = scendLargeNumber(heights3)
console.log(output3)





