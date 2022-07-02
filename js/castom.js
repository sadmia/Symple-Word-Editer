"use stric";

var textaria = document.querySelector(".textViw");

var bold = document.querySelector(".bold");
var italic = document.querySelector(".italic");
var underline = document.querySelector(".underline");
var line_through = document.querySelector(".line-through");
var uppercase = document.getElementById('uppercase');
var lowercase = document.getElementById('lowercase');
var fontSizeInput = document.getElementById("fontSizeInput");
var lineHeightSizeInput = document.getElementById("lineHeightSizeInput");
var fontFelelySet = document.querySelector(".fontFelelySet");
var leftAlign = document.getElementById("left-align");
var centerAlign = document.getElementById("center-align");
var rightAlign = document.getElementById("right-align");

var boldBtnClick = 0;
bold.addEventListener("click", function(){
	boldBtnClick = boldBtnClick + 1;
	if (boldBtnClick == 1) {
		boldBtnClick = 1;
		bold.style.background = "#3332";
		textaria.style.fontWeight = "600";

	} else if (boldBtnClick = 2) {
		boldBtnClick = 0;
		bold.style.background = "#3330";
		textaria.style.fontWeight = "500";
	}
});

var initialBtnClick = 0;
italic.addEventListener("click", function(){
	initialBtnClick = initialBtnClick + 1;
	if (initialBtnClick == 1) {
		initialBtnClick = 1;
		italic.style.background = "#3332";
		textaria.style.fontStyle = "italic"

	} else if (initialBtnClick = 2) {
		initialBtnClick = 0;
		italic.style.background = "#3330";
		textaria.style.fontStyle = "initial"
	}
});

var underlineBtnClick = 0;
underline.addEventListener("click", function(){
	underlineBtnClick = underlineBtnClick + 1;
	if (underlineBtnClick == 1) {
		underlineBtnClick = 1;
		lineThroughBtnClick = 0;
		underline.style.background = "#3332";
		line_through.style.background = "#3330";
		textaria.style.textDecoration = "underline";

	} else if (underlineBtnClick = 2) {
		underlineBtnClick = 0;
		underline.style.background = "#3330";
		textaria.style.textDecoration = "initial";
	}
});


var lineThroughBtnClick = 0;
line_through.addEventListener("click", function(){
	lineThroughBtnClick = lineThroughBtnClick + 1;
	if (lineThroughBtnClick == 1) {
		lineThroughBtnClick = 1;
		underlineBtnClick = 0;
		line_through.style.background = "#3332";
		underline.style.background = "#3330";
		textaria.style.textDecoration = "line-through";

	} else if (lineThroughBtnClick = 2) {
		lineThroughBtnClick = 0;
		line_through.style.background = "#3330";
		textaria.style.textDecoration = "initial";
	}
});

var uppercaseBtnClick = 0;
uppercase.addEventListener("click", function(){
	uppercaseBtnClick = uppercaseBtnClick + 1;
	if (uppercaseBtnClick == 1) {
		uppercaseBtnClick = 1;
		lowercaseBtnClick = 0;
		uppercase.style.background = "#3332";
		lowercase.style.background = "#3330";
		textaria.style.textTransform = "uppercase";

	} else if (uppercaseBtnClick = 2) {
		uppercaseBtnClick = 0;
		uppercase.style.background = "#3330";
		textaria.style.textTransform = "none";
	}
});

var lowercaseBtnClick = 0;
lowercase.addEventListener("click", function(){
	lowercaseBtnClick = lowercaseBtnClick + 1;
	if (lowercaseBtnClick == 1) {
		lowercaseBtnClick = 1;
		uppercaseBtnClick = 0;
		lowercase.style.background = "#3332";
		uppercase.style.background = "#3330";
		textaria.style.textTransform = "lowercase";

	} else if (lowercaseBtnClick = 2) {
		lowercaseBtnClick = 0;
		lowercase.style.background = "#3330";
		textaria.style.textTransform = "none";
	}
});

fontSizeInput.addEventListener("input", function(){
	let fontSizeVlu = fontSizeInput.value;
	textaria.style.fontSize = fontSizeVlu+"px";
});

lineHeightSizeInput.addEventListener("input", function(){
	let lineHeightSizeValue = lineHeightSizeInput.value;
	textaria.style.lineHeight = lineHeightSizeValue;
});

fontFelelySet.addEventListener("input", function(){
	let fontValue = fontFelelySet.value;
	if (fontValue == "Arial") {
		textaria.style.fontFamily = "arial";
	} else if (fontValue == "Cursive") {
		textaria.style.fontFamily = "cursive";
	} else if (fontValue == "Fangsong") {
		textaria.style.fontFamily = "fangsong";
	} else if (fontValue == "Fantasy") {
		textaria.style.fontFamily = "fantasy";
	} else if (fontValue == "Inherit") {
		textaria.style.fontFamily = "inherit";
	} else if (fontValue == "Monospace") {
		textaria.style.fontFamily = "monospace";
	} else if (fontValue == "Orbitron Variable") {
		textaria.style.fontFamily = "Orbitron-Variable";
	} else if (fontValue == "Michroma Regular") {
		textaria.style.fontFamily = "Michroma-Regular";
	}
});


var leftAlignBtnClick = 0;
leftAlign.addEventListener("click", function(){
	leftAlignBtnClick = leftAlignBtnClick + 1;
	if (leftAlignBtnClick == 1) {
		leftAlignBtnClick = 1;
		centerAlignBtnClick = 0;
		rightAlignBtnClick = 0;
		leftAlign.style.background = "#3332";
		centerAlign.style.background = "#3330";
		rightAlign.style.background = "#3330";
		textaria.style.textAlign = "left";

	} else if (leftAlignBtnClick = 2) {
		leftAlignBtnClick = 0;
		leftAlign.style.background = "#3332";
		textaria.style.textAlign = "left";
	}
});

var centerAlignBtnClick = 0;
centerAlign.addEventListener("click", function(){
	centerAlignBtnClick = centerAlignBtnClick + 1;
	if (centerAlignBtnClick == 1) {
		centerAlignBtnClick = 1;
		leftAlignBtnClick = 0;
		rightAlignBtnClick = 0;
		centerAlign.style.background = "#3332";
		leftAlign.style.background = "#3330";
		rightAlign.style.background = "#3330";
		textaria.style.textAlign = "center";

	} else if (centerAlignBtnClick = 2) {
		centerAlignBtnClick = 0;
		centerAlign.style.background = "#3330";
		leftAlign.style.background = "#3332";
		textaria.style.textAlign = "left";
	}
});

var rightAlignBtnClick = 0;
rightAlign.addEventListener("click", function(){
	rightAlignBtnClick = rightAlignBtnClick + 1;
	if (rightAlignBtnClick == 1) {
		rightAlignBtnClick = 1;
		centerAlignBtnClick = 0;
		leftAlignBtnClick = 0;
		rightAlign.style.background = "#3332";
		centerAlign.style.background = "#3330";
		leftAlign.style.background = "#3330";
		textaria.style.textAlign = "right";

	} else if (rightAlignBtnClick = 2) {
		rightAlignBtnClick = 0;
		rightAlign.style.background = "#3330";
		leftAlign.style.background = "#3332";
		textaria.style.textAlign = "left";
	}
});


// textaria.addEventListener("anchor1x", function(){
// 	var value = textaria.value;
// 	console.log(value);
// });