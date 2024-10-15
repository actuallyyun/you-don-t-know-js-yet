// array destructuring 

var buttonNames=new Map()
btn1="btn1"
btn2="btn2"

buttonNames.set(btn1,"Button 1")
buttonNames.set(btn2,"Button 2")

// destructuring map: break down each entry into key/value pairs 
for(let [btn,btnName] of buttonNames){
   
        console.log(`key:${btn}, value: ${btnName}`)
    
}

// destucturing array entries
var arr=[10,20,30]

for(let [idx, val] of arr.entries()){
    console.log(`[${idx}]:${val}`)
}
// arrayes are objects with indexs as keys 
// keys, values and entries are all iterables.

for(let v of arr.keys()){
    console.log(v)
}
