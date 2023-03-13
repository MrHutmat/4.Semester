const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Invalid choice, try again!')
    }
}; 


const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Its a tie!';
    }

    if (userChoice === 'bomb') {
        return 'You bombed the bot and won!'
    }
    
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The Computer has won!';
        } else {
            return 'You win!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The Computer has won!';
        } else {
            return 'You win!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The Computer has won!';
        } else {
            return 'You win!';
        }
    }
};

const playGame = () =>  {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();