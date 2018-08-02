function homeAlert() 
{
	window.alert("Welcome to the Batsite baby!")
}

function homeIfStatement()
{
	var homeResponse;

		homeResponse = window.prompt("Is Batman the greatest superhero of all time? Y for yes, N for no.");
	
		if (homeResponse === Y || y)
			window.alert("Good answer!");
		
		else if (homeResponse === N || n)
			window.alert("I hope to change your mind!");
		
		else
			window.alert("Invalid response.");
}

function productWindow()
{
	var price;
	
	  price = window.prompt("How much would you like to pay for our product? (Minimum of $10)");
	  
	  if (price >= 10)
	  window.alert("You have agreed to pay $" + price + " for our product. Thank you!");
	  
	  else
	  window.alert("Value must be greater than $10. Please reload the page."); 
	  
}

function productDoWhile()
{
	var endLoop = true;
	
	while (endLoop == true)
	{
		document.getElementById('doWhile').innerHTML = 'We sell shirts.<br>'
		document.getElementById('doWhile').innerHTML += 'We sell figures.<br>'
		document.getElementById('doWhile').innerHTML += 'We sell statues.<br>'
		document.getElementById('doWhile').innerHTML += 'We sell phone cases.<br>'
		document.getElementById('doWhile').innerHTML += 'We sell replicas.<br>'
		endLoop = false;
	}
	
}

function technologyWhile()
{
	var endLoop = true;
	
	while (endLoop == true)
		document.writeln("Batsuit<br>");
		document.writeln("Batmobile<br>");
		document.writeln("Utility Belt<br>");
		document.writeln("Bat-Signal<br>");
		document.writeln("Batcave<br>");
		endLoop = false;
}
	
function incrementingA()
{
	for (a = 1; a <6; a++)
	{
		window.alert("A is " + a );
		window.alert("A is " + a++ );
		window.alert("A is " + ++a );
		window.alert("A is " + --a );
		window.alert("A is " + a --);
	}
}	

function forLoop()
{
	for (a = 10; a < 20; a++)
		{
		window.alert("A is " + a );
		}
}

function BatSwitch()
{
	var response;
	
	response = window.prompt("Which is your favorite piece of tech that Batman uses to fight crime?")
	
	switch(response)
	{
		case "Batsuit":
			text = "The batsuit is a stylish choice!";
			break;
		
		case "Batmobile":
			text = "Of course his car is street legal!";
			break;
		
		case "Utility Belt":
			text = "Bruce has to keep his pants on somehow.";
			break;
		
		case "Bat-Signal":
			text = "Batman! You are needed here!";
			break;
		
		case "Batcave":
			text = "A cozy home, although slightly damp.";
			break;
		
		default:
			text = "Hmm I am not familiar with that choice."
	}
}

function forAnd()
{
	var firstName;
	var lastName;
	
	firstName = window.prompt("What is Batman's first name? ");
	lastName = window.prompt("What is Batman's last name? ");

	if (firstName == "Bruce" && lastName == "Wayne")
		window.alert("Great job! Bruce Wayne is the right answer!");
	
	else if (firstName == "Bruce" || lastName == "Wayne")
		window.alert("Close! You answered one of two correctly.");
}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	