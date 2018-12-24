var name;
var commandList = ["projects", "cv", "clear", "about", "help", "biography", "title", "progxp", "links"];
function about() {
    name = "about";
    outputAppLine(name, "Website designed and implemented enirely by me. Purely made for fun!");
    outputAppLine(name, "Original idea concept credit: Baizel Mathew, tyty bro!");
	outputAppLine(name, "Icons made by <a href=\"https://www.freepik.com/\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" 			    title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\" 			    title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a>");
	
	
}

function biography() {
    name = "biography";
    outputAppLine(name, "Occupation:       Undergraduate Student");
    outputAppLine(name, "University:       Newcastle University");
    outputAppLine(name, "Course:           Computer Science (MComp Games Engeneering) 3rd Year");
    outputAppLine(name, "Work Experiance:  PCMS Software Developer");
    outputAppLine(name, "                  CEX Shop Assistant");
    outputAppLine(name, "                  EventPad Research Intern");
    outputAppLine(name, "                  Installation of low voltage appliances");
    outputAppLine(name, " ");
    outputAppLine(name, "Spoken Languages: English (prefered, fluent), Polish (fluent), Japanese (beginner)");
    outputAppLine(name, "Live in:          Newcastle-Upon-Tyne & Manchester");
    outputAppLine(name, "Hobbies:          Making things in Photoshop");
    outputAppLine(name, "                  Programming");
    outputAppLine(name, "                  Drinking and brewing Tea");
    outputAppLine(name, "                  Skiing and Skydiving");
} 

function clear() {
    document.getElementById("trace").innerHTML = "";
}

function help() {
    name = "help";
    var commandListString = "Commands: ";
    outputAppLine(name, "Welcome to my website! please try the following commands to learn more.");
    for (var i = 0; i < commandList.length; i++) {
        commandListString = commandListString + "<span class=\"standout\">" + commandList[i] + "</span>";
		if (i < commandList.length -1) {
			commandListString = commandListString + " | ";
		}
    }
    outputAppLine(name, commandListString);
} 

function title() {
    name = "title";
	

 



	
	
	
	outputAppLine(name, " __                                                ");
	outputAppLine(name, "(_  _  \\/__  _ __      | _  _  |  o  _     o  _  _ ");
	outputAppLine(name, "__) /_ / |||(_)| |   \\_|(_|(_  |< | (/_\\^/ | (_  /_");
	
	

}

function helloWorld() {
    name = "E";
    var reply = Math.random() * 4
    switch(Math.floor((Math.random() * 4) + 1)) {
         case 1:
             outputAppLine(name, "Hi! How are you doing?");
             break;
         case 2:
             outputAppLine(name, "Hello =)");
             break;
         case 3:
             outputAppLine(name, "Hey there!");
             break;
         default:
             outputAppLine(name, "Beep... Boop...");
             break;
    }
}

function programming() {
    name = "progXP";
    outputAppLine(name, "     Language  |        Beginner    Familiar   Proficient    Expert      Master");
    outputAppLine(name, "---------------+-----------+-----------+-----------+-----------+-----------+");
    outputAppLine(name, "       VB.net  |=========================|");
    outputAppLine(name, "         Java  |=====================================================|");
    outputAppLine(name, "   HTML & CSS  |=============================|");    
    outputAppLine(name, "   JavaScript  |==================================|");
    outputAppLine(name, "      C / C++  |====================================================|");
	outputAppLine(name, " GLSL Shaders  |============================|");
}

function technologies() {
    name = "techXP";
    outputAppLine(name, "Worked on Dynamic Webapps and PWAs using Angular and React");
}

