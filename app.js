window.onload = function(){

let model = {currentColor:""};

let makeGrid = function (){

	let rowInputElem = document.getElementById('rows');
	let columnInputElem = document.getElementById('columns');
	let rows = parseInt(rowInputElem.value,10);
	let columns = parseInt(columnInputElem.value,10);

	let canvasElem = document.getElementById('canvas');
	canvasElem.style.width = (columns*22).toString()+"px";

	canvas.innerHTML = ""; //clear grid


	canvasElem.addEventListener('click', function(event){
		//delegate events from parent canvas to individuals cells

		if(event.target && event.target.className === "cell"){
			event.target.style.backgroundColor = model.currentColor;
		}
	});

	for (let i = 0; i<rows;i++){

		let rowElem = document.createElement('div');
		rowElem.setAttribute('class', 'row');
		rowElem.setAttribute('id', 'row'+i.toString());

		for (let j = 0; j< columns;j++){

			let cell = document.createElement('div');
			cell.setAttribute("id", i.toString()+' '+j.toString());
			cell.setAttribute("class", "cell");

			rowElem.appendChild(cell);
		}

		canvasElem.appendChild(rowElem);
	}
}

let init = function(){

	//set initial currentColor and keep updated with event listener

	let colorPickerElem = document.getElementById('color-picker');
	model.currentColor = colorPickerElem.value;
	colorPickerElem.addEventListener('input', function(){
		model.currentColor = colorPickerElem.value;
	})

	//draw grid based on default values of rows and columns
	makeGrid();

	//add evenet listener to redraw grid based on user input
	let buttonElem = document.getElementById('generate-canvas');
	buttonElem.addEventListener('click', makeGrid)
}

init();

}