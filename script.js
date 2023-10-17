'use strict';





// document.querySelector('.message').textContent = "My way or sky way!!"

// // In the case of input tag to chnage the value of the input field use .value method
// document.querySelector('.guess').value = 44;

// const value =
//   document.querySelector('.guess').value;
// console.log(value);


// ============ Game starts ===//

// adding events to the buttons...


const secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 5;
let highScore = 0;

//  user defined Functions..

const sendMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

const sendNumber = function (number) {
  document.querySelector('.number').textContent = number;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When the input is empty...

  if (!guess) {
    // document.querySelector('.message').textContent = "⛔ No Number."
    sendMessage("⛔ No Number.")
  }

  // when the your guess it correct.... 
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = "🎉 You win the game!"
    sendMessage("🎉 You win the game!");

    // document.querySelector('.number').textContent = secretNumber;
    sendNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  }

  // refactring the code here...
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ?
      //   '📈 to High!!' : '📉 to Low!!';
      sendMessage(guess > secretNumber ?
        '📈 to High!!' : '📉 to Low!!');
      score--;
      document.querySelector('.score').textContent =
        score;
    } else {
      // document.querySelector('.message').textContent =
      //   '🎇 You lost the Game!'
      sendMessage('🎇 You lost the Game!');
      document.querySelector('.score').textContent = 0;

    }

  }

  // When the guess to high..
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '📈 to High!!'
  //     score--;
  //     document.querySelector('.score').textContent =
  //       score;

  //   } else {
  //     document.querySelector('.message').textContent =
  //       '🎇 You lost the Game!'
  //     document.querySelector('.score').textContent = 0;

  //   }
  // }

  // // When the guess to low..
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '📉 to Low!!'
  //     score--;
  //     document.querySelector('.score').textContent =
  //       score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '🎇 You lost the Game!'
  //     document.querySelector('.score').textContent = 0;

  //   }
  // }

})

// Implementation of 'Again' button //
document.querySelector('.again').addEventListener('click', function () {
  // changes in the box..
  // document.querySelector('.number').textContent = '?'
  sendNumber('?')
  document.querySelector('.number').style.width = '15rem'
  //  reset the background...
  document.querySelector('body').style.backgroundColor = '#222'
  // reset the guessing part , input part and , score part..
  score = 5;
  // document.querySelector('.message').textContent = 'Start guessing...';
  sendMessage('Start guessing...')
  document.querySelector('.score').textContent = 5;
  document.querySelector('.guess').value = '';
})




















