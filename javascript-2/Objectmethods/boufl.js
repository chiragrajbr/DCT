//build object using for loop
//convert array of strings into an object
function obj(arr){
    const result={}
    for(let i=0;i<arr.length;i++){
       result [arr[i]] =arr[i].length
    }
    return result
}
console.log(obj(["apple","mango","kiwi"])) //{ apple: 5, mango: 5, kiwi: 4 }
//using foreach
function obj1(arrr){
 const res={}
 arrr.forEach((ele)=>{
    res [ele]=ele.length
 })
 return res
}
console.log(obj1(["mango","grapes","banana","papaya"]))