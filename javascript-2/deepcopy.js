//deep copy of array method 1
let a=[10]
let c=a.slice(0)
console.log(a)
console.log(c)
a.push(20) //it make changes only in a,and do not distrub c
console.log(a)
console.log(c)
console.log("*************")
//method 2 by conact
let d=[10]
let e=[].concat(d)
console.log(d)
console.log(e)
d.push(20)
console.log(d)
console.log(e)

//method 3 spread operator
let f=[...d]

//deep copy of objects method 1 object assign
let person={
    name:"chirag"
}
let student=Object.assign({},person)
console.log(person)
console.log(student)

//change
person.name="chirag raj br"
console.log(person)
console.log(student)
console.log("//////")
//method 2 spread operator 
 student={...person}
 console.log(student)
 person.state="karnataka"
 console.log(person)
 console.log(student)