function links() {
    name = "links";
	
    outputAppLine(name, "<img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNkRGMDsiIHBvaW50cz0iMjMzLjczOSwwIDIzMy43MzksMzMuMzkxIDIwMC4zNDgsMzMuMzkxIDIwMC4zNDgsNjYuNzgzIDE2Ni45NTcsNjYuNzgzIDE2Ni45NTcsMTY2Ljk1NyAgIDEwMC4xNzQsMTY2Ljk1NyAxMDAuMTc0LDI4OS4zOTEgMTY2Ljk1NywyODkuMzkxIDE2Ni45NTcsNTEyIDMwMC41MjIsNTEyIDMwMC41MjIsMjg5LjM5MSAzNjcuMzA0LDI4OS4zOTEgMzY3LjMwNCwxNjYuOTU3ICAgMzAwLjUyMiwxNjYuOTU3IDMwMC41MjIsMTIyLjQzNSA0MTEuODI2LDEyMi40MzUgNDExLjgyNiwwICIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgcG9pbnRzPSIyMzMuNzM5LDAgMjMzLjczOSwzMy4zOTEgMjAwLjM0OCwzMy4zOTEgMjAwLjM0OCw2Ni43ODMgMTY2Ljk1Nyw2Ni43ODMgMTY2Ljk1NywxMDAuMTc0ICAgMjMzLjczOSwxMDAuMTc0IDIzMy43MzksNjYuNzgzIDI2Ny4xMyw2Ni43ODMgMjY3LjEzLDAgIi8+Cjxwb2x5Z29uIHBvaW50cz0iMjMzLjczOSwwIDIzMy43MzksMzMuMzkxIDM3OC40MzUsMzMuMzkxIDM3OC40MzUsODkuMDQzIDMwMC41MjIsODkuMDQzIDMwMC41MjIsMTIyLjQzNSA0MTEuODI2LDEyMi40MzUgICA0MTEuODI2LDAgIi8+CjxyZWN0IHg9IjIwMC4zNDgiIHk9IjMzLjM5MSIgd2lkdGg9IjMzLjM5MSIgaGVpZ2h0PSIzMy4zOTEiLz4KPHBvbHlnb24gcG9pbnRzPSIyNjcuMTMsMjAwLjM0OCAzMzMuOTEzLDIwMC4zNDggMzMzLjkxMywyNTYgMjY3LjEzLDI1NiAyNjcuMTMsNDc4LjYwOSAyMDAuMzQ4LDQ3OC42MDkgMjAwLjM0OCwyNTYgMTMzLjU2NSwyNTYgICAxMzMuNTY1LDIwMC4zNDggMjAwLjM0OCwyMDAuMzQ4IDIwMC4zNDgsNjYuNzgzIDE2Ni45NTcsNjYuNzgzIDE2Ni45NTcsMTY2Ljk1NyAxMDAuMTc0LDE2Ni45NTcgMTAwLjE3NCwyODkuMzkxIDE2Ni45NTcsMjg5LjM5MSAgIDE2Ni45NTcsNTEyIDMwMC41MjIsNTEyIDMwMC41MjIsMjg5LjM5MSAzNjcuMzA0LDI4OS4zOTEgMzY3LjMwNCwxNjYuOTU3IDMwMC41MjIsMTY2Ljk1NyAzMDAuNTIyLDEyMi40MzUgMjY3LjEzLDEyMi40MzUgIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\" /> <a href = \"https://www.facebook.com/szymon.jackiewicz.54\" target=\"_blank\">Facebook</a>");
    outputAppLine(name, "<img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGREU0NjsiIHBvaW50cz0iNDc4LjYwOSw2Ni43ODMgNDc4LjYwOSwzMy4zOTEgMTc4LjA4NywzMy4zOTEgMTc4LjA4Nyw2Ni43ODMgMTQ0LjY5Niw2Ni43ODMgICAxNDQuNjk2LDEwMC4xNzQgMCwxMDAuMTc0IDAsNDc4LjYwOSA1MTIsNDc4LjYwOSA1MTIsMTQ0LjY5NiA1MTIsMTAwLjE3NCA1MTIsNjYuNzgzICIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgcG9pbnRzPSI1MTIsMTAwLjE3NCA2Ni43ODMsMTAwLjE3NCAwLDEwMC4xNzQgMCwxNjYuOTU3IDAsNDc4LjYwOSA2Ni43ODMsNDc4LjYwOSA2Ni43ODMsMTY2Ljk1NyAgIDUxMiwxNjYuOTU3ICIvPgo8cGF0aCBkPSJNNTEyLDY2Ljc4M2gtMzMuMzkxdjMzLjM5MUgxNzguMDg3VjY2Ljc4M2gtMzMuMzkxdjMzLjM5MUgwdjMzLjM5MWwwLDB2MzExLjY1MmwwLDB2MzMuMzkxbDAsMGwwLDBoMzMuMzkxbDAsMEg1MTJsMCwwbDAsMCAgVjY2Ljc4M3ogTTMzLjM5MSwxMzMuNTY1aDExMS4zMDRoMzMuMzkxaDMwMC41MjJ2MzExLjY1MkgzMy4zOTFWMTMzLjU2NXoiLz4KPHJlY3QgeD0iMTc4LjA4NyIgeT0iMzMuMzkxIiB3aWR0aD0iMzAwLjUyMiIgaGVpZ2h0PSIzMy4zOTEiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\" /> <a href = \"https://github.com/SzyJ\" target=\"_blank\">Github</a>");
    outputAppLine(name, "<img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cmVjdCB5PSIxNjYuOTU3IiBzdHlsZT0iZmlsbDojMDA0RkFDOyIgd2lkdGg9IjEzMy41NjUiIGhlaWdodD0iMzQ1LjA0MyIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNEZBQzsiIHBvaW50cz0iMTAwLjE3NCwzMy4zOTEgMTAwLjE3NCwwIDMzLjM5MSwwIDMzLjM5MSwzMy4zOTEgMCwzMy4zOTEgMCwxMDAuMTc0IDMzLjM5MSwxMDAuMTc0ICAgIDMzLjM5MSwxMzMuNTY1IDEwMC4xNzQsMTMzLjU2NSAxMDAuMTc0LDEwMC4xNzQgMTMzLjU2NSwxMDAuMTc0IDEzMy41NjUsMzMuMzkxICAiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMwMDRGQUM7IiBwb2ludHM9IjQ3OC42MDksMjMzLjczOSA0NzguNjA5LDIwMC4zNDggNDQ1LjIxNywyMDAuMzQ4IDQ0NS4yMTcsMTY2Ljk1NyAxNzguMDg3LDE2Ni45NTcgICAgMTc4LjA4Nyw1MTIgMzAwLjUyMiw1MTIgMzAwLjUyMiwzMDAuNTIyIDM4OS41NjUsMzAwLjUyMiAzODkuNTY1LDUxMiA1MTIsNTEyIDUxMiwyMzMuNzM5ICAiLz4KPC9nPgo8Zz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjMzLjM5MSwwIDMzLjM5MSwzMy4zOTEgMCwzMy4zOTEgMCw2Ni43ODMgMzMuMzkxLDY2Ljc4MyA2Ni43ODMsNjYuNzgzIDY2Ljc4MywzMy4zOTEgICAgNjYuNzgzLDAgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iMjY3LjEzLDE2Ni45NTcgMjY3LjEzLDIzMy43MzkgMzAwLjUyMiwyMzMuNzM5IDMzMy45MTMsMjMzLjczOSAzMzMuOTEzLDIwMC4zNDggICAgMzMzLjkxMywxNjYuOTU3ICAiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjE3OC4wODcsMTY2Ljk1NyAxNzguMDg3LDIzMy43MzkgMjExLjQ3OCwyMzMuNzM5IDI0NC44NywyMzMuNzM5IDI0NC44NywyMDAuMzQ4ICAgIDI0NC44NywxNjYuOTU3ICAiLz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjAsMTY2Ljk1NyAwLDIzMy43MzkgMzMuMzkxLDIzMy43MzkgNjYuNzgzLDIzMy43MzkgNjYuNzgzLDIwMC4zNDggNjYuNzgzLDE2Ni45NTcgICIvPgo8L2c+Cjxwb2x5Z29uIHBvaW50cz0iMjY3LjEzLDQ3OC42MDkgMjExLjQ3OCw0NzguNjA5IDIxMS40NzgsMjAwLjM0OCAyNjcuMTMsMjAwLjM0OCAyNjcuMTMsMjMzLjczOSAzMDAuNTIyLDIzMy43MzkgMzAwLjUyMiwyMDAuMzQ4ICAgNDQ1LjIxNywyMDAuMzQ4IDQ0NS4yMTcsMTY2Ljk1NyAxNzguMDg3LDE2Ni45NTcgMTc4LjA4Nyw1MTIgMzAwLjUyMiw1MTIgMzAwLjUyMiwzMDAuNTIyIDI2Ny4xMywzMDAuNTIyICIvPgo8cG9seWdvbiBwb2ludHM9IjQ3OC42MDksMjMzLjczOSA0NzguNjA5LDQ3OC42MDkgNDIyLjk1Nyw0NzguNjA5IDQyMi45NTcsMzAwLjUyMiAzODkuNTY1LDMwMC41MjIgMzg5LjU2NSw1MTIgNTEyLDUxMiAgIDUxMiwyMzMuNzM5ICIvPgo8cGF0aCBkPSJNMCwxNjYuOTU3VjUxMmgxMzMuNTY1VjE2Ni45NTdIMHogTTEwMC4xNzQsNDc4LjYwOUgzMy4zOTFWMjAwLjM0OGg2Ni43ODNWNDc4LjYwOXoiLz4KPHJlY3QgeD0iMzMuMzkxIiB3aWR0aD0iNjYuNzgzIiBoZWlnaHQ9IjMzLjM5MSIvPgo8cmVjdCB4PSIzMy4zOTEiIHk9IjEwMC4xNzQiIHdpZHRoPSI2Ni43ODMiIGhlaWdodD0iMzMuMzkxIi8+CjxyZWN0IHk9IjMzLjM5MSIgd2lkdGg9IjMzLjM5MSIgaGVpZ2h0PSI2Ni43ODMiLz4KPHJlY3QgeD0iMTAwLjE3NCIgeT0iMzMuMzkxIiB3aWR0aD0iMzMuMzkxIiBoZWlnaHQ9IjY2Ljc4MyIvPgo8cmVjdCB4PSI0NDUuMjE3IiB5PSIyMDAuMzQ4IiB3aWR0aD0iMzMuMzkxIiBoZWlnaHQ9IjMzLjM5MSIvPgo8cmVjdCB4PSIzMDAuNTIyIiB5PSIyNjcuMTMiIHdpZHRoPSI4OS4wNDMiIGhlaWdodD0iMzMuMzkxIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\" /> <a href = \"https://uk.linkedin.com/in/szymon-jackiewicz-331698100\" target=\"_blank\">LinkedIn</a>");
    outputAppLine(name, "<img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHJlY3QgeT0iNzcuOTEzIiBzdHlsZT0iZmlsbDojMDA2REYzOyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSIzNTYuMTc0Ii8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFMEUzRkE7IiBwb2ludHM9IjUxMiwxNDQuNjk2IDUxMiw3Ny45MTMgMCw3Ny45MTMgMCwxNDQuNjk2IDMzLjM5MSwxNDQuNjk2IDMzLjM5MSwxNzguMDg3IDY2Ljc4MywxNzguMDg3ICAgNjYuNzgzLDIxMS40NzggMTAwLjE3NCwyMTEuNDc4IDEwMC4xNzQsMjQ0Ljg3IDEzMy41NjUsMjQ0Ljg3IDEzMy41NjUsMjc4LjI2MSAxODkuMjE3LDI3OC4yNjEgMTg5LjIxNywzMTEuNjUyIDMyMi43ODMsMzExLjY1MiAgIDMyMi43ODMsMjc4LjI2MSAzNzguNDM1LDI3OC4yNjEgMzc4LjQzNSwyNDQuODcgNDExLjgyNiwyNDQuODcgNDExLjgyNiwyMTEuNDc4IDQ0NS4yMTcsMjExLjQ3OCA0NDUuMjE3LDE3OC4wODcgNDc4LjYwOSwxNzguMDg3ICAgNDc4LjYwOSwxNDQuNjk2ICIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgcG9pbnRzPSI1MTIsNzcuOTEzIDU1LjY1Miw3Ny45MTMgMCw3Ny45MTMgMCwxMzMuNTY1IDAsNDM0LjA4NyA1NS42NTIsNDM0LjA4NyA1NS42NTIsMTMzLjU2NSAgIDUxMiwxMzMuNTY1ICIvPgo8cmVjdCB4PSI2Ni43ODMiIHk9IjE3OC4wODciIHdpZHRoPSIzMy4zOTEiIGhlaWdodD0iMzMuMzkxIi8+CjxyZWN0IHg9IjEwMC4xNzQiIHk9IjIxMS40NzgiIHdpZHRoPSIzMy4zOTEiIGhlaWdodD0iMzMuMzkxIi8+CjxyZWN0IHg9IjEzMy41NjUiIHk9IjI0NC44NyIgd2lkdGg9IjU1LjY1MiIgaGVpZ2h0PSIzMy4zOTEiLz4KPHJlY3QgeD0iNDExLjgyNiIgeT0iMTc4LjA4NyIgd2lkdGg9IjMzLjM5MSIgaGVpZ2h0PSIzMy4zOTEiLz4KPHJlY3QgeD0iMzc4LjQzNSIgeT0iMjExLjQ3OCIgd2lkdGg9IjMzLjM5MSIgaGVpZ2h0PSIzMy4zOTEiLz4KPHJlY3QgeD0iMzIyLjc4MyIgeT0iMjQ0Ljg3IiB3aWR0aD0iNTUuNjUyIiBoZWlnaHQ9IjMzLjM5MSIvPgo8cmVjdCB4PSIxODkuMjE3IiB5PSIyNzguMjYxIiB3aWR0aD0iMTMzLjU2NSIgaGVpZ2h0PSIzMy4zOTEiLz4KPHBhdGggZD0iTTAsNzcuOTEzdjM1Ni4xNzRoNTEyVjc3LjkxM0gweiBNNDc4LjYwOSwxNDQuNjk2aC0zMy4zOTF2MzMuMzkxaDMzLjM5MXYyMjIuNjA5SDMzLjM5MVYxNzguMDg3aDMzLjM5MXYtMzMuMzkxSDMzLjM5MSAgdi0zMy4zOTFoNDQ1LjIxN1YxNDQuNjk2eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K\" /> <a href = \"mailto:szy.jackiewicz@gmail.com\" target=\"_blank\">E-mail me</a>");
}

