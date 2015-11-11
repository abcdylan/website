function bestPlay() {
	var output = document.getElementsByName("move")[0];
	var card1 = document.getElementsByName("card1")[0];
	var card2 = document.getElementsByName("card2")[0];
	var card3 = document.getElementsByName("card3")[0];
	
	// 0 = Stand
	// 1 = Hit
	// 2 = Double or Hit
	// 3 = Double or stand
	// 4 = Split

	// One deck, Stands on soft 17, Double after split, no surrender,
	// dealer checks for blackjack
	var table1 = [	
			//	Hard  2  3  4  5  6  7  8  9  10 A 		Value		Index
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 5			0
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 6 			1
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 7			2
					[ 1, 1, 1, 2, 2, 1, 1, 1, 1, 1 ], // 8 			3
					[ 2, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], // 9 		 	4
					[ 2, 2, 2, 2, 2, 2, 2, 2, 1, 1 ], // 10		 	5
					[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], // 11 		6
					[ 1, 1, 0, 0, 0, 1, 1, 1, 1, 1 ], // 12 		7
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], // 13 		8
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], // 14		 	9
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], // 15 		10
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], // 16 		11
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 17 		12
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 18 		13
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 19 		14
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 20 		15
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 21 		16
			//	Soft  2  3  4  5  6  7  8  9  10 A
					[ 1, 1, 2, 2, 2, 1, 1, 1, 1, 1 ], // 13 		17
					[ 1, 1, 2, 2, 2, 1, 1, 1, 1, 1 ], // 14 		18
					[ 1, 1, 2, 2, 2, 1, 1, 1, 1, 1 ], // 15 		19
					[ 1, 1, 2, 2, 2, 1, 1, 1, 1, 1 ], // 16 		20
					[ 2, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], // 17 		21
					[ 0, 3, 3, 3, 3, 0, 0, 1, 1, 0 ], // 18 		22
					[ 0, 0, 0, 0, 3, 0, 0, 0, 0, 0 ], // 19 		23
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 20 		24
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 21 		25
			//	Pair  2  3  4  5  6  7  8  9  10 A
					[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1 ], // 2, 2		26 4
					[ 4, 4, 4, 4, 4, 4, 4, 1, 1, 1 ], // 3, 3		27 6
					[ 1, 1, 4, 4, 4, 1, 1, 1, 1, 1 ], // 4, 4		28 8
					[ 2, 2, 2, 2, 2, 2, 2, 2, 1, 1 ], // 5, 5		29 10
					[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1 ], // 6, 6		30 12
					[ 4, 4, 4, 4, 4, 4, 4, 1, 0, 1 ], // 7, 7		31 14
					[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], // 8, 8		32 16
					[ 4, 4, 4, 4, 4, 0, 4, 4, 0, 0 ], // 9, 9		33 18
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 10, 10		34 20 
					[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ]  // A, A 		35 22
				];

	// Two decks, Stands on soft 17, Double after split, no surrender,
	// dealer checks for blackjack
	var table2 = [	
			//	Hard  2  3  4  5  6  7  8  9  10 A 		Value		Index
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 5			0
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 6 			1
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 7			2
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], // 8 			3
					[ 2, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], // 9 		 	4
					[ 2, 2, 2, 2, 2, 2, 2, 2, 1, 1 ], // 10		 	5
					[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], // 11 		6
					[ 1, 1, 0, 0, 0, 1, 1, 1, 1, 1 ], // 12 		7
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], // 13 		8
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], // 14		 	9
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], // 15 		10
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ], // 16 		11
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 17 		12
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 18 		13
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 19 		14
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 20 		15
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 21 		16
			//	Soft  2  3  4  5  6  7  8  9  10 A
					[ 1, 1, 1, 2, 2, 1, 1, 1, 1, 1 ], // 13 		17
					[ 1, 1, 1, 2, 2, 1, 1, 1, 1, 1 ], // 14 		18
					[ 1, 1, 2, 2, 2, 1, 1, 1, 1, 1 ], // 15 		19
					[ 1, 1, 2, 2, 2, 1, 1, 1, 1, 1 ], // 16 		20
					[ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ], // 17 		21
					[ 0, 3, 3, 3, 3, 0, 0, 1, 1, 1 ], // 18 		22
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 19 		23
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 20 		24
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 21 		25
			//	Pair  2  3  4  5  6  7  8  9  10 A
					[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1 ], // 2, 2		26 4
					[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1 ], // 3, 3		27 6
					[ 1, 1, 1, 4, 4, 1, 1, 1, 1, 1 ], // 4, 4		28 8
					[ 2, 2, 2, 2, 2, 2, 2, 2, 1, 1 ], // 5, 5		29 10
					[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1 ], // 6, 6		30 12
					[ 4, 4, 4, 4, 4, 4, 4, 1, 1, 1 ], // 7, 7		31 14
					[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ], // 8, 8		32 16
					[ 4, 4, 4, 4, 4, 0, 4, 4, 0, 0 ], // 9, 9		33 18
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], // 10, 10		34 20 
					[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ]  // A, A 		35 22
				];
	// four to eight decks, Stands on soft 17, Double after split,
	// no surrender, dealer checks for blackjack
	var table3 = [
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
					[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
					[ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ],
					[ 2, 2, 2, 2, 2, 2, 2, 2, 1, 1 ],
					[ 2, 2, 2, 2, 2, 2, 2, 2, 2, 1 ],
					[ 1, 1, 0, 0, 0, 1, 1, 1, 1, 1 ],
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ],
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ],
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ],
					[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ 1, 1, 1, 2, 2, 1, 1, 1, 1, 1 ],
					[ 1, 1, 1, 2, 2, 1, 1, 1, 1, 1 ],
					[ 1, 1, 2, 2, 2, 1, 1, 1, 1, 1 ],
					[ 1, 1, 2, 2, 2, 1, 1, 1, 1, 1 ],
					[ 1, 2, 2, 2, 2, 1, 1, 1, 1, 1 ],
					[ 0, 3, 3, 3, 3, 0, 0, 1, 1, 1 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1 ],
					[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1 ],
					[ 1, 1, 1, 4, 4, 1, 1, 1, 1, 1 ],
					[ 2, 2, 2, 2, 2, 2, 2, 2, 1, 1 ],
					[ 4, 4, 4, 4, 4, 1, 1, 1, 1, 1 ],
					[ 4, 4, 4, 4, 4, 4, 1, 1, 1, 1 ],
					[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ],
					[ 4, 4, 4, 4, 4, 0, 4, 4, 0, 0 ],
					[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
					[ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4 ]
				];

	
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

	var move = table1[row][col];
	var answer = "";
	switch (move) {
		case 0:
			answer = "Stand";
			break;
		case 1:
			answer = "Hit";
			break;
		case 2:
			answer = "Double or Hit";
			break;
		case 3:
			answer = "Double or Stand";
			break;
		case 4:
			answer = "Split";
			break;
		default:
			answer = "ERROR";
			break;
	}

	output.value = answer;

}


