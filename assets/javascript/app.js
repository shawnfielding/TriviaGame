$(document).ready(function() {
var myid = "093f7438d30340b4989ada26fdd4af7b"
var mysecret = 'd446d5cc07cd45a18bdf47695723306c;'
var myurl = "http://localhost:8888";


$.ajax(
  {
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    data: {
      "grant_type":    "authorization_code",
      // "code":          code,
      "redirect_uri":  myurl,
      "client_secret": mysecret,
      "client_id":     myid,
    },
    success: function(result) {
      alert("I actually made it in!")
    },
  }
);
//     function login(callback) {
//         var CLIENT_ID = '093f7438d30340b4989ada26fdd4af7b';
//         var REDIRECT_URI = 'https://accounts.spotify.com/authorize?client_id=' + clientId +
//             '&redirect_uri=' + encodeURIComponent('http://localhost:8888') +
//             '&response_type=token';
//             console.log(callback);
//     }
//
//
//     window.addEventListener("message", function(event) {
//         var hash = JSON.parse(event.data);
//         console.log(event);
//         if (hash.type == 'access_token') {
//             callback(hash.access_token);
//         }
//     }, false);
//
// })
//
// function getUserData(accessToken) {
//     return $.ajax({
//         url: 'https://api.spotify.com/v1/me',
//         headers: {
//             'Authorization': 'Bearer ' + accessToken
//         }
//     });
// }
//     var loginButton = document.getElementById('btn-login');
//
// loginButton.addEventListener('click', function() {
//     login(function(accessToken) {
//         getUserData(accessToken)
//             .then(function(response) {
//                 loginButton.style.display = 'none';
//                 resultsPlaceholder.innerHTML = template(response);
//             });
//     });
// });



// $.ajax({
//   url: accessURL,
//   method: "GET",
// }).done(function(response){
//   var theResponse = response;
//   Console.log(theResponse);
// });
var countNum = 10;
var totalGets = 0;
var totalFails = 0;
var question = "";
var rightAnswer = "";
var wrongAnswer = "";
var accessToken = ""

var genres = {
    "70s Pop": ["spotify", "00K2xasnm9pDQk53SzNCht"],
    "80s Pop": ["22vyrh7eensiczn5gunbyvuoq", "6KThEx2rjYuG9ZBbbUfzw"],
    "90s Pop": ["myplay.com", "3C64V048fGyQfCjmu9TIGA"],
    "00s Pop": ["myplay.com", "2f6tXtN0XesjONxicAzMIw"],
    "Modern Pop": ["spotify", "5FJXhjdILmRA2z5bvz4nzf"],
    "Classic Indie": ["crjunkin", "58fpDPmtfiiveG8E84mbaj"],
    "90s Alt and Grunge": ["g0u1d1e1", "6CdBcKJ5vXXkWJfmC45kqB"],
    "Trip Hop": ["desiballer798", "5HzTvPxvGL1V0LYJpULEZA"],
    "Modern Indie": ["spotify", "4YFNBPOZhmRmDecGBMuVla"],
    "Classic Rock": ["scottlindsey", "0vMUBw3e7EGXYkfVxbp4l8"],
    "Glam Rock": ["pnmhos", "2XFDQfcKLM4jbGe2w82gKP"],
    "Classic Country": ["22jxqwd6tdfpb7gchy5pbnbmi", "6dlI4h9mCMsYadwXk8oVAx"],
    "Modern Country": ["thesoundsofspotify", "01b3JSy4UfA2iiKodhAXse"],
    "80s Rap": ["walterleehilljr72", "7vUOj5tb8rs1wPhfoPWMmD"],
    "OldSchool HipHop": ["r3hab99", "2iMPFX5Of7P8kjJDAKp87W"],
    "Modern HipHop": ["chominsf", "7dq5OB5HALss0ae3BmdC0k"],
    "Luke Cage Soundtrack": ["g0u1d1e1", "6CdBcKJ5vXXkWJfmC45kqB"]
}

function writeStartButtons() {
    $.each(genres, function(k, v) {
        $("#startButtons").append("<button type='button' class='btn btn-primary btn-lg startButton' id='" + k + "' value='" + v + "'>" + k);
    });
}

function prepSongs(x, y) {
      console.log("made it to prep");
        var queryURL = "https://api.spotify.com/users/" + genres[x][0] + "/playlists/" + genres[x][1]
    return $.ajax({
      url: queryURL
    })



}

//Events
//Starting Event

writeStartButtons();

//Click Events

// Click a genre to start the game
$(".startButton").click(function() {
prepSongs(this.id, this.value);
});
});



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
