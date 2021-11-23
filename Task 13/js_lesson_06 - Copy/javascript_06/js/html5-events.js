function  setup(){
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContenLoaded',setup,false);

window.addEventListener('beforeunload',function (ebvent){
    var message = 'You have changes that have not been saved ';
    (ebvent || window.event).returnValue = message;
    return message;
});