/*let a=[10,20,30]
let count=0
for(let i=0;i<a.length;i++){
    count=count+a[i]
}
console.log(count)

//duplicate
let b=[10,20,10,30,25,25]
let c=new Set(b)
let d=[]
for(let i=0;i<b.length;i++){
    if(c.has(b[i])){
        c.delete(b[i])
    }else{
        d.push(b[i])
    }
}
console.log(d)
//object
let users={
    name:"chirag",
    age:20
}
for(ele in users){
    console.log(ele,users[ele])
}
//swap
const o=[10,20,30]
let n1=o[0]
let n2=o[1]
let n3=o[2]
let empty=[]
empty.push(n3,n2,n1)
// console.log(empty)*/
// //swap function
// function swap(a){
// let b=a
// let x=b[0]
// let y=b[1]

// let z=[]
// z.push(x)
// z.push(y)
// for(let i=0;i<b.length;i++){
//     z.push(b[i])
// }
// }
// console.log(z)
// swap([10,20])

function Swap(a){
let b=[]
b.push(a[1])
b.push(a[0])
 console.log(b)
}
Swap([10,20])