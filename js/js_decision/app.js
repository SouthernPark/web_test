const passwrod = prompt("Please enter your password");
//password must be >
if (passwrod.length >= 6) {
    console.log("long enough password");
}
else {
    console.log("must be 6 + chars");
}
