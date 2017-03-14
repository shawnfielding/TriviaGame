$(document).ready(function() {
            var myid = "093f7438d30340b4989ada26fdd4af7b";
            var mysecret = 'd446d5cc07cd45a18bdf47695723306c';
            var myurl = "http://localhost:8888";



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
            var accessToken = "";

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
                runGame(this.id, this.value);
            });

            function runGame(k,v) {
              // populate 4 buttons.
              var songX = [];
              var songY = [];
              var rnd = 0
              for (var z = 0; z<4; z++){
                rnd = randomNumber((genres[k][2].tracks.items).length,1);
                songY.push(genres[k][2].tracks.items[rnd].track.name;
                songY.push(genres[k][2].tracks.items[rnd].track.artists[0].name;
                songY.push(genres[k][2].tracks.items[rnd].track.album.images[0].url;
                songY.push(genres[k][2].tracks.items[rnd].track.preview_url;
                songX.push(songY);
                $("songButtons").append("<button type='button' class='btn btn-primary btn-lg musicButton id='" + songY[4] + "' value='" + v + "'>" + + "</button>");
              }

                //songY[z].push(youtube)

                // Make the song buttons
                $("songButtons").append("<button type='button' class='btn btn-primary btn-lg musicButton id='" + k + "' value='" + v + "'>" +"</button>");










              }


              // play one of the four songButtons
              //start the countDown
              // on choice, determine if correct correct
              //if timeout, that is a miss
              //show right value in  green
                // If wrong one shows, show in red
              //calculate score

                $("songButtons").append("<button type='button' class='btn btn-primary btn-lg musicButton' id='" + k + "' value='" + v + "'>" + k + "</button>");
            });
              }

                    $.each(genres[p][2].tracks.items, function() {


                            if (q == x && songQ.length<41) {

                    })

                    //Now that songQ is fullthat the desk has been s
                    //replace the artist/Titlefor three of them
                    for (var g = 0; g < length-1; g++){
                      var c = Math.floor((Math.random() * (genres[p][2].tracks.items).length);

                    }
                    SongQ[6][-1].push(true);
                    return songQ;
                    }

            }
})

function randomNumber(hi,low){
  var x = Math.floor((Math.random()*(hi - low) + 1);
  return x
}





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
