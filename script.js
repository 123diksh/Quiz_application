 let index =0;
 let attempt=0;
 let score=0;
 let questions = question.sort(function(){ 
  return 0.5-Math.random();
 });
 let totalQuestion=question.length;
//timer code
$(function() {
    let totaltime = 200;
    let min=0;
    let sec=0;
    let counter=0;
    let timer = setInterval(function() {
      counter++;
      min=Math.floor((totaltime-counter)/60);
      sec=totaltime-min*60-counter;
            $("#timerBox span").text(min+":"+sec);
            if(counter==totaltime){
              alert("times up");
               result();
               clearInterval(timer);
            }
        }, 1000);

        printQuestion(index);
});
// function print start
    function printQuestion(i){
        $(".questionBox").text(questions[i].question);
        $(".optionBox span").eq(0).text(question[i].option[0]);
        $(".optionBox span").eq(1).text(question[i].option[1]);
        $(".optionBox span").eq(2).text(question[i].option[2]);
        $(".optionBox span").eq(3).text(question[i].option[3]);
}
function checkAnswer(option){
  attempt++;
  let optionClicked=$(option).data("opt");
  console.log(question[index]);
  if(optionClicked ==question[index].answer){
    $(option).addClass("right");
    score++;
  }else{
   $(option).addClass("wrong");
    // wrong++;
 }
   $(".scoreBox span").text(score);
   $(".optionBox span").removeAttr("onclick");
  }
  function showNext(){
    if(index >= question.length-1){
        showResult(0);
        return;
    }
     index++;
     $(".optionBox span").removeClass();
     $(".optionBox span").attr("onclick","checkAnswer(this)");
     printQuestion(index);

  }
    function showResult(j){
      let resultText = `You have answered ${attempt} out of ${totalQuestion} questions. Your score is ${score}.`;
      if (score < totalQuestion / 2) {
       resultText += " Better luck next time!";
      } else {
      resultText += " Well done!";
        }
      $("#resultText").text(resultText);

    }
      function result(){
      $("#questionScreen").hide();
      $("#resultscreen").show();
      $("#totalQuestion").text(`Total Questions: ${totalQuestion}`);
      $("#attemptQuestion").text(`Attempted Questions: ${attempt}`);
      $("#correctQuestion").text(`Correct Answers: ${score}`);
      $("#wrongQuestion").text(`Incorrect Answers: ${attempt - score}`);
      
  };
