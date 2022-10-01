function greetings(inputName){
   let ab = "hello"
    return( ab+" "+inputName)
}
const Name = process.env.USERNAME
console.log(greetings(Name))