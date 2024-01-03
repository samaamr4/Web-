let arr_ofusers = []

function signup() {
    var name = document.getElementById('user').value;
    var passw = document.getElementById('pass').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var names, passws, ages, phones;
    names = passws = ages = phones = false;
    var regexx = /^(?=.*[!@#$%^&*_-])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{1,8}$/
    if (name == '' || passw == '' || age == '' || phone == '') {

        alert("Enter Empthy Field Please")
    }
    if (!arr_ofusers.find(x => x.user == name)) {
        if (name.length >= 5 && name.length < 20) {
            names = true;
        }
    } else { alert("Ensure the name please") }

    if (age > 18 && age < 60) {
        ages = true;
    } else { alert("Ensure the age please") }
    if (phone.length == 11) {
        phones = true;
    } else { alert("Ensure the age phone") }
    if (regexx.test(passw)) {
        passws = true;
    } else { alert("Ensure the age pass") }
    /* for (let i = 0; i < allgender.length; i++) {
        if (allgender[i].checked) {
            gender = allgender[i].checked.value;
            allgen = true;
        } else {
            alert("Check The gender please")
        }
    }*/
    if (names && ages && passws && phone) {
        alert("Signed Up Sucess");
        var obj = { user: name, agee: age, phonee: phone, pass: passw }
        arr_ofusers.push(obj);
        console.log(arr_ofusers)
    } else {
        alert("Ensure the data please")
    }
}

function login() {
    var names = document.getElementById('username').value;
    var password = document.getElementById('passes').value;
    for (i = 0; i < arr_ofusers.length; i++) {
        if (arr_ofusers[i].user == names && arr_ofusers[i].pass == password) {
            alert("Signed in Sucessfully");
            location.href = 'reviewpage.html'
        } else if (arr_ofusers[i].user != names && arr_ofusers[i].pass != password) {
            alert("Ensure The Data Please")
        }
    }
}

function forgetpass() {
    var names = document.getElementById('usernames').value;
    var regexx = /^(?=.*[!@#$%^&*_-])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,20}$/;
    var passw = document.getElementById('npass').value;
    for (i = 0; i < arr_ofusers.length; i++) {
        if (arr_ofusers[i].user == names) {
            arr_ofusers[i].pass = passw;
            alert("Updated  Sucessfully");
            console.log(arr_ofusers[i].pass)
            location.href = '#signin'

        } else(alert("Ensure The Data Please"))
    }
}

function navigate() {
    location.href = 'Validation.html'
}

function tessst() {
    var allradioes = document.getElementsByClassName('rr');
    var yescount = 0;
    var nocount = 0;
    var idx = 0;
    for (i = 0; i < allradioes.length; i++) {
        if (allradioes[i].checked && allradioes[i].value == 'yes') {
            yescount++;
            console.log(yescount)
        } else if (allradioes[i].checked && allradioes[i].value == 'no') {
            nocount++;
            console.log(nocount)
        }
        idx = i

    }

    if (!allradioes[idx].checked) {
        alert("Enter")
    }
    /*for (i = 0; i < allradioes.length; i++) {
        if (allradioes[i].checked && allradioes[i].value == 'no') {
            nocount++;
            console.log(nocount)
        }
        i
    }*/
    alert("Yes ; " + yescount + "  No : " + nocount);
    location.href = 'index.html'
}