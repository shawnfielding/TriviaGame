$(document).ready(function() {
	// var myid = "093f7438d30340b4989ada26fdd4af7b";
	// var mysecret = 'd446d5cc07cd45a18bdf47695723306c';
	// var myurl = "http://localhost:8888";
	// var matchScore = []; //  Keeps track of what genre and score
	// $.ajax({
	//   url: accessURL,
	//   method: "GET",
	// }).done(function(response){
	//   var theResponse = response;
	//   Console.log(theResponse);
	// });
	var genres = {
		"70s Pop": ["spotify", "00K2xasnm9pDQk53SzNCht", seventiesPop],
		"80s Pop": ["22vyrh7eensiczn5gunbyvuoq", "6KThEx2rjYuG9ZBbbUfzw", eightiesPop],
		"90s Pop": ["myplay.com", "3C64V048fGyQfCjmu9TIGA", ninetiesPop],
		"00s Pop": ["myplay.com", "2f6tXtN0XesjONxicAzMIw", twoThousandsPop],
		"Modern Pop": ["spotify", "5FJXhjdILmRA2z5bvz4nzf", modernPop],
		"Classic Indie": ["crjunkin", "58fpDPmtfiiveG8E84mbaj", classicIndie],
		"90s Alt and Grunge": ["g0u1d1e1", "6CdBcKJ5vXXkWJfmC45kqB", ninetiesAltGrunge],
		"Trip Hop": ["desiballer798", "5HzTvPxvGL1V0LYJpULEZA", tripHop],
		"Modern Indie": ["spotify", "4YFNBPOZhmRmDecGBMuVla", modernIndie],
		"Classic Rock": ["scottlindsey", "0vMUBw3e7EGXYkfVxbp4l8", classicRock],
		"Glam Rock": ["pnmhos", "2XFDQfcKLM4jbGe2w82gKP", glamRock],
		"Classic Country": ["22jxqwd6tdfpb7gchy5pbnbmi", "6dlI4h9mCMsYadwXk8oVAx", classicCountry],
		"Modern Country": ["thesoundsofspotify", "01b3JSy4UfA2iiKodhAXse", modernCountry],
		"80s Rap": ["walterleehilljr72", "7vUOj5tb8rs1wPhfoPWMmD", eightiesRap],
		"Old School HipHop": ["r3hab99", "2iMPFX5Of7P8kjJDAKp87W", oldSchoolHipHop],
		"Modern HipHop": ["chominsf", "7dq5OB5HALss0ae3BmdC0k", modernHipHop],
		"Luke Cage Soundtrack": ["g0u1d1e1", "6CdBcKJ5vXXkWJfmC45kqB", lukeCageSoundtrack]
	}

	var matchLevel = {};
	//Definition: A state when statistics are shown and the user can enter a game.
	//Operations
	// calc total score
	// calc number of questions total
	// calc average score
	// calc total score per genre
	// calc number of questions per genre
	// generate genre buttons at beginning and between each set.


	var gameLevel = {}
	// a set of ten questions with 7 seconds to answer each one in the genre picked. starts when user
	generate game result page
	track score per question total
	track genre


	var questionLevel = {};
	//  a single question that the user has 7 seconds to

	appActions:
		//





		Tracked Numbers




	//def: a set of ten questions within a single genre.
	// genre played
	// game score
	//

	var questionLevel = {};
	getSongsInfo:

		// def - a single question with a set of four song options
		// get songs
		// make buttons
		// record answer
		// askquestion
		//

		var songQuestionLevel
	//system actions
	// run clock from 7 seconds
	// start music
	// stopmusic
	// show right/wrong answer
	// show cover
	// play video?
	// player -actions



	permanent methods and events
	//




	var


	function writeStartButtons() {
		$.each(genres, function(k, v) {
			$("#startButtons").append("<button type='button' class='btn btn-primary startButton' id='" + k + "' value='" + v + "'>" + k + "</button>");
		});
	}

	//Events
	//Starting Event

	writeStartButtons();

	// Click a genre to start the game
	$(".startButton").click(function() {
		gameControl(this.id, this.value);
	});

	function gameControl(k, v) {




		function getSongs(g) {
			var roundSongs = []; // used to house the arrays of songs for a round

			getsong() {}

			// get a set of four songs for each round.
			var singleSong = [];


		}





	}
	// Create and easy to use array
	// populate 4 buttons.
	// used to house the details of each song to pop into round songs
	.
	var rnd = 0; //needed a random number variable.
	for (var i = 0; i < 4; i++) {
		//get the songs' details and put them in an array

		singleSong.push(genres[k][2].tracks.items[rnd].track.name);
		singleSong.push(genres[k][2].tracks.items[rnd].track.artists[0].name);
		singleSong.push(genres[k][2].tracks.items[rnd].track.album.images[0].url);
		singleSong.push(genres[k][2].tracks.items[rnd].track.preview_url);
		singleSong.push(genres[k][2].tracks.items[rnd].track.id); // this is redundant with the object key value, but it will make life easier later.
		// Push the array to an array of arrays.  This will be used to track where we are in the game.  I will bind the inside arrays to the result so they can be retrieved later easily.
		songX.push(songY.slice());
		console.log(songX);

		// Make the song buttons
		$("#songButtons").append("<button type='button' class='btn btn-primary btn-lg musicButton id='" + +"' value='" + "'>" + k + "</button>");
		songY = [];
	} // end of the for loop.
	//now that the four buttons have been created, it's time to play.




	//Choose which one of the songs will play and pass the URL

	//playMusic();
} // end of the runGame Function


//play the snippet
function playMusic() {
	$.get("https://p.scdn.co/mp3-preview/ac572fa1065ffc38a9258631e02c6f7374f943bf?cid=8897482848704f2a8f8d7c79726a70d4", function(your_response) { /*Do whathever you want with your_response*/ })
}

// Just the random number controller
function randomNumber(hi, low) {
	var x = Math.floor((Math.random() * (hi - low)) + 1);
	return x

}

// play one of the four songButtons
//start the countDown
// on choice, determine if correct correct
//if timeout, that is a miss
//show right value in  green
// If wrong one shows, show in red
//calculate score
})






