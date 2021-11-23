function  checkUsername(){
    var username = el.value;
    if (username.lenght < 5 ){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enought, yet... ';
    }else {
        elMsg.textContent = '';
    }
}

function tipUsername() {
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be at least 5 character';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus',tipUsername,false);
el.addEventListener('blur',checkUsername,false);