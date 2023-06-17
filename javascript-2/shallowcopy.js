//copying object values
//shallow copy--certain values still connected to original variables
let person={
    name:"chirag"
}
 
let student=person
console.log(student.name)

//assigning for another
student.name="chirag raj br"
console.log(person.name)