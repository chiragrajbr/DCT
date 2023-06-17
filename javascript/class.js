//inheritance
class employee{
    constructor(id,name,email){
        this.id=id
        this.name=name
        this.email=email
    }
}

class peremp extends employee{
    constructor(id,name,email,type){
        super(id,name,email)
        this.type=type
    }
}
let user1=new employee(1,"chirag","chirag@gamil.com")
console.log(user1)

let user2=new peremp(2,"muni","muni@gmail.com","permanent")
console.log(user2)