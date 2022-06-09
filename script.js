function compSelection(){
    const num = Math.floor(Math.random() * 3);
    return numToSym(num);
};

function usrSelection(){
    const usrChoice = (prompt("Rock, Paper or Scissors?")).toLowerCase();
    if(usrChoice != 'rock' && usrChoice != 'paper' & usrChoice != 'scissors'){
        return "Error"
    };

    return usrChoice;
};

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

let usrCounter = 0;
let compCounter = 0;

function game(){
    for(let i = 0; i < 5; i++){
        comp = compSelection();
        usr = usrSelection();
        
        if(usr == 'Error'){
            console.log("Wrong Input");
            i--;
            continue;
        };

        const winner = decider(comp, usr);

        if(winner == "Error"){
            console.log("Some Error Occured");
            i--;
            continue;
        };

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
        }

        console.log(`You chose ${usr}\n` +
        `Computer chose ${comp}\n`+
        `${msg}`);

    };

    let finalMessage;
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
    );
};

game()