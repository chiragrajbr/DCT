//pass by reference- if we make any changes in fun ,it changes globally
let person={name:"chirag",city:"mandya"}
function per(person){
    person.city="sakkare nagara" //made changes in function,that changes globally
    console.log(person)
}
per(person)
console.log(person) //{ name: 'chirag', city: 'sakkare nagara' }