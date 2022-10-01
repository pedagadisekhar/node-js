let rl=require("readline").createInterface(
    process.stdin,process.stdout
)
rl.question("Please Enter Your Name : ",(data)=>{
    console.log(`Hello ${data}`)
    rl.close();
})