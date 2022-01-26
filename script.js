const choices = ["Lapis", "Papyrus", "Scalpellus"];


function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function compareChoices(playersChoice) {
  //invoke computerChooses function so it can be applied to this function.
  const computerChoice = getRandomChoice();
  if (computerChoice === playersChoice) {
    showResult("Tie! The computer and player both chose " + computerChoice);
  } else if (computerChoice === choices[0]) {
      if (playersChoice === choices[1]) {
        showResult("The player wins! The player chose " + playersChoice + " and the computer chose " + computerChoice);
      }
      else {
        showResult("The player wins! The player chose " + playersChoice + " and the computer chose " + computerChoice);
      }
    } else if (computerChoice === choices[1]) {
      if (playersChoice === choices[2]) {
        showResult("The player wins! The player chose " + playersChoice + " and the computer chose " + computerChoice);
      } else {
         showResult("The player wins! The player chose " + playersChoice + " and the computer chose " + computerChoice);
      } 
    } else if (computerChoice === choices[2]) {
      if (playersChoice === choices[0]) {
        showResult("The player wins! The player chose " + playersChoice + " and the computer chose " + computerChoice);
      } else {
         showResult("The player wins! The player chose " + playersChoice + " and the computer chose " + computerChoice);
      }
    }
}

function showResult(result) {
  const resultText = document.getElementById('result');
  resultText.innerText = result;
  document.body.appendChild(resultText);
}

//function name should be verb (present)
//e.target is the target element (it has an id)
function onButtonClick(e) {
  playersChoice = e.target.id;
  compareChoices(playersChoice);
}

document.getElementById('lapis').addEventListener('click', onButtonClick);
document.getElementById('papyrus').addEventListener('click', onButtonClick);
document.getElementById('scalpellus').addEventListener('click', onButtonClick);



//Original attempt
//if (computer.Choice === player.Choice) {
//  console.log("Tie! The computer and player both chose " + computer.currentChoice");
//  } else if (computer.CurrentChoice === choices[0] && player.Choice === choices[1]) {
//    console.log(player.Choice + " beats " + computer.Choice + " . Player wins!");
//  } else if (computer.Choice === choices[1] && player.Choice === choices[2]) {
//    console.log(player.Choice + " beats " + computer.hoice " . Player wins!");
//  } else if (computer.Choice === choices[2] && player.Choice === choices[0]) {
//    console.log(player.Choice + " beats " + computer.hoice " . Player wins!")
//  } else {
//    console.log("Computer wins!");
//}