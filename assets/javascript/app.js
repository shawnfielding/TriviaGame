$(document).ready(function() {
	// -------------------Global Stuff - DO NOT RESET ------------------
	// ----Genre Objects with 100 songs a piece.
	// ----Keeps track of Genre Scores too.
	// Note: I had the values in Arrays already.  Didn't have time too convert.



	var genres = {
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

	var playedBefore = 0;

	// ---- Game Variables - reset after end of Game ------------
	var questionsLeft = 10;
	var gameScore = 0;
	var gameQuestionsRight = 0;
	var gameQuestionsWrong = 0;

	// ---Question Variables - reset after every question--
	var questionSongs = []; // houses the arrays of songs for a question
	var songPlaying; // Audio object
	;
	var songToPlay = ""; // the song that is going to play

	// ------- Timer Variables: reset pretty much all the time   ---------
	var IntervalID; //used to run the timer at decrements
	var theSeconds = 10; // what the timer is set at at the start.

	// ----- Functions running the game ---------
	// Controls the order of activity after a genre is chosen


	function gameStart(k, v) {
		$('.startButton').fadeOut()
		if (playedBefore === 1) {
			setGameVariables(k)
		} // end if
		console.log(k)
		runQuestions(k)
		//end for loop
	}
	// sets or reset the variables for the game
	function setGameVariables(genre) {
		questionsLeft = 10;
		gameScore = 0;
		gameQuestionsRight = 0;
		gameQuestionsWrong = 0;
		gameGenre = k;
		$("#QuestionStatement").html("<h2>What song is this in genre " +
			k + "</h2>");
	}

	// resets the global variables after each question
	function setQuestionVariables() {
		questionSongs = []; // houses the arrays of songs for a question
		songPlaying = ""; // Audio object
		songToPlay = ""; // the song that is going to play
	}
	// ------- Functions running the questions ---------

	// Controls the cycling of questions
	function runQuestions(k) {
		getSongs(k);
		chooseSongToPlay();
		makeSongButtons();
		playSong();
		var countDown = CountDown();
	} //end function

	// Chooses the songs for each question
	function getSongs(k) {
		console.log(k)
		var singleSong = []; // create the array of datapoints for a question
		for (var i = 0; i < 4; i++) {
			var maxnum = (genres[k][3].tracks.items).length
			console.log(maxnum)
			var rnd = randomNumber(maxnum - 1, 1); //needed a random number variable.
			singleSong.push(genres[k][3].tracks.items[rnd].track.name);
			singleSong.push(genres[k][3].tracks.items[rnd].track.artists[0].name);
			singleSong.push(genres[k][3].tracks.items[rnd].track.album.images[0].url);
			singleSong.push(genres[k][3].tracks.items[rnd].track.preview_url);
			singleSong.push(genres[k][3].tracks.items[rnd].track.id);
			questionSongs.push(singleSong);
			singleSong = [];
		} // end for loop
	} // end function

	// Chooses which song to play.
	function chooseSongToPlay() {
		var rnd = randomNumber(3, 0);
		songToPlay = questionSongs[rnd];
	} // end function

	// Makes the Song buttons per question.
	function makeSongButtons() {
		$("#Buttons").html("");
		for (var i = 0; i < 4; i++) {
			if (questionsSongs[i][4] == songToPlay[4]) {
				$("#Buttons").append("<button type='button' class='btn btn-primary btn-lg songButton' onclick='stopQuestionRight()'>" + questionSongs[i][0] + " by " + questionSongs[i][1] + "</button>");
			} else {
				$("#Buttons").append("<button type='button' class='btn btn-primary btn-lg songButton' onclick='stopQuestionWrong()>" + questionSongs[i][0] + " by " + questionSongs[i][1] + "</button>");
			} // end if
		} //end for loop
	} //end function

	function playSong() {
		songPlaying = new Audio(songToPlay[3]);
		songPlaying.play();
	}

	// Counts down from 10
	function CountDown() {
		intervalID = setInterval(function() {
			theSeconds = theSeconds - 1;
			$("#secondsLeft").html(theSeconds);
			if (theSeconds === 0) {
				stopQuestion();
			} // end if
		}, 1000);
	} // end function

	function stopQuestionWrong() {
		clearInterval(intervalID);
		songPlaying.pause();
	}

	function stopQuestionRight() {
		clearInterval(intervalID);
		songPlaying.pause();

	}

	// Just the random number controller
	function randomNumber(hi, low) {
		var x = Math.floor(Math.random() * (hi - low) + low);
		console.log(x);
		console.log(typeof x)
		return x;
	}

	//This starts the whole shbang

	$(".startButton").click(function() {
		$("#genreButtons").hide(1000);
		gameStart(this.id, this.value);
	});

})
