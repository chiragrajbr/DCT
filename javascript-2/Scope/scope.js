//scope
//we can invoke variable of global scope inside a function
//but we cant invoke variable outside its own function
const str1="outside function"

function greet(){
    const str2="inside a function"
    console.log(str2)
    console.log(str1)
}
greet()
//console.log(str1)