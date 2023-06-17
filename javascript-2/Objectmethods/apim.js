//access property inside method
let person={
    name:"rahul",
    city:"banglore",
    code:function(){
        return person.name+" is coding"
    }
}
console.log(person.code()) //rahul is coding

//using this key word
let person1={
    name:"chirag",
    city:"marathalli banglore",
    code:function(){
        return this.name+" is coding"
    }
}
console.log(person1.code()) //chirag is coding

//creating person details method
const person2={
    name:"chirag",
    city:"marathalli banglore",
    details:function(){
        return `${this.name} is staying in ${this.city}`
    }
}
console.log(person2.details())