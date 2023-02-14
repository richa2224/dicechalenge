var randomNumber1=Math.floor(Math.random()*6)+1;//1to6
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNumber1+".png";//dice1.png
var randomImage2="dice"+randomNumber2+".png";
var randomImagesrc1="images/"+randomImage1;//images/dice1.png
var randomImagesrc2="images/"+randomImage2;
document.querySelectorAll("img")[0].setAttribute("src",randomImagesrc1);
document.querySelectorAll("img")[1].setAttribute("src",randomImagesrc2);
if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="player1 win";

    } else if(randomNumber1<randomNumber2)
        {
            document.querySelector("h1").innerHTML="player2 win";
        }
else{
    document.querySelector("h1").innerHTML="draw";
    }