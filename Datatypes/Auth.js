const passwords=['dct','psa','qspider']
 function authen(arr,pass) {
    auth=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]===pass){
           auth=true
           break
        }
    }
    if(auth){
        return "authenticated"
    }else{
        return "not authenticated"
    }
}
console.log(authen(passwords,'dct'))