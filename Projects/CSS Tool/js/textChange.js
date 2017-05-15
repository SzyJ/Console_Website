"use strict";

var changed = false;

function modCols() {
	if (changed) {
		document.getElementById("newTC1").id = "tc1";
		document.getElementById("newTC2").id = "tc2";
		document.getElementById("newTC3").id = "tc3";
		changed = false;
		document.getElementById("cssChange").innerHTML = "change CSS";
	} else {
		document.getElementById("tc1").id = "newTC1";
		document.getElementById("tc2").id = "newTC2";
		document.getElementById("tc3").id = "newTC3";
		changed = true;
		document.getElementById("cssChange").innerHTML = "revert CSS";
	}
}