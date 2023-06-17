//for each
let fruits=["apple","grapes","kiwi"]
fruits.forEach((ele)=>{
    console.log(ele)
    console.log(`${ele} has ${ele.length} characters`)//for length
})
//find index in for each
let fruits1=["apple","grapes","kiwi"]
fruits1.forEach((ele,i)=>{
    console.log(ele +" in index " +i)
})