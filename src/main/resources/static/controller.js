var LucyApp = angular.module('LucyApp',[]);

LucyApp.controller('DireBonjourCtrl', ['$scope','$http','$sce', function($scope, $http, $sce) {
 $sce.trustAsResourceUrl('http://127.0.0.1:8080/');
 $scope.repeated = document.getElementById('repeated');
 $scope.play = document.getElementById('play');
 //$scope.pause = document.getElementById('pause');
 $scope.body = document.getElementById('body');
 $scope.table = document.getElementById('order-table');






 $scope.init = function(){
  canvasWidth=920;
  canvasHeight=700;
  listening =false;
  in_progess = true;
  var stage = new createjs.Stage("demoCanvas");

        //blue circles
        var circle = new createjs.Shape();
        circle.graphics.beginFill("#40e0d0").drawCircle(0, 0, 70);
        circle.x = 260;
        circle.y = 150;
        var circle_two = new createjs.Shape();
        circle_two.graphics.beginFill("#00ffff").drawCircle(0, 0, 30);
        circle_two.x = 260;
        circle_two.y = 150;
        var circle_three = new createjs.Shape();
        circle_three.graphics.beginFill("#00ffff").drawCircle(0, 0, 20);
        circle_three.x = 260+100;
        circle_three.y = 150;
        var circle_four = new createjs.Shape();
        circle_four.graphics.beginFill("#00ffff").drawCircle(0, 0, 20);
        circle_four.x = 260-100;
        circle_four.y = 150;

        //hide blue circles (used when a task is in progress)


        //red circles
        var circle_five = new createjs.Shape();
        circle_five.graphics.beginFill("Crimson").drawCircle(0, 0, 70);
        circle_five.x = 260;
        circle_five.y = 150;
        var circle_six = new createjs.Shape();
        circle_six.graphics.beginFill("Red").drawCircle(0, 0, 30);
        circle_six.x = 260;
        circle_six.y = 150;
        var circle_seven = new createjs.Shape();
        circle_seven.graphics.beginFill("Red").drawCircle(0, 0, 20);
        circle_seven.x = 260+100;
        circle_seven.y = 150;
        var circle_eight = new createjs.Shape();
        circle_eight.graphics.beginFill("Red").drawCircle(0, 0, 20);
        circle_eight.x = 260-100;
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

        /*pause.addEventListener("click", ()=>{
          circle_five.visible=true;
          circle_six.visible=true;
          circle_seven.visible=true;
          circle_eight.visible=true;
          circle.visible=false;
          circle_two.visible=false;
          circle_three.visible=false;
          circle_four.visible=false;
        });*/

        play.addEventListener("click", ()=>{
          circle.visible=true;
          circle_two.visible=true;
          circle_three.visible=true;
          circle_four.visible=true;
          circle_five.visible=false;
          circle_six.visible=false;
          circle_seven.visible=false;
          circle_eight.visible=false;
        });
        //end of the canvas code

      };

  $scope.body.addEventListener("did-finish-load", $scope.init()); //start the circle animation

  //Listen the click event of the play button
  $scope.play.addEventListener("click",()=>{
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();
    recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = 'fr-FR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();

    recognition.onresult = function(event){
      retour = event.results[0][0].transcript
      console.log(retour);
      recognition.stop();

      $scope.Voice = {
        content: retour,
        returned: "",
        command: ""
      };
      var req = {
        method:'POST',
        url: 'http://127.0.0.1:8080/receiveVoiceCtrl',
        headers:{
          'Content-Type': undefined
        } ,
        data : retour
      }
      $http(req).then(function(){
        //success
        console.log("requête arrivée a bon port")
      }); // create an htpp request with req variable and then if succes do function 1 if error function callback
    }


  });

  var request = {
    method:'GET',
    url: 'http://127.0.0.1:8080/getVoicesCtrl',
    headers:{
      'Content-type': undefined
    }
  };

  //show what is possible with the app
  $http(request).then(function(response){
    var numero=1;
    response.data.forEach(unArray=> {
      console.log(unArray.content);
      var row= $scope.table.insertRow(1);
      var cell1=row.insertCell(0);
      var cell2=row.insertCell(1);
      cell1.innerHTML = "#"+numero+": ";
      cell2.innerHTML = unArray.content;
      numero++

    });

  }, function errorCallBack(response){
    console.log("non")
  });

    //TO BE CONTINUED


      console.log("thanks to :");
      console.log("https://codepen.io/mackorichardson/pen/vNMRpK");
      console.log("for this overlay");
    }]);

