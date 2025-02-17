let userScore=0;
let compscore=0;

const popup = document.querySelector("#popup");
const playButton = document.querySelector("#playButton");
const PopupText=document.querySelector("#popupText")

const choices=document.querySelectorAll(".choiceButton");
const msg=document.querySelector("#msg");

const userScoreText=document.querySelector("#userScore");
const compScoreText=document.querySelector("#compScore");

const closePopup=()=>{
    popup.style.display = "none";
}

playButton.addEventListener("click", closePopup);

const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game Draw, play again";
    msg.style.backgroundColor="grey";
}

const playAgain=()=>{
    popup.style.display = ""; 
    userScoreText.innerText=0;
    compScoreText.innerText=0;
    msg.innerText=`Play Your Move`;
    msg.style.backgroundColor="";
    playButton.innerText="play again";
    if(userScore===10){
        PopupText.innerText="congratulations!\nYou Won";
        playButton.style.backgroundColor="#5B913B";
    }
    else{
        PopupText.innerText="Unfortunetely!\nComputer Won";
        playButton.style.backgroundColor="#B82132";
    }
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreText.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#5B913B";
        if(userScore===10){
            playAgain();
        }
    }else{
        compscore++;
        compScoreText.innerText=compscore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#B82132";
        if(compscore===10){
            playAgain();
        }
    }
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true; 
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach(((choice)=>{
     choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
}))