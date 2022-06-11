let usrCounter = 0;
let compCounter = 0;

function compSelection(){
    const num = Math.floor(Math.random() * 3);
    return numToSym(num);
};

/* function usrSelection(){
    const usrChoice = prompt("Rock, Paper or Scissors?");
    if(usrChoice != 'rock' && usrChoice != 'paper' & usrChoice != 'scissors'){
        return "Error"
    };

    return usrChoice.toLowerCase();
}; */

function numToSym(num){
    switch (num){
    case 0:
        return "rock";
        break;
    case 1: 
        return "paper";
        break;
    case 2:
        return "scissors";
        break;
    };
};

function decider(comp, usr){
    if((comp == 'rock' && usr == 'paper') || 
        (comp == 'paper' && usr == 'scissors') ||
        (comp == 'scissors' && usr == 'rock')){
            return "user"
    }else if((comp == 'paper' && usr == 'rock') || 
        (comp == 'scissors' && usr == 'paper') ||
        (comp == 'rock' && usr == 'scissors')){
            return "computer"
    }else if(comp == usr){
        return "Tie"
    }else{
        return "Error"
    }
};


function game(usr){
    comp = compSelection();
    // usr = usrSelection();
    /* 
    if(usr == 'Error'){
        console.log("Wrong Input");
        i--;
        continue;
    }; */

    usrChoiceImg.src = `./Assets/Images/${usr}.png`;
    compChoiceImg.src = `./Assets/Images/${comp}.png`;

    const winner = decider(comp, usr);

    /* if(winner == "Error"){
        console.log("Some Error Occured");
        i--;
        continue;
    }; */

    switch(winner){
        case "user":
            usrCounter++;
            break;
        case "computer":
            compCounter++;
    }

    usrPointsDiv.textContent = `You: ${usrCounter}`;
    compPointsDiv.textContent = `Computer: ${compCounter}`;

    /* let msg;
    if (winner == "Tie"){
        msg = "Its a tie";
    }else if(winner == "user"){
        msg = "You win";
    }else if(winner == "computer"){
        msg = "Computer Wins";
    }else{
        msg = "Some Error Occured";
    }; */

    /* console.log(`You chose ${usr}\n` +
    `Computer chose ${comp}\n`+
    `${msg}`); */

    if(usrCounter == 5 || compCounter == 5){
        buttonContainer.style.display = 'none';
        finalMsg = usrCounter > compCounter ? "You Win!!" : "You Lose :(";
        /* console.log(
            `Points:\n` +
            `User:\t${usrCounter}\n` +
            `Computer:\t${compCounter}\n` +
            `${finalMsg}`
        ); */
        resultDiv.style.display = 'block';
        resultDiv.textContent = `${finalMsg}`;
        buttons.forEach(element => element.removeEventListener('click', buttonClick));
        
    };

    /* let finalMessage;
    if (usrCounter > compCounter){
        finalMessage = "You Win";
    }else if(usrCounter < compCounter){
        finalMessage = "Computer Wins";
    }else if(usrCounter == compCounter){
        finalMessage = "Its a tie!";
    }else{
        finalMessage = "Some error occured";
    };

    console.log(
        `Points:\n` +
        `User:\t${usrCounter}\n` +
        `Computer:\t${compCounter}\n` +
        `${finalMessage}`
    ); */
};

const buttonContainer = document.querySelector(".button_container");
const buttons = Array.from(document.querySelectorAll(".rps_button"));
buttons.forEach(element => {
    element.addEventListener('click', buttonClick);
});

const usrChoiceImg = document.querySelector(".chosen_container .usr_choice img");
const compChoiceImg = document.querySelector(".chosen_container .comp_choice img");

const usrPointsDiv = document.querySelector(".points .usr_points");
const compPointsDiv = document.querySelector(".points .comp_points");

const resultDiv = document.querySelector(".result");

function buttonClick(){
    // console.log(this.innerHTML);
    game((this.querySelector("span").textContent).toLowerCase().trim());
}

// game()