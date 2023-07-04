function otpGenerate() {
    let otpshow = document.getElementById("otp");
    let digits = '0123456789';
    let otp = '';
    // generate Otp Loop
    for (let i = 0; i < 4; i++){
        otp += digits[Math.floor(Math.random() * 10)];

    }

    otpshow.innerHTML = " ";
    setTimeout(() => {
        otpshow.innerHTML = otp;
    },1000)


}