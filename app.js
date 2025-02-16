let userScore=0;
let compscore=0;

const choices=document.querySelectorAll("button");
const msg=document.querySelector("#msg");

const userScoreText=document.querySelector("#userScore");
const compScoreText=document.querySelector("#compScore");

const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game Draw, play again";
    msg.style.backgroundColor="grey";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreText.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#5B913B";
    }else{
        compscore++;
        compScoreText.innerText=compscore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#B82132";
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