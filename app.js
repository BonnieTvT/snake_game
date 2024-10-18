let canvas=document.querySelector('.canvas');
let ctx=canvas.getContext('2d');
let gridSize=20;
let snakeColor="green";
let foodColor="red";
let snake=[{x:12, y:8}];
let food={x:7, y:8};
let dx=-1, dy=0;
// draw snake
function drawSnake(snakeEl){
		snakeEl.forEach(
		segment=>{
			ctx.fillStyle=snakeColor;
			ctx.fillRect(segment.x*gridSize, segment.y*gridSize, gridSize, gridSize);
		}
	);
}
// draw food
function drawFood(){
	ctx.fillStyle=foodColor;
	ctx.fillRect(food.x*gridSize, food.y*gridSize, gridSize, gridSize);
}
// move snake
function moveSnake(){
	let head={x:snake[0].x+dx, y:snake[0].y+dy};
	// .unshift() -> massive deer utga nemne;
	snake.unshift(head);
	if(head.x==food.x && head.y==food.y){
		food={
			x:Math.floor(Math.random()*20),
			y:Math.floor(Math.random()*20)
			};
	}else{
		snake.pop();
	}
	if(head.y<0 || head.x<0 || head.y==20 || head.x==20){
		alert("Game Over");
		snake=[{
			x:Math.floor(Math.random()*20),
			y:Math.floor(Math.random()*20)
			}];
	}
	// .pop() -> massive-aas ehnii utgiig hasna
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawFood();
	drawSnake(snake);
	// count score
	// score>5 -> speed-100
	
}
setInterval(moveSnake,200);
document.addEventListener('keydown',(e)=>{
	console.log(e.key);
	if(e.key=="ArrowLeft"){
		if(dx!==1){
			dx=-1;
			dy=0;
		}
	}else if(e.key=="ArrowRight"){
		if(dx!==-1){
			dx=1;
			dy=0;
		}
	}else if(e.key=="ArrowDown"){
		if(dy!==-1){
			dx=0;
			dy=1;
		}
	}else if(e.key=="ArrowUp"){
		if(dy!==1){
			dx=0;
			dy=-1;
		}
	}
});