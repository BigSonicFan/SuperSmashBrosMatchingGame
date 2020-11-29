window.addEventListener('load', Menu)

//what window loads
function Menu()
{
    //first image that loads and size
    document.body.style.backgroundImage = "url('battlefieldSSBU.png')";
    document.body.style.backgroundSize = "cover";

    //events that sets borders colors and background colors
    document.getElementById('playAgain').style.color = "white";
    document.getElementById('playAgain').style.backgroundColor = "#e6ac00";
    document.getElementById('goBack').style.backgroundColor = "#d92638";
    document.getElementById('goBack').style.border = "3px solid #6c131c";
    document.getElementById('MarioNext').style.border = "3px solid #003e80";

    //event if user clicked go back
    document.getElementById('goBack').addEventListener('click', HomePage);

    //event if user clicked play again
    document.getElementById('playAgain').addEventListener('click', MarioDisplay);

    //event that sets border for buttons
    document.getElementById('playAgain').style.border = "3px solid #997300";
    document.getElementById('LinkNext').style.border = "3px solid #19672b";
    document.getElementById('KirbyNext').style.border = "3px solid #19672b";
    document.getElementById('PikachuNext').style.border = "3px solid #19672b";
    document.getElementById('FinalDisplay').style.border = "3px solid #19672b";

    //buttons for right answers of each picture
    document.getElementById('Question1RightAnswer').addEventListener('click', RightAnswer1)
    document.getElementById('Question2RightAnswer').addEventListener('click', RightAnswer2)
    document.getElementById('Question3RightAnswer').addEventListener('click', RightAnswer3)
    document.getElementById('Question4RightAnswer').addEventListener('click', RightAnswer4)

    //buttons for wrong answers of match picture 1
    document.getElementById('Question1WrongAnswer1').addEventListener('click', TryAgain)
    document.getElementById('Question1WrongAnswer2').addEventListener('click', TryAgain)
    document.getElementById('Question1WrongAnswer3').addEventListener('click', TryAgain)

    //buttons for wrong answers of match picture 2
    document.getElementById('Question2WrongAnswer1').addEventListener('click', TryAgain)
    document.getElementById('Question2WrongAnswer2').addEventListener('click', TryAgain)
    document.getElementById('Question2WrongAnswer3').addEventListener('click', TryAgain)

    //buttons for wrong answers of match picture 3
    document.getElementById('Question3WrongAnswer1').addEventListener('click', TryAgain)
    document.getElementById('Question3WrongAnswer2').addEventListener('click', TryAgain)
    document.getElementById('Question3WrongAnswer3').addEventListener('click', TryAgain)

    //buttons for wrong answers of match picture 4
    document.getElementById('Question4WrongAnswer1').addEventListener('click', TryAgain)
    document.getElementById('Question4WrongAnswer2').addEventListener('click', TryAgain)
    document.getElementById('Question4WrongAnswer3').addEventListener('click', TryAgain)

    //buttons for upcoming displays
    document.getElementById('MarioNext').addEventListener('click', MarioDisplay)
    document.getElementById('LinkNext').addEventListener('click', LinkDisplay)
    document.getElementById('KirbyNext').addEventListener('click', KirbyDisplay)
    document.getElementById('PikachuNext').addEventListener('click', PikachuDisplay)
    document.getElementById('FinalDisplay').addEventListener('click', FinalPage)
}

//function that displays the home page of index file
function HomePage()
{
    document.getElementById('homePage').style.display = "inline";
    document.getElementById('questionDisplay1').style.display = "none";
    document.getElementById('questionDisplay2').style.display = "none";
    document.getElementById('questionDisplay3').style.display = "none";
    document.getElementById('questionDisplay4').style.display = "none";
    document.getElementById('goBack').style.display = "none";
    document.body.style.backgroundImage = "url('battlefieldSSBU.png')";
}

//function if user click picture that doesn't match
function TryAgain()
{
    alert("Whoops! Try Again.")
}

//function if user click right picture on match picture 1
function RightAnswer1()
{
    alert("Yay! You got the right picture!");
    document.getElementById('display1').style.display = "inline";
}

//function if user click right picture on match picture 2
function RightAnswer2()
{
    alert("Yay! You got the right picture!");
    document.getElementById('display2').style.display = "inline";
}

//function if user click right picture on match picture 3
function RightAnswer3()
{
    alert("Yay! You got the right picture!");
    document.getElementById('display3').style.display = "inline";
}

//function if user click right picture on match picture 4
function RightAnswer4()
{
    alert("Yay! You got the right picture!");
    document.getElementById('display4').style.display = "inline";
}

//function for displaying matching picture 1
function MarioDisplay()
{
    document.getElementById('homePage').style.display = "none";
    document.getElementById('questionDisplay1').style.display = "inline";
    document.getElementById('display1').style.display = "none";
    document.getElementById('display2').style.display = "none";
    document.getElementById('display3').style.display = "none";
    document.getElementById('display4').style.display = "none";
    document.getElementById('goBack').style.display = "inline";
    document.getElementById('finalPage').style.display = "none";
    document.body.style.backgroundImage = "url('mushroomkingdomSSBU.png')";
}

//function for displaying matching picture 2
function LinkDisplay()
{
    document.getElementById('questionDisplay1').style.display = "none";
    document.getElementById('display1').style.display = "none";
    document.getElementById('questionDisplay2').style.display = "inline";
    document.body.style.backgroundImage = "url('hyrulecastleSSBU.png')";
}

//function for displaying matching picture 3
function KirbyDisplay()
{
    document.getElementById('questionDisplay2').style.display = "none";
    document.getElementById('display2').style.display = "none";
    document.getElementById('questionDisplay3').style.display = "inline";
    document.body.style.backgroundImage = "url('fountainofdreamsSSBU.png')";
}

//function for displaying matching picture 4
function PikachuDisplay()
{
    document.getElementById('questionDisplay3').style.display = "none";
    document.getElementById('display3').style.display = "none";
    document.getElementById('questionDisplay4').style.display = "inline";
    document.body.style.backgroundImage = "url('pokemonstadiumSSBU.png')";
}

//function for displaying final page
function FinalPage()
{
    document.getElementById('questionDisplay4').style.display = "none";
    document.getElementById('display4').style.display = "none";
    document.getElementById('finalPage').style.display = "inline";
    document.getElementById('goBack').style.display = "none";
    document.body.style.backgroundImage = "url('finaldestinationSSBU.png')";
}