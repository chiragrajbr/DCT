//reduce method
let no=[10,20,30,40]
let res=no.reduce((privios,current)=>{
    return privios+current
},0)
console.log(res)

//without intial value
let no1=[10,20,30]
let res1=no.reduce((privios,current)=>{
    return privios+current
})
console.log(res1)