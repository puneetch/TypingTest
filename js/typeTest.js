
let submitBtn = document.querySelector("#submitBtn");
let TypingContent = document.querySelector(".TypingContent");
let typeArea = document.querySelector("#typeArea"); 
let resultTotal = document.querySelector('#resultTotal');

typeArea.disabled = true; 						 // for desable default Text Area      

let exercise = ["If you don't like a test prompt, you can get a different (random) prompt with the \"change test\" button - or select a specific paragraph to type from the list below.",'To find out how fast you type, just start typing in the blank textbox on the right of the test prompt.','Stimulate your mind as you test your typing speed with this standard English paragraph typing test.','Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.']
// console.log(exercise[2]);
let sartTime, EndTime;
	
const startPlay =() => {	
	let defaultval = Math.floor(Math.random()*exercise.length);  // random text from math method

	// TypingContent.innerHTML = exercise[0];
	TypingContent.innerHTML = exercise[defaultval];
	let randomText = exercise[defaultval];
	 console.log(randomText);

	let date = new Date();
	startTime = date.getTime();
	// console.log(sartTime);		
}

const endPlay = () =>{
	let date = new Date();
	EndTime = date.getTime();
	// console.log(EndTime);
	let totalTime = ((EndTime - startTime)/1000);
	console.log(totalTime);
	let totalWord = typeArea.value;
	let wordCount = wordCounter(totalWord);

	let speedCount = Math.round((wordCount / totalTime) * 60);
	// console.log(speedCount);
	let finalMsg = "you have typed " + speedCount + ' word per minute';

	finalMsg += compareWords(TypingContent.innerHTML, totalWord);

	resultTotal.innerText = finalMsg;
}

const compareWords = (string1, string2) =>{
	let words1 = string1.split(" ");
	let words2 = string2.split(" ");
	let ctn = 0;

	words1.forEach(function(item, index){
		if(item == words2[index]){
			ctn++;
		}
		let errorWords = (words1.length - ctn);
		return (ctn + " correct out of " + words1.length + " words and the total number error is " + errorWords +".");
	})
}

const wordCounter = (str) =>{
	let response = str.split(" ").length;
	console.log(response);
	return response;
}

submitBtn.addEventListener('click', function(){											
	if(this.innerHTML == 'Start'){
		typeArea.disabled = false;	 	// activate type area on start click				
		this.innerHTML = 'Done';
		startPlay();		          	// this function call for random paragraph text
		typeArea.value = '';
	}
	else if(this.innerHTML == 'Done'){
		typeArea.disabled = true;	 	// activate type area on start click	
		this.innerHTML = 'Start';	
		endPlay();	
		typeArea	
	}
});
