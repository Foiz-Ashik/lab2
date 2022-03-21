var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined
};

Scene.start = function () {
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");


    Scene.sprite = numbers;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;

	Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
    	Scene.mainLoop();
		
	}
};

//Button to start the animation
document.addEventListener( 'click', Scene.start);

Scene.mainLoop = function() {
   // Scene.clearCanvas();
    Scene.update();
    Scene.draw();
    window.setTimeout(Scene.mainLoop, 500);
	
};

Scene.update = function () {
	// Set the canvas width
  	Scene.canvas.width = 400;
	
	// Set the location of the next frame. 
  	Scene.sprite.offset = 1;
	if(Scene.sprite.offset>Scene.canvas.width)
 		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
		 
};

Scene.draw = function () {

	Scene.canvasContext.drawImage(Scene.sprite.img
		,Scene.sprite.frames[Scene.sprite.frame].frame.x
		,Scene.sprite.frames[Scene.sprite.frame].frame.y
		,Scene.sprite.frames[Scene.sprite.frame].frame.w
		,Scene.sprite.frames[Scene.sprite.frame].frame.h
		,100,20
		,Scene.sprite.frames[Scene.sprite.frame].frame.w
		,Scene.sprite.frames[Scene.sprite.frame].frame.h);	
	// Advance to the next frame.
	Scene.sprite.frame++;
	
	if(Scene.sprite.frame>=11)
		Scene.drawTen();

	//advance to 1 after loop ends
	if(Scene.sprite.frame==11)
		Scene.sprite.frame=1;
};

Scene.drawTen = function () {
	Scene.canvasContext.drawImage(Scene.sprite.img, 127, 1, 120, 180, 0, 10, 100, 200)
			
};

	

