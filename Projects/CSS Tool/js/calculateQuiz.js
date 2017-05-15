"use strict";
 
	function calcQuiz(anwsers) {
		var noOfQuestions = anwsers.length;
		var correctQuestions = 0;
		for (var qNo = 0; qNo < noOfQuestions; qNo++) {
			if (document.getElementById("q"+(qNo + 1)+"a"+anwsers[qNo]).checked) {
				correctQuestions++;
			}
		}
		var percentage = Math.floor((correctQuestions/noOfQuestions)*100);
		var alertMessage = "Your quiz score: " + correctQuestions + "/" + noOfQuestions + ". This is " + percentage + "%.";
		
		if (percentage < 30) {
				alertMessage += " Do more research and try again!";
		} else if (percentage <= 50) {
				alertMessage += " not bad, but you could do better!";
		} else if (percentage > 70 && percentage < 100) {
				alertMessage += " good score!! why not try and get 100% though!!";
		} else if (percentage == 100){
				alertMessage += " perfect score!! good job!!";
		}
		alert(alertMessage);
	}