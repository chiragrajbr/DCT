//synchronous
console.log("print1")
console.log("print2")
console.log("print3")
console.log("print4")
//asynchronous
setTimeout(()=>{
    console.log("user 6")
},[5000])

setTimeout(()=>{
    console.log("user 7")
},[1000])

setTimeout(()=>{
    console.log("user 8")
},[3000])

