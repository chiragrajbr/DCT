let multiple=(a,b)=>{
    return a*b
}
console.log(multiple(10,20))

//find using fatarrow
const users=[{id:1,name:"chirag"},{id:2,name:"muni"}]
const res=users.find((user)=>{
    return user.id==1
})
console.log(res)

//fatarrow filter
const items=[{id:1,prdt:"scale",price:20},{id:2,prdt:"pencil",price:30},{id:3,prdt:"erasier",price:5}]
const ok=items.filter((it)=>{
    return it.price>10
})
console.log(ok)

//fatarrow array
const pdt=[{id:1,prdt:"scale",price:20},{id:2,prdt:"pencil",price:30},{id:3,prdt:"erasier",price:5}]
const hi=pdt.map((e)=>{
    return e.prdt
})
console.log(hi)