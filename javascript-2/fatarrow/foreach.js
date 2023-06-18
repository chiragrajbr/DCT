//foreach using fatarrow
const person=[{id:1,name:"chirag"},{id:2,name:"chirag raj"},{id:3,name:"chirag raj br"}]
person.forEach((ele)=>{
    console.log(`${ele.id}-${ele.name}`)
})
//find method
const persons=[{id:1,name:"chirag"},{id:2,name:"chirag raj"},{id:3,name:"chirag raj br"}]
const res=persons.find((user)=>{
    return user.id==2
})
console.log(res)//if id not found it returns undefined

//filter
const products=[{id:1,name:"scale",price:20},{id:2,name:"pencil",price:30},{id:3,name:"rubber",price:45}]
const res1=products.filter((pro)=>{
    return pro.price>25
})
console.log(res1)
//map
const employees=[{id:1,name:"user1"},{id:2,name:"user2"},{id:3,name:"user3"}]
const res3=employees.map(ele => ele) 

console.log(res3)