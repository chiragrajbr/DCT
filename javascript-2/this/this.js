//this keyword
function f1(){
 const  user={
    name:"chirag",
    city:"banglore",
    method:function(){
        console.log(`${this.name} ${this.city}`)
    }
   }
   user.method()
}
f1()