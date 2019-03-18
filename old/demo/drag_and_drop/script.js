// DragAndDropController.js file
// app.js            


var DragAndDropController = function ($scope) {
  // array for dropped items
  $scope.dropped = [];

  // array of items for dragging
  $scope.items = [
    { id: 1, name: "Microwave" },
    { id: 2, name: "Dishwasher" },
    { id: 3, name: "Phone" },
    { id: 4, name: "Punching Bag" }
  ];

  $scope.moveToBox = function (id) {
    for (var index = 0; index < $scope.items.length; index++) {
      var item = $scope.items[index];
      if (item.id == id) {
        // add to dropped array
        $scope.dropped.push(item);
        // remove from items array
        $scope.items.splice(index, 1);
      }
    }
    $scope.$apply();
  };

  $scope.showItmesLeft = function () {
    alert($scope.items.length + " items left.");
  };

  $scope.showItmesDropped = function () {
    alert($scope.dropped.length + " items in drop-box.");
  };
};


var Draggable = function () {
  return {
    restrict: "A",
    link: function (scope, element, attributes, ctlr) {
      element.attr("draggable", true);
      element.bind("dragstart", function (eventObject) {
        eventObject.dataTransfer.setData("text", attributes.itemid);
      });
    }
  };
}


var DropTarget = function () {
  return {
    restrict: "A",
    link: function (scope, element, attributes, ctlr) {
      element.bind("dragover", function (eventObject) {
        eventObject.preventDefault();
      });
      element.bind("drop", function (eventObject) {
        // invoke controller/scope move method
        scope.moveToBox(parseInt(eventObject.dataTransfer.getData("text")));
        // cancel actual UI element from dropping, since the angular will recreate a the UI element
        eventObject.preventDefault();
      });
    }
  };
}
angular.module('app')
    .directive("ddDraggable", Draggable)
    .directive("ddDropTarget", DropTarget)
    .controller("DragAndDropController", DragAndDropController);    