function workExperiance() {
    name = "workXP";
    outputAppLine(name, "To be added, check back later!! =)");
}

function cv() {
    name = "CV";
    outputAppLine(name, "-------------------");
    outputAppLine(name, "---  <span class=\"standout\">Biography</span>  ---");
    outputAppLine(name, "-------------------");
    biography();
    
    name = "CV";
    outputAppLine(name, " ");
    outputAppLine(name, "--------------------------------");
    outputAppLine(name, "---  <span class=\"standout\">Programming Experiance</span>  ---");
    outputAppLine(name, "--------------------------------");
    programming();

    name = "CV";
    outputAppLine(name, " ");
    outputAppLine(name, "-----------------");
    outputAppLine(name, "---  <span class=\"standout\">Contact</span>  ---");
    outputAppLine(name, "-----------------");
    links();
}

function website(url, website) {
    name = website;
    outputAppLine(name, "Opening...");
    window.open(url, '_blank').focus();
}



function projectList() {
	name = "Projects";
	outputAppLine(name, "University 3rd Year Dissertation: <a href = \"https://latexonline.cc/compile?git=https%3A%2F%2Fgithub.com%2FSzyJ%2FPeer-to-Peer_Game_Networking&target=Report%2Fmain.tex&command=pdflatex&trackId=1541076944260\" target=\"_blank\">LaTeX PDF</a> <a href = \"https://github.com/SzyJ/CH_GNAT\" target=\"_blank\">Project Link</a>");
	outputAppLine(name, "Customisable Bookmark launcher: <a href = \"homepage./index.html\" target=\"_blank\">homepage.</a> <a href = \"https://github.com/SzyJ/homepage./blob/master/README.md\" target=\"_blank\">HOW-TO</a>");
	outputAppLine(name, "Web Design CSS tutorial webiste: <a href = \"Projects/CSS Tool/Colours and Backgrounds.html\" target=\"_blank\">CSS Tool</a>");
	outputAppLine(name, "My Github project repository: <a href = \"https://github.com/SzyJ?tab=repositories\" target=\"_blank\">Github/SzyJ</a>");
}



