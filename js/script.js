//id targets on html
var userInput = document.querySelector('#userInput');
var submitBtn = document.querySelector('#submitBtn');
var playerNumber = document.querySelector('#playerNumber');
var rivalNumber = document.querySelector('#rivalNumber');
var aIresponse = document.querySelector('#aIresponse');

var randomNumber = Math.floor(Math.random() * 11);
// console.log(randomNumber);

// aIresponse.textContent = 'hello?';

if(userInput && submitBtn && playerNumber && rivalNumber && aIresponse){

    //button event listener
    submitBtn.addEventListener('click',button);



      //button function event
      function button(){

        // userInput
        var userNum = userInput.value;
        //notification text if below perameters are not met
        playerNumber.textContent = '* ' + userNum + ' is not a number between 1-10... try again.';


        //if the perameters are met you may continue with the program
        if(userNum <= 10 && userNum >= 0 && userNum != ' '){
          //response
          playerNumber.textContent = 'You guessed ' + userNum + '!';
          submitBtn.removeEventListener('click',button);

          //if pass the security measures you may be judged by the computer
          if(randomNumber == userNum){
              aIresponse.textContent = 'You GUESSED CORRECT!!! You win. Refresh the page to try again';
          } else if(randomNumber != userNum) {
              aIresponse.textContent = 'You guessed wrong..the number was ' + randomNumber + ' Refresh the page to try again';
          }
        }//end of if statement
  } //end of function
}// if variables are on the page
