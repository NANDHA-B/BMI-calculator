var weight =document.querySelector("#weight-kgs");
var height =document.querySelector("#height-cms");
var submitBtn =document.querySelector("#submit-btn");
var outputBox =document.querySelector("#output-box");

submitBtn.addEventListener("click",sumbithandler)
function sumbithandler(){
    var weig= Number(weight.value)
    var heig= Number(height.value)
    bmicalulation(weig,heig)
}
function bmicalulation(we,he){
    var metre= he/100
    var op= we/(metre*metre)
    showoutput(`your BMI value is ${op}`)
    var current = document.querySelector(".changedClass")
    if(current != null) current.className='default'

    if(op<18.5){
        document.getElementById("uw").className='changedClass';}
    else if(op>18.49 && op<25){
        document.getElementById("norm").className='changedClass';
    }
    else if(op>24.99 && op<30){
        document.getElementById("ow").className='changedClass';
    }
    else if(op>29.99){
        document.getElementById("obs").className='changedClass';
    }
}

function showoutput(message){
    outputBox.innerHTML=message
}