//function call--arguments passed by comma
const person={fn:"chirag",ln:"raj br"}
function greet(msg){
    console.log(`${msg} ${this.fn}`)
}
greet.call(person,"hii")