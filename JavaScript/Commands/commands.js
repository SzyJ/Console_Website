var name;
var commandList = ["clear", "about", "help", "biography", "title", "progxp", "links", "projects", "cv"];
function about() {
    name = "about";
    outputAppLine(name, "Website designed and implemented enirely by me. Purely made for fun!");
    outputAppLine(name, "Original idea concept credit: Baizel Mathew, tyty bro!");
}

function biography() {
    name = "biography";
    outputAppLine(name, "Occupation: Undergraduate Student");
    outputAppLine(name, "University: Newcastle University");
    outputAppLine(name, "Course: Computer Science (Msc Games Engeneering)");
    outputAppLine(name, "Previous Work Experiance: CEX Shop Assistant");
    outputAppLine(name, "                          EventPad Research Intern");
    outputAppLine(name, "                          Installation of low voltage appliances");
    outputAppLine(name, " ");
    outputAppLine(name, "Spoken Languages: English (prefered, fluent), Polish (fluent), Japanese (beginner)");
    outputAppLine(name, "Live in: Newcastle-Upon-Tyne & Manchester");
    outputAppLine(name, "Hobbies: Making things in Photoshop");
    outputAppLine(name, "         Programming");
    outputAppLine(name, "         Drinking and brewing Tea");
    outputAppLine(name, "         Skiing and Skydiving");
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
    outputAppLine(name, ".d88888b                                                           dP                   dP       oo                     oo                               dP   dP   dP          dP                                       "); 
    outputAppLine(name, "88.    \"'                                                          88                   88                                                               88   88   88          88                                       ");
    outputAppLine(name, "`Y88888b. d888888b dP    dP 88d8b.d8b. .d8888b. 88d888b.           88 .d8888b. .d8888b. 88  .dP  dP .d8888b. dP  dP  dP dP .d8888b. d888888b             88  .8P  .8P .d8888b. 88 .d8888b. .d8888b. 88d8b.d8b. .d8888b. ");
    outputAppLine(name, "      `8b    .d8P' 88    88 88'`88'`88 88'  `88 88'  `88           88 88'  `88 88'  `\"\" 88888\"   88 88ooood8 88  88  88 88 88'  `\"\"    .d8P'    88888888 88  d8'  d8' 88ooood8 88 88'  `\"\" 88'  `88 88'`88'`88 88ooood8 ");
    outputAppLine(name, "d8'   .8P  .Y8P    88.  .88 88  88  88 88.  .88 88    88    88.  .d8P 88.  .88 88.  ... 88  `8b. 88 88.  ... 88.88b.88' 88 88.  ...  .Y8P                88.d8P8.d8P  88.  ... 88 88.  ... 88.  .88 88  88  88 88.  ... ");
    outputAppLine(name, " Y88888P  d888888P `8888P88 dP  dP  dP `88888P' dP    dP     `Y8888'  `88888P8 `88888P' dP   `YP dP `88888P' 8888P Y8P  dP `88888P' d888888P             8888' Y88'   `88888P' dP `88888P' `88888P' dP  dP  dP `88888P' ");
    outputAppLine(name, "oooooooooooooooooooo~~~~.88~oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
    outputAppLine(name, "                     d8888P                                                                                                                                                                                             ");
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
    outputAppLine(name, "     Language  |        Beginner    Familiar   Proficient   Expert      Master");
    outputAppLine(name, "---------------+-----------+-----------+-----------+-----------+-----------+");
    outputAppLine(name, "       VB.net  |=========================|");
    outputAppLine(name, "         Java  |=====================================================|");
    outputAppLine(name, "   HTML & CSS  |=============================|");    
    outputAppLine(name, "   JavaScript  |=======================================|");
    outputAppLine(name, "            C  |=============|");
    
}

function links() {
    name = "links";
    outputAppLine(name, "<a href = \"https://www.facebook.com/szymon.jackiewicz.54\" target=\"_blank\">&#8594 Facebook &#8592</a>");
    outputAppLine(name, "<a href = \"https://github.com/SzyJ\" target=\"_blank\">&#8594 Github &#8592</a>");
    outputAppLine(name, "<a href = \"https://uk.linkedin.com/in/szymon-jackiewicz-331698100\" target=\"_blank\">&#8594 LinkedIn &#8592</a>");
    outputAppLine(name, "<a href = \"mailto:szy.jackiewicz@gmail.com\" target=\"_blank\">&#8594 E-mail me &#8592</a>");
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
	outputAppLine(name, "My Github project repository: <a href = \"https://github.com/SzyJ?tab=repositories\" target=\"_blank\">&#8594 Github &#8592</a>");
	outputAppLine(name, "Web Design CSS tutorial webiste: <a href = \"Projects/CSS Tool/Colours and Backgrounds.html\" target=\"_blank\">&#8594 CSS Tool &#8592</a>");
}



