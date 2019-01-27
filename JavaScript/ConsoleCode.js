var shiftPressed = false;

var possibleCommands = ["projects", "cv", "help", "about",  "clear", "biography", "title", "progxp", "links", "github", "youtube", "twitch", "facebook", "reddit", "bookmarks"];


var userInput = "";
var suggestion = "";
var cursorPos = 0;
var cursorShowing;

function updateUserInput() {
    var tempString;

	if (userInput == "") {
		suggestion = "";
	} else {
		for (var i = 0; i < possibleCommands.length; i++) {
			if (possibleCommands[i].length < userInput.length) {
				suggestion = "";
			} else if (possibleCommands[i].startsWith(userInput)) {
				suggestion = possibleCommands[i].substring(userInput.length, possibleCommands[i].length);
				break;
			}
		}
	}



	if (suggestion) {
		tempString = userInput + suggestion;
		if (cursorPos < userInput.length) {
			document.getElementById("userInput").innerHTML = tempString.substring(0, cursorPos) + "<u>" + tempString.charAt(cursorPos) + "</u>" + tempString.substring(cursorPos + 1, userInput.length);

			document.getElementById("suggestion").innerHTML = suggestion;
		} else {
			document.getElementById("userInput").innerHTML = userInput;

			document.getElementById("suggestion").innerHTML = "<u>" + suggestion.charAt(0) + "</u>" + suggestion.substring(1, suggestion.length);
		}
	} else {
		tempString = userInput + " ";
		document.getElementById("userInput").innerHTML = tempString.substring(0, cursorPos) + "<u>" + tempString.charAt(cursorPos) + "</u>" + tempString.substring(cursorPos + 1, userInput.length);

		document.getElementById("suggestion").innerHTML = "";
	}

    //document.getElementById("test").innerHTML = "ui: " + userInput + ", sug: " + suggestion;
}

window.onload = function() {
    title();
    help();

    updateUserInput();
}

window.onkeyup = function(e) {
    var keyCode = event.keyCode;

    if (shiftPressed == true && keyCode == 16) {
        shiftPressed = false;
    }



}

function typeChar(keyCode) {
	var character;
	switch(keyCode) {
		case 60:
			character = "&lt;";
		case 62:
			character = "&gt";
		case 34:
			character = "&quot";
		default:
			character = String.fromCharCode(keyCode);
	}
    userInput = userInput.substring(0, cursorPos) + character + userInput.substring(cursorPos, userInput.length);
    cursorPos++;
}

window.onkeydown = function(e) {
    var keyCode = event.keyCode;

    if (shiftPressed == false && keyCode == 16) {
        shiftPressed = true;
    }

    if (keyCode >= 65 && keyCode <= 90) {		//letter
        if (shiftPressed) {	//upper case letter
             typeChar(keyCode); //add ascii character ascii(key);
        } else {		//lower case letter
             typeChar(keyCode+32);//add ascii character ascii(key + 32);
        }
    } else if (keyCode >= 48 && keyCode <= 57) {	//number or number symbols
	if (shiftPressed) {	//upper case letter

        } else {		//lower case letter
             typeChar(keyCode);//add ascii character ascii(key + 32);
        }
    }

    if (keyCode == 37 && cursorPos > 0) {// left arrow
        cursorPos--;
    }

    if (keyCode == 39 && cursorPos < userInput.length) {	//right arrow
        cursorPos++;
        window.scrollTo(0,document.body.scrollWidth);
    }

    if (keyCode == 8 && cursorPos > 0) { //backspace
         userInput = userInput.substring(0, cursorPos - 1) + userInput.substring(cursorPos, userInput.length);
         cursorPos--;
    }

    if (keyCode == 46 && cursorPos < userInput.length) { //delete
         userInput = userInput.substring(0, cursorPos) + userInput.substring(cursorPos + 1, userInput.length);
    }



	if (keyCode == 188 || (keyCode >= 190&& keyCode <= 192)) { // comma, dot, slash keys
		if (shiftPressed) {
			//typeChar(keyCode - 128);	// Less than, greater than, Question mark
		} else {
			typeChar(keyCode - 144);	// comma, dot or slash
		}
    }

	if (keyCode == 221 || keyCode == 119) { // [ and ] keys
		if (shiftPressed) {
			typeChar(keyCode + 4);	// braces  {}
		} else {
			typeChar(keyCode - 28);	// brackets []
		}
    }

	if (keyCode == 222) { // quote key
		if (shiftPressed) {
			typeChar(34);	// double quote "
		} else {
			typeChar(39);	// single quote '
		}
    }

	if (keyCode == 186) { // ; key
		if (shiftPressed) {
			typeChar(58);	// :
		} else {
			typeChar(59);	// ;
		}
    }

	if (keyCode == 187) { // = key
		if (shiftPressed) {
			typeChar(43);	// +
		} else {
			typeChar(61);	// =
		}
    }

	if (keyCode == 189) { // - key
		if (shiftPressed) {
			typeChar(95);	// _
		} else {
			typeChar(45);	// -
		}
    }

	if (keyCode == 220) { // \ key
		if (shiftPressed) {
			typeChar(124);	//  pipe |
		} else {
			typeChar(92);	// backslash
		}
    }

	if (keyCode == 32) { //space
        typeChar(keyCode);
    }

    if (keyCode == 13) { //enter
         checkCommand(userInput + suggestion);
         userInput = "";
         cursorPos = 0;
    }

	if (keyCode == 9) { //tab
         userInput = userInput + suggestion;
		 suggestion = "";
         cursorPos = userInput.length;

		 event.stopPropagation();
    }

    updateUserInput();
}


function checkCommand(input) {
    outputLine(input);
     switch(input.toLowerCase()) {
         case "clear":
             clear();
             break;
         case "title":
             title();
             break;
         case "help":
             help();
             break;
         case "about":
             about();
             break;
         case "biography":
             biography();
             break;
         case "progxp":
             programming();
             break;
         case "hello world":
             helloWorld();
             break;
         case "links":
             links();
             break;
         case "workxp":
             workExperiance();
             break;
         case "cv":
             cv();
             break;
         case "github":
             website("https://github.com/SzyJ", "Github");
             break;
         case "youtube":
             website("https://www.youtube.com/feed/subscriptions", "YouTube");
             break;
         case "twitch":
             website("https://www.twitch.tv/directory/following", "Twitch");
             break;
         case "recursion":
             website("http://www.szymonjackiewi.cz", "SJ");
             break;
         case "facebook":
             website("https://www.facebook.com/", "Facebook");
             break;
         case "reddit":
             website("https://www.reddit.com/", "Reddit");
             break;
		 case "bookmarks":
             website("http://szymonjackiewi.cz/homepage./", "homepage");
             break;
		 case "projects":
             projectList();
             break;
         default:
             outputAppLine("Console", "Unrecognised Command (type 'help' for command list)");
     }
}

function outputLine(string) {
    var ul = document.getElementById("trace");
    var li = document.createElement("li");
    li.className = "usr";
    li.appendChild(document.createTextNode(" " + string));
    ul.appendChild(li);
    document.getElementById("trace").lastChild.innerHTML = " " + string;
    window.scrollTo(0,document.body.scrollHeight);
}

function outputAppLine(appName, string) {
    var ul = document.getElementById("trace");
    var li = document.createElement("li");
    li.className = "cmd";
    li.appendChild(document.createTextNode(string));
    ul.appendChild(li);
    document.getElementById("trace").lastChild.innerHTML = string;
    window.scrollTo(0,document.body.scrollHeight);
}
