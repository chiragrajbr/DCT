//bind 
const person={fn:"chirag",ln:"raj br"}
function greet(msg){
    console.log(`${msg} ${this.fn}`)
}
const newgreet=greet.bind(person,["hello"])
newgreet()