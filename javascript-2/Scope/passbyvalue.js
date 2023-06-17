//pass by value
const number=2
function changeno(number){
    console.log(number)
}
changeno(number)


console.log("////////////////////")
//pass by value that doest affect global scope
const no=2
function changeno1(no){
    no+=4
    console.log(no)
}
changeno1(no)
console.log(no)