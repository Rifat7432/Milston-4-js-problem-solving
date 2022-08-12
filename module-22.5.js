
/*. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে।
 এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। */

function largeName(array){
    let name = array[0];
    for(let i = 1; i < array.length; i++){
        let arrayIndex = array[i] 
        if(name.length < arrayIndex.length){
            name = array[i];
        }
    }
    return name;
}
let arr =['dsfsj' ,'sadf' ,'rewfss' ,'sdfewsf' ,'sdf']
let output = largeName(arr)
console.log(output)

/*. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা।
 এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে।
 এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।*/

function positiveArray(array){
    let output = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] >= 0){
            output.push(array[i])
        }
        else{
            break;
        }
    }
    return output;
}
let arr1 =[32 ,23 ,354 ,46 ,464 ,7878 ,-676 ,456 ,456 ,344 ,4 ,7 ,67 ,676,0]
let output1 = positiveArray(arr1)
console.log(output1)