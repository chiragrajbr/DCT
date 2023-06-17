//count vowels in given string
//for string iteration using for of method
function vowel(str){
    const result={a:0,e:0,i:0,o:0,u:0}
    str=str.toLowerCase()
    for(const char of str){
        if(result.hasOwnProperty(char)){
            result[char]=result[char]+1
        }
    }
    return result
}
console.log(vowel("javascript")) //{ a: 2, e: 0, i: 1, o: 0, u: 0 }