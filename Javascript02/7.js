const digits='0123456789'
let generateOtp=()=>{
    let otp=""
    let i=0
    while (i<4) {
        otp+=digits[Math.floor(Math.random()*10)]
        i++
    }
    return otp
}

console.log(`Here is your otp: ${generateOtp()}`);