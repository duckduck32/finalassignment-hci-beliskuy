let uname = document.getElementById('uname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');
var gender_male = document.getElementById('gender_male');
var gender_female = document.getElementById('gender_female');
var checkbox = document.getElementById('checkbox');

function registrationValidation(){
    //username harus lebih panjang dari 3 karakter
    if(uname.value.length < 3){
        alert('Username must be longer than 3 characters');
        return false;
    }
    // berdasarkan fungsi di bawah
    else if(testEmailAddress(email.value) == false){
        alert('Please enter a valid email address')
        return false;
    }
    // berdasarkan fungsi di bawah
    else if(alphanumericPassword(password.value) == false){
        alert('Please enter a password that contains numbers and letters');
        return false;
    }
    // kalau confirm password dgn password ga cocok, muncul alert
    else if(confirm_password.value != password.value){
        alert('Wrong password confirmation');
        return false;
    }
    // kalau ga ada yg di check, muncul alert
    else if(!gender_male.checked && !gender_female.checked){
        alert('Please select a gender');
        return false;
    }
    // kalau checkbox ga di check, muncul alert
    else if(!checkbox.checked){
        alert('Please agree to the terms and conditions');
        return false;
    }
return true;
}


function testEmailAddress(email) {
    // cari simbol @
    var simbol_at = email.indexOf("@");
    if(simbol_at < 1) {
        return false;
    }

    // cari karakter titik 
    var titik = email.indexOf(".");
    if(titik <= atSymbol + 2){
        return false;
    } 

    // cek titik ga di akhir
    if (titik === email.length - 1){
        return false;
    } 

    return true;
}

function alphanumericPassword(password){
    // atur flags
    var isAlpha = false;
    var isNumber = false;

    for(let i=0; i<password.length; i++){
        // kalau karakter ke-i bukan angka, set flag karakter true
        if(isNaN(password[i])){
            isAlpha = true;
        }
        // selain itu, karakter ke-i seharusnya sebuah angka, set flag angka true
        else{
            isNumber = true;
        }
        // kalau keduanya sudah true, return true
        if(isNumber && isAlpha == true){
            return true;
        }
    }
    return false;
}