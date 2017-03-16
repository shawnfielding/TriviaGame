$(document).ready(function() {
	// -------------------Global Stuff - DO NOT RESET ------------------
	// ----Genre Objects with 100 songs a piece.
	// ----Keeps track of Genre Scores too.
	// Note: I had the values in Arrays already.  Didn't have time too convert.
	// ---- Session Variables and Objects - reset after end of Game ------------
	var Genres = {
		"70s Pop": [0, 0, 0, seventiesPop],
		"80s Pop": [0, 0, 0, eightiesPop],
		"90s Pop": [0, 0, 0, ninetiesPop],
		"00s Pop": [0, 0, 0, twoThousandsPop],
		"Modern Pop": [0, 0, 0, modernPop],
		"Classic Indie": [0, 0, 0, classicIndie],
		"90s Alt and Grunge": [0, 0, 0, ninetiesAltGrunge],
		"Trip Hop": [0, 0, 0, tripHop],
		"Modern Indie": [0, 0, 0, modernIndie],
		"Classic Rock": [0, 0, 0, classicRock],
		"Glam Rock": [0, 0, 0, glamRock],
		"Classic Country": [0, 0, 0, classicCountry],
		"Modern Country": [0, 0, 0, modernCountry],
		"80s Rap": [0, 0, 0, eightiesRap],
		"Old School HipHop": [0, 0, 0, oldSchoolHipHop],
		"Modern HipHop": [0, 0, 0, modernHipHop],
		"Luke Cage": [0, 0, 0, lukeCageSoundtrack]
	}

	var SessionVars = {
		totalScore: 0,
		totalCorrect: 0,
		totalWrong: 0,
		totalaverage: 0,
		playedBefore: false,
	}

	function resetIntro() {
		$("#genreStatement").html("<h2>Are you Ready? Choose a Genre.</h2>");
		$('.startButton').fadeIn(1000);
	}
	// ---- Game Variables - reset after end of Game ------------
	var GameVars = {
		questionsLeft: 10,
		gameScore: 0,
		gameQuestionsRight: 0,
		gameQuestionsWrong: 0,
		gameGenre: ""
	}
	// ---Question Variables - reset after every question--
	var QuestionVars = {
		questionSongs: [], // houses the arrays of songs for a question
		songPlaying: null, // Audio object
		songToPlay: "", // the song that is going to play
		IntervalID: "", //used to run the timer at decrements
		theSeconds: 10, // what the timer is set at at the start.
	}


	// ----- Functions running the game ---------
	// Controls the order of activity after a genre is chosen
	function setUpGame() {
		$("#genreButtons1").children().hide(1000);
		$("#genreButtons2").children().hide(1000);
		$("#genreStatement").html("<h2>" + GameVars.gameGenre + " Quiz</h2>");
	}

	function gameStart(k) {
		newGameVariables(k);
		if (SessionVars.playedBefore === 1) {
			setGameVariables(k)
		} // end if
		runQuestions(k)
		//end for loop
	}
	// sets or reset the variables for the game
	function newGameVariables(genre) {
		Genres[genre][1] = Genres[genre][1] + 1;
		GameVars.questionsLeft = 10;
		GameVars.gameScore = 0;
		GameVars.gameQuestionsRight = 0;
		GameVars.gameQuestionsWrong = 0;
		GameVars.gameGenre = genre;
	}

	// resets the global variables after each question
	function NewQuestionVariables() {
		QuestionVars.questionSongs = []; // houses the arrays of songs for a question
		QuestionVars.songPlaying = null; // Audio object
		QuestionVars.songToPlay = ""; // the song that is going to play
		QuestionVars.intervalId = ""; //used to run the timer at decrements
		QuestionVars.theSeconds = 10; //used to track seconds left and points
		QuestionVars.questionSongs = []; // houses the arrays of songs for a question
		QuestionVars.songPlaying = ""; // Audio object
		QuestionVars.songToPlay = ""; // the song that is going to play
	}

	// ------- Functions running the questions ---------
	// Controls the cycling of questions
	function runQuestions(k) {
		getSongs(k);
		chooseSongToPlay();
		makeSongButtons();
		playSong();
		CountDown();
	} //end function

	// Chooses the songs for each question
	function getSongs(k) {
		console.log(k)
		var singleSong = []; // create the array of datapoints for a question
		for (var i = 0; i < 4; i++) {
			var maxnum = (Genres[k][3].tracks.items).length
			console.log(maxnum)
			var rnd = randomNumber(maxnum - 1, 1); //needed a random number variable.
			singleSong.push(Genres[k][3].tracks.items[rnd].track.name);
			singleSong.push(Genres[k][3].tracks.items[rnd].track.artists[0].name);
			singleSong.push(Genres[k][3].tracks.items[rnd].track.album.images[0].url);
			singleSong.push(Genres[k][3].tracks.items[rnd].track.preview_url);
			singleSong.push(Genres[k][3].tracks.items[rnd].track.id);
			QuestionVars.questionSongs.push(singleSong);
			singleSong = [];
		} // end for loop
	} // end function

	// Chooses which song to play.
	function chooseSongToPlay() {
		var rnd = randomNumber(3, 0);
		QuestionVars.songToPlay = QuestionVars.questionSongs[rnd];
	} // end function

	// Makes the Song buttons per question.  What the hell is wrong with this?
	function makeSongButtons() {
		for (var i = 0; i < 4; i++) {
			if (QuestionVars.questionSongs[i][4] == QuestionVars.songToPlay[4]) {
				console.log(QuestionVars.questionSongs[i][4] + " " + typeof QuestionVars.questionSongs[i][4]);
				console.log(QuestionVars.songToPlay[4] + " " + typeof QuestionVars.songToPlay[4]);
				$("#gameColumn").append("<button type='button' class='btn btn-primary btn-lg songButton' onclick='stopQuestionRight()'>" + QuestionVars.questionSongs[i][0] + " by " + QuestionVars.questionSongs[i][1] + "</button>");
			} else {
				console.log(QuestionVars.questionSongs[i][4] + " " + typeof QuestionVars.questionSongs[i][4]);
				console.log(QuestionVars.songToPlay[4] + " " + typeof QuestionVars.songToPlay[4]);
				$("#gameColumn").append("<button type='button' class='btn btn-primary btn-lg songButton' onclick='stopQuestionWrong()'>" + QuestionVars.questionSongs[i][0] + " by " + QuestionVars.questionSongs[i][1] + "</button>");
			} // end if

		} //end for loop
	} //end function

	// plays for 10 seconds
	function playSong() {
		QuestionVars.songPlaying = new Audio(QuestionVars.songToPlay[3]);
		QuestionVars.songPlaying.play();
	}

	// Counts down from 10
	function CountDown() {
		QuestionVars.intervalId = setInterval(function() {
			QuestionVars.theSeconds = QuestionVars.theSeconds - 1;
			$("#secondsLeft").html(QuestionVars.theSeconds);
			if (QuestionVars.theSeconds === 0) {
				stopQuestionWrong();
			} // end if
		}, 1000);
	} // end function

	// this is not sussed out yet.
	function stopQuestionWrong() {
		clearInterval(QuestionVars.intervalId);
		QuestionVars.songPlaying.pause();
		showQuestionResult("wrong")
	}

	function stopQuestionRight() {
		QuestionVars.songPlaying.pause();
		showQuestionResult("right")
	}

	function showQuestionResult(n) {
		SessionVars.playedBefore = true;
		clearInterval(QuestionVars.intervalId);

	}

	// Just the random number controller
	function randomNumber(hi, low) {
		var x = Math.floor(Math.random() * (hi - low) + low);
		console.log(x);
		console.log(typeof x);
		return x;
	}

	//This starts the whole shbang

	$(".startButton").click(function() {
		setUpGame(this.id);
		gameStart(this.id);
	});

})
