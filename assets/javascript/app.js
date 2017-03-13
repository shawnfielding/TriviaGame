$(document).ready(function() {
            var countNum = 10;
            var totalGets = 0;
            var totalFails = 0;
            var question = "";
            var rightAnswer = "";
            var wrongAnswer = "";

var genres = {
    "70s Pop": ["spotify","00K2xasnm9pDQk53SzNCht"],
    "80s Pop": ["22vyrh7eensiczn5gunbyvuoq","6KThEx2rjYuG9ZBbbUfzw"],
    "90s_Pop":["myplay.com","3C64V048fGyQfCjmu9TIGA"],
    "00s Pop":["myplay.com","2f6tXtN0XesjONxicAzMIw"],
    "Modern Pop":["spotify","5FJXhjdILmRA2z5bvz4nzf"],
    "Classic Indie":["crjunkin","58fpDPmtfiiveG8E84mbaj"],
    "90s Alt and Grunge":["g0u1d1e1","6CdBcKJ5vXXkWJfmC45kqB"],
    "Trip Hop":["desiballer798","5HzTvPxvGL1V0LYJpULEZA"],
    "Modern Indie":["spotify","4YFNBPOZhmRmDecGBMuVla"],
    "Classic Rock":["scottlindsey","0vMUBw3e7EGXYkfVxbp4l8"],
    "Glam Rock":["pnmhos","2XFDQfcKLM4jbGe2w82gKP"],
    "Classic Country":["22jxqwd6tdfpb7gchy5pbnbmi","6dlI4h9mCMsYadwXk8oVAx"], "Modern Country":["thesoundsofspotify","01b3JSy4UfA2iiKodhAXse"],
    "80s Rap" :["walterleehilljr72","7vUOj5tb8rs1wPhfoPWMmD"],
    "OldSchool HipHop":["r3hab99","2iMPFX5Of7P8kjJDAKp87W"],
    "Modern HipHop":["chominsf","7dq5OB5HALss0ae3BmdC0k"],
    "Luke Cage Soundtrack":["g0u1d1e1","6CdBcKJ5vXXkWJfmC45kqB"]
  }

  function writeStartButtons(){
    $.each(genres,function(k,v){
      $("#startButtons").append("<button type='button' class='btn btn-primary btn-lg startButton' id='"+k+"' value='"+v+"'>"+k);
    });
  }

  function prepSongs(x,y){


    console.log(typeof(x));
    console.log(genres[x][0]);
    var queryURL = "https://api.spotify.com/users/"+ genres[x][0]+"/playlists/"+ genres[x][1]
    console.log(queryURL);
    // $.Ajax{
    //   url:https://api.spotify.com
    //   method: "GET"
    // }.
  }

//Events
//Starting Event
writeStartButtons();

//Click Events

// Click a genre to start the game
  $(".startButton").click(function(){
    prepSongs(this.id,this.value);
    ;
  });




})
//
//
//
//
//   ))
//
// function
//
//
//
//
//
// }
//
//
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
//             function randomOrder(x) {
//                 var tmp = x;
//                 var rndtmp = [];
//                 for (var i = 0; i < tmp.length; i++) {
//                     n = Math.floor((Math.random) * (tmp.length - 1));
//                     rndtmp.push(tmp.splice(n, 1));
//                 }
//                 return rndtmp;
//             }
//         })
