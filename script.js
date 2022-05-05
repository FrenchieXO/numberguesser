let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:

const generateTarget = () => 
Math.floor(Math.random() * 10)


const compareGuesses = (currentHumanGuess, computerGuess, target) => {
const humanGap = Math.abs(target - currentHumanGuess)
const computerGap = Math.abs(target - computerGuess)
if (humanGap <= computerGap) {
  return true
} else {
  return false
}

}

const updateScore = winner => {
  if(winner === 'human') {
    return humanScore = humanScore + 1
  } else {
    return computerScore = computerScore + 1
  }
}


const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
}