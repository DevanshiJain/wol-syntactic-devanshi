let currentInput = '';

const hash = document.querySelector(".hash");
const include = document.querySelector(".include");
const less = document.querySelector(".less");
const stdio = document.querySelector(".stdio");
const dot = document.querySelector(".dot");
const h = document.querySelector(".h");
const great = document.querySelector(".great");
const edit = document.querySelector(".edit");
const check = document.querySelector(".check");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result");

const updateScreen=(st)=>{
    edit.value=st;
}

const inputButton = (st) =>{
    if(currentInput===''){
        currentInput = st;
    }else{
        currentInput += st;
    }   
}

const closeBtn = (value) => {
    switch(value){
        case "include":include.style.display = "none";
            break;
        case "#":hash.style.display = "none";
            break;
        case "<":less.style.display = "none";
            break;
        case ">":great.style.display = "none";
            break;
        case "stdio":stdio.style.display = "none";
            break;
        case ".":dot.style.display = "none";
            break;
        case "h":h.style.display = "none";
            break;
        default:
            return;
    }
};

clear.addEventListener("click",()=>{
    edit.value="";
})

check.addEventListener("click",()=>{
    result.style.display = "block";
    if(edit.value==="#include<stdio.h>"){
        result.value="Correct answer! Keep it up";
    }
    else{
        console.log(edit.value);
        result.value = "Wrong answer! Try again ";
    }
})

hash.addEventListener("click",(event)=>{
    inputButton(event.target.value)
    updateScreen(currentInput);
    closeBtn(event.target.value);
})
great.addEventListener("click",(event)=>{
    inputButton(event.target.value)
    updateScreen(currentInput);
    closeBtn(event.target.value);
})
less.addEventListener("click",(event)=>{
    inputButton(event.target.value)
    updateScreen(currentInput);
    closeBtn(event.target.value);
})
include.addEventListener("click",(event)=>{
    inputButton(event.target.value)
    updateScreen(currentInput);
    closeBtn(event.target.value);
})
stdio.addEventListener("click",(event)=>{
    inputButton(event.target.value)
    updateScreen(currentInput);
    closeBtn(event.target.value);
})
dot.addEventListener("click",(event)=>{
    inputButton(event.target.value)
    updateScreen(currentInput);
    closeBtn(event.target.value);
})
h.addEventListener("click",(event)=>{
    inputButton(event.target.value)
    updateScreen(currentInput);
    closeBtn(event.target.value);
})

