//find method - returns the value if the array element satisifies the condition
let numbers=[10,20,30,40]
let result=numbers.find((ele)=>{
    return ele>25
})
console.log(result)
//find the first even number that is greater then 20
let price=[10,20,22,24]
let ans=price.find((ele)=>{
    return ele>20 && ele %2===0
})
console.log(ans)
//find element based on property
let employess=[{id:1,name:"chirag"},{id:2,name:"dev"}]
let res=employess.find((ele)=>{
    return ele.id === 2
})
console.log(res)