function bestPlay() {

	var card1 = document.getElementsByName("card1")[0];
	var card2 = document.getElementsByName("card2")[0];
	var card3 = document.getElementsByName("card3")[0];
	
	var rule1 = document.getElementsByName("rule1")[0];
	var rule2 = document.getElementsByName("rule2")[0];
	var rule3 = document.getElementsByName("rule3")[0];
	var rule4 = document.getElementsByName("rule4")[0];
	var rule5 = document.getElementsByName("rule5")[0];

	
	var fileName = "";

	

	if (rule1.value === "1") {
		fileName = fileName + "1";
	} else if (rule1.value === "2") {
		fileName = fileName + "2";
	} else if (rule1.value === "3") {
		fileName = fileName + "3";
	}

	if (rule2.value === "1") {
		fileName = fileName + "1";
	} else if (rule2.value === "2") {
		fileName = fileName + "2";
	}

	if (rule3.value === "1") {
		fileName = fileName + "1";
	} else if (rule3.value === "2") {
		fileName = fileName + "2";
	}

	if (rule4.value === "1") {
		fileName = fileName + "1";
	} else if (rule4.value === "2") {
		fileName = fileName + "2";
	} else if (rule4.value === "3") {
		fileName = fileName + "3";
	}


	if (rule5.value === "1") {
		fileName = fileName + "1";
	} else if (rule5.value === "2") {
		fileName = fileName + "2";
	}

	
	// 0 = Stand
	// 1 = Hit
	// 2 = Double or Hit
	// 3 = Double or stand
	// 4 = Split

	
	var col = 0;
	if (card3.value === "Ace") {
		col = 9;
	} else {
		col = card3.value - 2;
	}
	
	var row = 0;	
	var softCard = 0;	
	if (card1.value === card2.value) {
		if (card1.value == ("Ace")) {
			row = 35;
		} else {
			switch(parseInt(card1.value)) {
				case 2:
					row = 26;
					break;
				case 3:
					row = 27;
					break;
				case 4:
					row = 28;
					break;
				case 5:
					row = 29;
					break;
				case 6:
					row = 30;
					break;
				case 7:
					row = 31;
					break;
				case 8:
					row = 32;
					break;
				case 9:
					row = 33;
					break;
				case 10:
					row = 34;
					break;
			}
		}
	} else if (card1.value === "Ace" || card2.value === "Ace") {
		if (card1.value === "Ace") {
			softCard = parseInt(card2.value);
		} else if (card2.value === "Ace") {
			softCard = parseInt(card1.value);
		}
		row = 15 + softCard;
	} else {
		row = (parseInt(card1.value) + parseInt(card2.value)) - 5;
	}


	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
    		myFunction(xhttp, row, col);
    	}	
	}
	xhttp.open("GET", "tables/"+fileName+".xml", true);
	xhttp.send();
}


function myFunction(xml, row, col) {
	var output = document.getElementsByName("move")[0];
    var xmlDoc = xml.responseXML;
    //var move = xmlDoc.getElementsByTagName("row")[row].childNodes[col].childNodes[0].nodeValue;
    //alert("ROW: " + row + " COL: " + col);
    var move = xmlDoc.getElementsByTagName("row")[row].getElementsByTagName("col")[col].childNodes[0].nodeValue;
	var answer = "";
	switch (move) {
		case "S":
			answer = "Stand";
			break;
		case "H":
			answer = "Hit";
			break;
		case "Dh":
			answer = "Double or Hit";
			break;
		case "Ds":
			answer = "Double or Stand";
			break;
		case "P":
			answer = "Split";
			break;
		case "Rh":
			answer = "Surrender";
			break;
		default:
			answer = "ERROR";
			break;
	}

	output.value = answer;
}


function cardSelect() {

	var card;
	if (event.target.getAttribute("class") == "card1") {
		card = 1;
		var cards1 = document.getElementsByClassName("card1");
		for (var i = 0; i < cards1.length; i++) {
			if (i < 9) {
				var cardNum = i+2;
			} else if (i == 9) {
				var cardNum = "jack";
			} else if (i == 10) {
				var cardNum = "queen";
			} else if (i == 11) {
				var cardNum = "king";
			} else if (i == 12) {
				var cardNum = "ace";
			}
			cards1[i].setAttribute("src", "cards/"+cardNum+"_of_spades.png");
		}
	}
	if (event.target.getAttribute("class") == "card2") {
		card = 2;
		var cards2 = document.getElementsByClassName("card2");
		for (var i = 0; i < cards2.length; i++) {
			if (i < 9) {
				var cardNum = i+2;
			} else if (i == 9) {
				var cardNum = "jack";
			} else if (i == 10) {
				var cardNum = "queen";
			} else if (i == 11) {
				var cardNum = "king";
			} else if (i == 12) {
				var cardNum = "ace";
			}
			cards2[i].setAttribute("src", "cards/"+cardNum+"_of_spades.png");
		}
	}
	if (event.target.getAttribute("class") == "card3") {
		card = 3;
		var cards3 = document.getElementsByClassName("card3");
		for (var i = 0; i < cards3.length; i++) {
			if (i < 9) {
				var cardNum = i+2;
			} else if (i == 9) {
				var cardNum = "jack";
			} else if (i == 10) {
				var cardNum = "queen";
			} else if (i == 11) {
				var cardNum = "king";
			} else if (i == 12) {
				var cardNum = "ace";
			}
			cards3[i].setAttribute("src", "cards/"+cardNum+"_of_spades.png");
		}
	}


	var cardId = event.target.id.substring(0,1);
	var valToSet;

	switch(cardId) {
		case "2":
			valToSet = "2";
			break;
		case "3":
			valToSet = "3";
			break;
		case "4":
			valToSet = "4";
			break;
		case "5":
			valToSet = "5";
			break;
		case "6":
			valToSet = "6";
			break;
		case "7":
			valToSet = "7";
			break;
		case "8":
			valToSet = "8";
			break;
		case "9":
			valToSet = "9";
			break;
		case "1":
			valToSet = "10";
			break;
		case "j":
			valToSet = "10";
			break;
		case "q":
			valToSet = "10";
			break;
		case "k":
			valToSet = "10";
			break;
		case "a":
			valToSet = "Ace"
			break;
	}


	if(card == 1) {
		document.getElementsByName("card1")[0].value = valToSet;
	} else if (card == 2) {
		document.getElementsByName("card2")[0].value = valToSet;
	} else {
		document.getElementsByName("card3")[0].value = valToSet;
	}


	var targ = document.getElementById(event.target.id);
	var imgurl = targ.src;

	targ.setAttribute("style", "background:url("+imgurl+"); background-size:100%");
	targ.setAttribute("src", "tick.png");
	
bestPlay();


}
