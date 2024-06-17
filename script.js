let input = document.querySelector("#input");
let msg1 = document.querySelector("#msg");
let count_attmpt = document.querySelector("#attmpt_rem");
let button = document.querySelector("#btn1");
let resetbtn = document.querySelector("#reset");
let attempts = 5;
let buttonClick = 1;
let isWin = false;
input.focus();

let secretNo = compNumber();
console.log(`Comp no. ${secretNo}`);

//Generate comp secret number
function compNumber(){
    let number = Math.floor(Math.random() * 101);
    return number;
}

// function isNaNChk(guessNumber){
//     if(isNaN(guessNumber)){
//         console.log("Please Enter correct number");
//         return true;
//     }
// }

function userNumber(){
    let no = input.value;
    let guessNumber = parseInt(no,10);
    input.value = "";
    return guessNumber;
}

function buttonCount(){
    if(buttonClick===5){
        button.disabled=true;
        input.disabled=true;
        console.log("Your attempts has been finished");
        msg1.innerText = "Your attempts has been finished";
    }
    else{
        buttonClick++;
    }
}

let chkAttempt = () =>{
    (isWin === true) ? count_attmpt.innerText = `Attempts Remaining: ${attempts=0}` : count_attmpt.innerText = `Attempts Remaining: ${--attempts}`;
}

let listener = () => {
    let userno = userNumber();
    console.log(userno);
    game(userno);
    buttonCount();
    chkAttempt();
}


if(buttonClick<=5){
    input.addEventListener("keydown",(e)=>{
        if(e.key === 'Enter'){
            listener();
        }
    })
    button.addEventListener("click",()=>{
        input.focus();
        listener();
    });
}

let game = (userno) => {

    if(userno === secretNo){
        console.log("You have guessed the correct number");
        msg1.innerText = "You have guessed the correct number.\nYour attempts has been finished.";
        msg1.style.backgroundColor = "green";
        msg1.style.color = "white";
        isWin = true;
        input.disabled=true;
        button.disabled=true;
    }
    else{
        if(userno<secretNo){
            console.log("Your number is too low");
            msg1.innerText = "Your number is too low";
            msg1.style.backgroundColor = "red";
            msg1.style.color = "white";
        }
        else{
            console.log("Your number is too high");
            msg1.innerText = "Your number is too high";
            msg1.style.backgroundColor = "red";
            msg1.style.color = "white";
        }
    }
}
function funcReset(){
    attempts = 5;
    count_attmpt.innerText = `Attempts Remaining: ${attempts}`;
    buttonClick = 1;
    isWin = false;
    msg1.innerText = "Your game has been reseted";
    msg1.style.backgroundColor = "#F7EF99";
    msg1.style.color = "black";
    let secretNo = compNumber();
    console.log(`Comp no. ${secretNo}`);
    input.disabled = false;
    button.disabled= false;
    input.focus();
}


resetbtn.addEventListener("click",()=>{
    funcReset();
});

// button.addEventListener("click",()=>{
//     if(buttonClick<=5){
//         // buttonClick++;
//         let userno = userNumber();
//         document.getElementById("input").value = "";
//         console.log(userno);
//         game(userno);
//         buttonCount();
//         chkAttempt();
//     }
//     // else{
//     //     input.disabled=true;
//     //     console.log("Your attempts has been finished");
//     //     msg1.innerText = "Your attempts has been finished";
//     //     button.disabled=true;
//     // }
// });
