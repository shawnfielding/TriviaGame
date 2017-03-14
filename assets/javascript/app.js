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
                    $("#startButtons").append("<button type='button' class='btn btn-primary btn-lg startButton' id='" + k + "' value='" + v + "'>" + k + "</button>");
                });
            }

            function prepSongs(x, y) {
                // first get 10 random songs from the genre
                // to do that, get ten unique random numbers
                // getRandomQuestions(x)
                console.log(getRandomQuestions(x))
                //  giveRandomArray()
                console.log(x);

                console.log(genres[x]);
                console.log(y);
                //  var thetitle = classicRock.length;
                // console.log(classicRock.tracks.items[1].track.name);
                // console.log(classicRock.tracks.items[1].track.artists[0].name);
                // console.log(classicRock.tracks.items[1].track.album.name);
                // console.log(classicRock.tracks.items[1].track.album.images[0].url);
                // console.log(classicRock.tracks.items[1].track.href);
                // console.log(classicRock.tracks.items[1].track.preview_url);
            }



            //Events
            //Starting Event
            console.log("j");
            writeStartButtons();

            //Click Events

            // Click a genre to start the game
            $(".startButton").click(function() {
                prepSongs(this.id, this.value);

            });
            //
            // function randomOrder(x) {
            //     var tmp = x;
            //     var rndtmp = [];
            //     for (var i = 0; i < tmp.length; i++) {
            //         n = Math.floor((Math.random) * (tmp.length - 1));
            //         rndtmp.push(tmp.splice(n, 1));
            //     }
            //     return rndtmp;
            // }

            function getRandomQuestions(p) {
                console.log(genres[p][2].tracks.items);
                var x = Math.floor((Math.random() * (genres[p][2].tracks.items).length) / 10);
                console.log(x);
                var songQ = [];
                    var q = 0;
                    if (songQ.length == 0) {
                        q = 1;
                    }
                    $.each(genres[p][2].tracks.items, function() {
                            if (q == x && songQ.length<10) {
                                songD = [this.track.name, this.track.artists[0].name, this.track.album.name, this.track.album.images[0].url, this.track.preview_url];
                                songQ.push(songD);
                                q=1;
                                x = Math.floor((Math.random() * (genres[p][2].tracks.items).length) / 10);
                            }else{
                              q++;
                            }
                    })
                    return songQ;

            }

      })




        // console.log(classicRock.tracks.items[1].track.artists[0].name           console.log(classicRock.tracks.items[1].track.album.name       console.log(classicRock.tracks.items[1].track.album.images[0].url);
        // console.log(classicRock.tracks.items[1].track.href);
        // console.log(classicRock.tracks.items[1].track.preview_url);

















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
