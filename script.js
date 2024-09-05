let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genCompChoice=()=>{

    const options=["rock","paper","scissors"];
    //rock,paper,scissor

   const randomIdx= Math.floor(Math.random()*3);
   return options[randomIdx];





}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game draw";
    msg.style.backgroundColor="black";

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true)
    {
        userScore++;

        userScorePara.innerText=userScore;
        msg.innerText=`you win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
    msg.innerText=`you lose ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";

    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate comp choice

    const compChoice=genCompChoice();

    if(userChoice===compChoice)
        drawGame();
    else {
        let userWin=true;
        if(userChoice==='rock')
        {
            if(compChoice==='paper')
                userWin=false;
            else 
            userWin=false;

        }
        else if(userChoice==='paper')
        {
            if(compChoice==='scissors')
                userWin=false;
            else
            userWin=true;
        }
        else{
            if(compChoice==='rock')
                userWin=false;
            else
            userWin=true;

        }
        showWinner(userWin,userChoice,compChoice);
    }




}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
const userChoice=choice.getAttribute("id");
console.log("choice was clicked",userChoice);
playGame(userChoice);

     })
})