// console.log(classicRock.tracks.items[1].track.artists[0].name           console.log(classicRock.tracks.items[1].track.album.name       console.log(classicRock.tracks.items[1].track.album.images[0].url);
// console.log(classicRock.tracks.items[1].track.href);
// console.log(classicRock.tracks.items[1].track.preview_url);





// var thetitle = classicRock.length;
// console.log(classicRock.tracks.items[1].track.name);
// console.log(classicRock.tracks.items[1].track.artists[0].name);
// console.log(classicRock.tracks.items[1].track.album.name);
// console.log(classicRock.tracks.items[1].track.album.images[0].url);
// console.log(classicRock.tracks.items[1].track.href);
// console.log(classicRock.tracks.items[1].track.preview_url)









//             function getSongs
//
//
//
//

//
//             }
//
//             function runGame()
//
//             //var randomAnswers = []
//             Randomize(questions);
//
//             //show main screen
//
//             //reset/start game
//
//
//             //run through the questions each
//             //show the answers
//             //determine if answer is right or wrong or timed out.
//
//             //end the game  again?
//
//
//
//
//
//             function Randomize(x) {
//                 questions = randomOrder(x);
//                 console.log(questions)
//
//             }
//
//
//
//             function runTimer() {
//                 var countDown = setInterval(decrement, 1000);
//             }
//
//             function decrement() {
//                 countNum--;
//                 $(".timer").html(countNum);
//                 if (countNum === 0) {
//                     endQuestion(0);
//                 }
//             }
//
//             function KeepTrackofWinsLosses() {
//                 $("#CurrentNumber").html(currentVal);
//                 $("#TotalWinsNumber").html(totalWins);
//                 $("#TotalLossesNumber").html(totalLosses);
//             }
//
//             function endQuestion(gotit) {
//                 if (gotit === 0) {
//                     $(".timer").html("Times Up!");
//                     totalLosses = TotalLosses++;
//                 } else if (gotit === 1) {
//                     $(".timer").html("Oh bummer, wrong");
//                     totalLosses = TotalLosses++;
//                 } else if (gotit === 2) {
//                     $(".timer").html("RIGHT!!!");
//                 } else {
//                     $(".timer").html("Something's gone horribly wrong.  Let me send you to the next question.");
//                 }
//             }
//
//             function showQs(q) {
//                 q.each()
//                 randomOrder(questions);
//                 var randomquestions = rndtmp;
//             }
//
//             function showAs(x) {
//
//
//
//
//             }
//
//             // This function randomizes the array inputted.
//             // Used to control question order and answer order
//

//         })
