const freq = (str) => {
    obj = {}
    for(i=0; i<str.length; ++i){
        if(obj.hasOwnProperty(str.charAt(i))){
            obj[str.charAt(i)] ++
        }
        else{
            obj[str.charAt(i)] = 1
        }
    }
    return obj
}


obj = freq("Good Morning or Good Night")
console.log(`Total number of independent characters is ${Object.keys(obj).length}`)

// Bonus
console.log("Character Frequency is as follows:")
console.log(obj)