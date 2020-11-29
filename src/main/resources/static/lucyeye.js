function init() {
	function init() {
    	canvasWidth=920;
    	canvasHeight=700;
    	listening =false;
    	in_progess = true;
    	var stage = new createjs.Stage("demoCanvas");

    	//blue circles
    	var circle = new createjs.Shape();
    	circle.graphics.beginFill("#40e0d0").drawCircle(0, 0, 70);
    	circle.x = 460;
    	circle.y = 150;
    	var circle_two = new createjs.Shape();
    	circle_two.graphics.beginFill("#00ffff").drawCircle(0, 0, 30);
    	circle_two.x = 460;
    	circle_two.y = 150;
    	var circle_three = new createjs.Shape();
    	circle_three.graphics.beginFill("#00ffff").drawCircle(0, 0, 20);
    	circle_three.x = 460+100;
    	circle_three.y = 150;
    	var circle_four = new createjs.Shape();
    	circle_four.graphics.beginFill("#00ffff").drawCircle(0, 0, 20);
    	circle_four.x = 460-100;
    	circle_four.y = 150;

    	//hide blue circles (used when a task is in progress)


    	//red circles
    	var circle_five = new createjs.Shape();
    	circle_five.graphics.beginFill("Crimson").drawCircle(0, 0, 70);
    	circle_five.x = 460;
    	circle_five.y = 150;
    	var circle_six = new createjs.Shape();
    	circle_six.graphics.beginFill("Red").drawCircle(0, 0, 30);
    	circle_six.x = 460;
    	circle_six.y = 150;
    	var circle_seven = new createjs.Shape();
    	circle_seven.graphics.beginFill("Red").drawCircle(0, 0, 20);
    	circle_seven.x = 460+100;
    	circle_seven.y = 150;
    	var circle_eight = new createjs.Shape();
    	circle_eight.graphics.beginFill("Red").drawCircle(0, 0, 20);
    	circle_eight.x = 460-100;
    	circle_eight.y = 150;





    	stage.addChild(circle,
    		circle_two,
    		circle_three,
    		circle_four,
    		circle_five,
    		circle_six,
    		circle_seven,
    		circle_eight);
    	//blue circles animations
    	createjs.Tween.get(circle_two, {loop: true})
    	.to({alpha:0, scale:0}, 000)
    	.to({alpha:1, scale:2.3}, 2000)
    	.to({alpha:0, scale:2.3}, 1000)
    	createjs.Ticker.addEventListener("tick", stage);
    	createjs.Tween.get(circle_three, {loop: true})
    	.to({x:circle.x-100}, 2000, createjs.Ease.elasticInOut)
    	.to({x:circle.x+100}, 2000, createjs.Ease.elasticInOut)
    	createjs.Tween.get(circle_four, {loop: true})
    	.to({x:circle.x+100}, 2000, createjs.Ease.elasticInOut)
    	.to({x:circle.x-100}, 2000, createjs.Ease.elasticInOut)
    	createjs.Ticker.addEventListener("tick", stage);


    	//red circles animations
    	createjs.Tween.get(circle_six, {loop: true})
    	.to({alpha:0, scale:0}, 000)
    	.to({alpha:1, scale:2.3}, 2000)
    	.to({alpha:0, scale:2.3}, 1000)
    	createjs.Ticker.addEventListener("tick", stage);
    	createjs.Tween.get(circle_seven, {loop: true})
    	.to({x:circle.x-100}, 2000, createjs.Ease.elasticInOut)
    	.to({x:circle.x+100}, 2000, createjs.Ease.elasticInOut)
    	createjs.Tween.get(circle_eight, {loop: true})
    	.to({x:circle.x+100}, 2000, createjs.Ease.elasticInOut)
    	.to({x:circle.x-100}, 2000, createjs.Ease.elasticInOut)
    	createjs.Ticker.addEventListener("tick", stage);

    	listenbutton.addEventListener("click", ()=>{
    		circle.visible=true;
    		circle_two.visible=true;
    		circle_three.visible=true;
    		circle_four.visible=true;

    		circle_five.visible=false;
    		circle_six.visible=false;
    		circle_seven.visible=false;
    		circle_eight.visible=false;
    	});

    	progressnbutton.addEventListener("click", ()=>{
    		circle_five.visible=true;
    		circle_six.visible=true;
    		circle_seven.visible=true;
    		circle_eight.visible=true;

    		circle.visible=false;
    		circle_two.visible=false;
    		circle_three.visible=false;
    		circle_four.visible=false;

    	});
    }
}