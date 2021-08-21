var fs = require('fs')
const {
    createHash,
  } = require('crypto');
  
const regx = /\n/g 
const regx_o = /o|O/g
const regx_l = /l|L|i|I/g
const regx_e = /e|E/g
const regx_0 = /0/g
const regx_1 = /1/g
const regx_3 = /3/g

let dictionary 
fs.readFile("./common.txt","utf8" , function(err,data){
    if(err){
        console.log(err)
    }else{
        var times = 100000;
       // console.log(data)
       
        let dataregx = data.split(regx)
        let rainbow_table = null
      //  console.time('Hash_function')
       // function Hash_function(){
        dataregx.map(function(item){

        let hashSha1 = createHash('sha1');
       // let hashMD5 = createHash('md5');
        let target = item.replace(regx_o,0)
        target = target.replace(regx_l,1)
        target = target.replace(regx_e,3)
        let target0 = item
      //  console.log(target0 , target) //check sub

       // let ori_dic = hashSha1.update(item).digest("hex")
     //   let sub1_dic = hashSha1.update(target).digest("hex")
      
       
       // if(sha1 === "d54cc1fe76f5186380a0939d2fc1723c44e8a5f7" || md5 === "d54cc1fe76f5186380a0939d2fc1723c44e8a5f7"){

       // }
       // console.log( target , ':' , sha1 )  
        dictionary1 = target0 + '\n' + target
        //console.log(dictionary1)
        console.log(dictionary1)
        target2 = hashSha1.update(dictionary1).digest("hex")
       // console.log(target2,  target2)
        });
    }
  
       // console.timeEnd('Hash_function')
        //console.log(rainbow_table)
       
     
    

    

});


