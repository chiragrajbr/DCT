//for each es-6
const fruits=["apple","grapes","mango","papaya"]
fruits.forEach((ele)=>{
    console.log(ele)
})

//find method
const numbers=[10,20,30,50]
let  result=numbers.find((ele)=>{
  return ele>20
})
console.log(result)

//filter
const no=[10,320,356,20]
const results=no.filter((n)=>{
    return n>20
})
console.log(results)

//indexof
const table=[10,20,30]
console.log(table.indexOf(20))

//map -convert elements to upper case
const colors=["pink","red","green"]
colors.map((ele)=>{
    console.log(ele.toUpperCase())
})

//every-checks every condition is true or not and results in boolean
const prices=[20,30,50,60]
prices.every((ele)=>{
    console.log(ele>30)
})

//some-if any one of the condition satisifies it results true
const rate=[30,35,60]
rate.some((no)=>{
    console.log(no>35)
})

//adding in loop
const elemets=[10,20,30]
let total=0
for(let i=0;i<elemets.length;i++){
    total=total+elemets[i]
}
console.log(total)

//reduce
const elemet=[10,20,50]
const res=elemet.reduce((pre,curr)=>{
    return pre+curr
})
console.log(res)



