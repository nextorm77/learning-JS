$(document).ready(function () {
  "use strict";
  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));
  /* 1.8 반복적인 작업 자동화하기
  var c;
  for (var x = 25; x < 400; x += 50) {
    for (var y = 25; y < 400; y += 50) {
      c = Shape.Circle(x, y, 20);
      c.fillColor = "green";
    }
  }
  */

  /* 1.9 사용자 입력 처리하기
  var tool = new Tool();

  tool.onMouseDown = function (event) {
    //var c = Shape.Circle(event.point.x, event.point.y, 20);
    var c = Shape.Circle(event.point, 20);
    c.fillColor = "green";
  };
  */

  // 1.10 Hello, World
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = "black";
  var text = new PointText(200, 200);
  text.justification = "center";
  text.fillColor = "white";
  text.fontSize = 20;
  text.content = "Hello, World";

  var tool = new Tool();
  tool.onMouseDown = function (event) {
    //var c = Shape.Circle(event.point.x, event.point.y, 20);
    var c = Shape.Circle(event.point, 20);
    c.fillColor = "green";
  };

  paper.view.draw();
});
