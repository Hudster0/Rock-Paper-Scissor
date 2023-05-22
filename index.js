//Player One

let randomNumber1 = Math.floor(Math.random() * 3) + 1;  //1-3

let randomDiceImage = 'rps' + randomNumber1 + ".png";  //rps1.png - rps3.png

let randomImageSource = "images/" + randomDiceImage;  //images/rps1.png - images/rps3.png

let image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomImageSource);

//Player Two

let randomNumber2 = Math.floor(Math.random() * 3) + 1;

let randomImageSource2 = "images/rps" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Determine the winner, by Bing AI
/*Bing Explanation of Nested IF/Else Statement:  "I think I found the problem. You are using the > operator to compare the random numbers, 
which means that the higher number wins. But in rock-paper-scissors, rock beats scissors even though 1 is less than 3. 
You need to use a different logic to determine the winner. For example, you can use a nested if-else statement like this:" */
if (randomNumber1 === 1) { //rock
    if (randomNumber2 === 1) { //rock
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber2 === 2) { //paper
        document.querySelector("h1").innerHTML = "Player Two Wins!";
    } else if (randomNumber2 === 3) { //scissors
        document.querySelector("h1").innerHTML = "Player One Wins!" ;
    }
} else if (randomNumber1 === 2) { //paper
    if (randomNumber2 === 1) { //rock
        document.querySelector("h1").innerHTML = "Player One Wins!";
    } else if (randomNumber2 === 2) { //paper
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber2 === 3) { //scissors
        document.querySelector("h1").innerHTML = "Player Two Wins!";
    }
} else if (randomNumber1 === 3) { //scissors
    if (randomNumber2 === 1) { //rock
        document.querySelector("h1").innerHTML = "Player Two Wins!";
    } else if (randomNumber2 === 2) { //paper
        document.querySelector("h1").innerHTML = "Player One Wins!";
    } else if (randomNumber2 === 3) { //scissors
        document.querySelector("h1").innerHTML = "Draw!";
    }
}




//Solution1 by Me:(Fail)
/*
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player One Wins!";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML ="Player Two Wins!";
}
else if (randomNumber2=randomNumber1){
    document.querySelector("h1").innerHTML="Draw!";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}
*/


//Solution 2 by Me:(Fail)
/*
 //Specifying the Winner

 if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player One Wins!";
 }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML ="Player Two Wins!";
    }
        else {
            document.querySelector("h1").innerHTML="Draw!";
        }
 */

//Solution 1 by Bing AI: (Fail)
//Specifying the Winner
/*let difference = randomNumber1 - randomNumber2;

if (difference % 3 === 1) {
     document.querySelector("h1").innerHTML = "Player One Wins!"; 
    } 

else if (difference % 3 === 2) { 
    document.querySelector("h1").innerHTML ="Player Two Wins!"; 
} 

else { document.querySelector("h1").innerHTML="Draw!"; 
}
   */

