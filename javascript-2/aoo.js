//array of objects
let fruits=["apple","mango","grapes"]
let res=fruits.map((ele)=>{
    return {[ele]:ele.length}
})
console.log(res) //[ { apple: 5 }, { mango: 5 }, { grapes: 6 } ]