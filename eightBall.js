function askMagicEightBall(){

  let userName = document.getElementById("userName").value || "Anonymous";
  let userQuestion = document.getElementById("userQuestion").value;

  if (!userQuestion) {
    alert("Please enter a question before asking the Magic Eight Ball.");
    return; // Stop execution if no question is provided
  }


let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber){
  case 0:
  eightBall = "It is certain";
  break;
  case 1:
  eightBall = "It is decidedly so";
  break;
  case 2:
  eightBall = "Reply hazy try again";
  break;
  case 3:
  eightBall = "Cannot predict now";
  break;
  case 4:
  eightBall = "Do not count on it";
  break;
  case 5:
  eightBall = "My sources say no";
  break;
  case 6:
  eightBall = "Outlook not good";
  break;
  case 7:
  eightBall = "Signs point to yes";
  break;

}
document.getElementById("result").innerText = `${userName}, you asked: ${userQuestion}\nMagic Eight Ball says: ${eightBall}`;
}