$(document).ready(function() {
            var countNum = 10;
            var totalWins = 0;
            var totalLosses = 0;
            var q1 = {
                theQ: "Here is Question 1",
                right: "Here is the right answer.",
                wrong: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]
            }
            var q2 = {
                theQ: "Here is Question 1",
                right: "Here is the right answer.",
                wrong: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]
            }
            var q3 = {
                theQ: "Here is Question 1",
                right: "Here is the right answer.",
                wrong: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]
            }
            var q4 = {
                theQ: "Here is Question 1",
                right: "Here is the right answer.",
                wrong: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]
            }
            var q5 = {
                theQ: "Here is Question 1",
                right: "Here is the right answer.",
                wrong: ["wrong answer 1", "wrong answer 2", "wrong answer 3"]
            }

            var questions = [q1, q2, q3, q4, q5];

            function runGame()

            //var randomAnswers = []
            Randomize(questions);

            //show main screen

            //reset/start game


            //run through the questions each
            //show the answers
            //determine if answer is right or wrong or timed out.

            //end the game  again?





            function Randomize(x) {
                questions = randomOrder(x);
                console.log(questions)

            }



            function runTimer() {
                var countDown = setInterval(decrement, 1000);
            }

            function decrement() {
                countNum--;
                $(".timer").html(countNum);
                if (countNum === 0) {
                    endQuestion(0);
                }
            }

            function KeepTrackofWinsLosses() {
                $("#CurrentNumber").html(currentVal);
                $("#TotalWinsNumber").html(totalWins);
                $("#TotalLossesNumber").html(totalLosses);
            }

            function endQuestion(gotit) {
                if (gotit === 0) {
                    $(".timer").html("Times Up!");
                    totalLosses = TotalLosses++;
                } else if (gotit === 1) {
                    $(".timer").html("Oh bummer, wrong");
                    totalLosses = TotalLosses++;
                } else if (gotit === 2) {
                    $(".timer").html("RIGHT!!!");
                } else {
                    $(".timer").html("Something's gone horribly wrong.  Let me send you to the next question.");
                }
            }

            function showQs(q) {
                q.each()
                randomOrder(questions);
                var randomquestions = rndtmp;
            }

            function showAs(x) {




            }

            // This function randomizes the array inputted.
            // Used to control question order and answer order

            function randomOrder(x) {
                var tmp = x;
                var rndtmp = [];
                for (var i = 0; i < tmp.length; i++) {
                    n = Math.floor((Math.random) * (tmp.length - 1));
                    rndtmp.push(tmp.splice(n, 1));
                }
                return rndtmp;
            }
        })
