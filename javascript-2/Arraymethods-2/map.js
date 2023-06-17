//map method
let acdemys=["PSA","DCT","qspider"]
let res=acdemys.map((ele)=>{
    return ele.toLocaleLowerCase()
})
console.log(res) //[ 'psa', 'dct', 'qspider' ]

let acdemys1=["PSA","DCT","qspider"]
let res1=acdemys.map((ele)=>{
    console.log(ele) //PSA  DCT qspider
})

//to find length
let acdemys3=["PSA","DCT","qspider"]
let res3=acdemys.map((ele)=>{
    return ele.length //[ 3, 3, 7 ]
})
console.log(res3)

//add 2 to even no and 3 to odd number
let numbers=[2,3,5,8,11,14]
let res4=numbers.map((ele)=>{
    if(ele % 2==0){
       return ele + 2
       
    }else{
        return ele + 3
    }
})
console.log(res4)

//conditional inside map
let numb=[4,20,30,21,22]
let res5=numb.map((ele)=>{
    if(ele % 2 ===0){
        return ele + 5
    }else{
        return ele
    }
})
console.log(res5) //[ 9, 25, 35, 21, 27 ]
