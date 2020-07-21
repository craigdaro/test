function getSomethingFactory(){
    let counter = 0
   return async function getSomething({timer, string}, name){
   
       let k = await printIt({timer: timer, string: string}, name)
       let l = await printIt({timer: timer, string: string}, name)
   
           return {c: counter++, name}
        
    }
   
}

function printIt({timer, string}, name){
   console.log("Print it wird ausgeführt: " + name)
   let sign = string
   setTimeout(((sign)=>{
       console.log(string)

   }).bind(this, sign), timer)
}

const directPrint = (x) =>{
   console.log(x.name + ": " + x.c);
}


const getST = getSomethingFactory()
const s2 = getST({timer: 2000, string: "hi"}, "s2")
const s1 = getST({timer: 2000, string: "hello"}, "s1")


s2.then(directPrint)

s1.then(x =>{
   console.log(x.name + ": " + x.c)
} )
s2.then(directPrint)


s1.then(directPrint)



