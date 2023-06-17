//find the number of string occurance in given string
function occ(str){
    let result={}
    for(const char of str){
        if(result.hasOwnProperty(char)){
            result[char]+=1
        }else{
            result[char]=1
        }
    }
    return result
}
console.log(occ("dctdcmn")) //{ d: 2, c: 2, t: 1, m: 1, n: 1 }