
const numbers=[10,10,20,30,50,42,42]
for(let i=0;i<numbers.length;i++){
   for (let j=i+1;j<numbers.length;j++){
    if(numbers[i]===numbers[j]){
   console.log(numbers[j])
    }
   }
}

//date
const date=new Date
console.log(date.toDateString())

//time
const time=new Date
console.log(time.toLocaleTimeString())

//time
const timing=new Date
let hour=timing.getHours()
let min=timing.getMinutes()
console.log(`${hour}hour : ${min}minutes`)

//set time interval
 //setInterval(() => {
  //  console.log(date.toLocaleTimeString())
//}, [1000]);

//duplicate
let a=[10,20,30,10,20]
let b=new Set(a)
let c=[]
for(let i=0;i<a.length;i++){
   if(b.has (a[i])){
      b.delete(a[i])
   }else{
      c.push(a[i])
   }
}
console.log(c)

//arry sorting
let d=[10,20,30,50,20]
console.log(d.sort())
//reduce
let e=[10,30,50]
let f=e.reduce((privious,current)=>{
   return privious+current
})
console.log(f)

//sort without inbuilt method

//star
for(let i=1;i<=9;i=i+2){
   console.log("*".repeat(i))
}
for(let i=7;i>=1;i=i-2){
   console.log("*".repeat(i))
}
