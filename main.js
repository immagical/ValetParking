canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

carwidth = 75; 
carheight = 100; 

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carx = 5; 
cary = 225; 

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image; 

	greencar_imgTag = new Image(); 
	greencar_imgTag.onload = uploadgreencar; 
	greencar_imgTag.src = greencar_image; 
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, carx, cary, carwidth, carheight); 

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (cary > 100) {
		cary = cary - 10; 
	}
	add()
}

function down()
{
	if (cary < 230) {
		cary = cary + 10; 
	}
	add()
}

function left()
{
	if (carx > 75) {
		carx = carx - 10; 
	}
	add()
}

function right()
{
	if (carx < 715) {
		carx = carx + 10; 
	}
	add()
}
