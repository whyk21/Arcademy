function username(nilai, pesan) {
    var alphaExp = /^[a-zA-Z]+$/;
    if(nilai.value.match(alphaExp)) {
        return false;
    }
    else {
    alert(pesan);
    nilai.focus();
    return true;
    }
}

function password(nilai, pesan) {
    var pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (nilai.value.match(password)) {
        return true;
    }
    else{
    alert(pesan);
    nilai.focus();
    return false;
    }
}

function validasi() {
    username(document.getElementById(username),'username terdiri dari huruf kecil dan angka');
    password(document.getElementById(username),'password terdiri dari huruf kecil dan angka');
}
<body>
        <h2>Form login dengan Validasi JavaScript</h2>
        <form>
            <p>username :
            <input type="username" name="username" id="username"></p>
            <p>password :
            <input type="password" name="password" id="password"></p>
            <p><input type="submit" onclick="validasi()" value="Submit"></p>
        </form>
    </body>