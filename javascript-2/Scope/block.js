//block scope 
//inside condition - inside function
function greet(){
    const str1="inside function"  //function scope
    if(true){
        const str2="inside block" //block scope
        console.log(str2)
       // console.log(str1) we can access fun scope inside block scope
    }
    console.log(str1)
}
greet()