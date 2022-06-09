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

    let msg;
    if (winner == "Tie"){
        msg = "Its a tie";
    }else if(winner == "user"){
        msg = "You win";
    }else if(winner == "computer"){
        msg = "Computer Wins";
    }else{
        msg = "Some Error Occured";
    };

    console.log(`You chose ${usr}\n` +
    `Computer chose ${comp}\n`+
    `${msg}`);

    if(usrCounter == 5 || compCounter == 5){
        finalMsg = usrCounter > compCounter ? "You Win!" : "You Lose";
        console.log(
            `Points:\n` +
            `User:\t${usrCounter}\n` +
            `Computer:\t${compCounter}\n` +
            `${finalMsg}`
        );
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

const buttons = Array.from(document.querySelectorAll(".rps_button"));
buttons.forEach(element => {
    element.addEventListener('click', buttonClick);
});

function buttonClick(){
    // console.log(this.innerHTML);
    game((this.innerHTML).toLowerCase());
    
}

// game()