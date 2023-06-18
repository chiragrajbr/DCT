//apply method--arguments passed as array
const person={fn:"chirag",ln:"raj br"}
function greet(msg){
    console.log(`${msg} ${this.fn}`)
}
greet.apply(person,["hii"])