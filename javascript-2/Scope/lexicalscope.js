//lexical scope-variable declared outside a fun can be accessed inside another function
const str1="outside function"
function greet(){
    const str2="inside function"
    if(true){
        const str3="inside block"
        console.log(str3)
    }
    console.log(str2)
    function hello(){
        console.log("global inside another fun",str1)
        console.log("fun inside another fun",str2)
    }
    hello()
}
greet()