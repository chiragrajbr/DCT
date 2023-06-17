
//promise
/*
function user(){
    return new Promise((resolve,reject)=>{
        try{
       10>5? resolve(console.log("true")):reject(console.log("false"))
        }catch(err){
            console.log(err)
        }
    })
}
user()
*/
function user1(){
    return new Promise((resolve,reject)=>{
        10>5? resolve():reject()
    }).then(()=>{
        console.log("then block")
    })
                        .catch(()=>{
                            console.log("catch block")
                        })
}
user1()