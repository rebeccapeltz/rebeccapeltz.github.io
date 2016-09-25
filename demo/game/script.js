angular.module('app')

  .directive('integerG', function () {
    return {
      require: 'ngModel',
      link: function (scope, ele, attr, ctrl) {
        ctrl.$parsers.unshift(function (viewValue) {
          if (viewValue === '' || viewValue === null || typeof viewValue === 'undefined') {
            return null;
          }
          return parseInt(viewValue, 10);
        });
      }
    };
  })

  .controller('GameCtrl', function ($scope) {
    $scope.MAX_ROW = 3;
    $scope.MAX_COL = 6;

    $scope.randomize = function () {
      $scope.solved = false;
      $scope.displayLayout = $scope.randomItems();
    };
    $scope.solve = function () {
      console.log('solve setting solved to true');
      $scope.solved = true;
      $scope.displayLayout = $scope.solvedLayout;
    };

    $scope.randomRow = function () {
      return $scope.randomRC($scope.MAX_ROW);
    };
    $scope.randomCol = function () {
      return $scope.randomRC($scope.MAX_COL);
    };
    $scope.randomRC = function (max) {
      //return a random int bewteen 0 and max
      return Math.floor((Math.random() * max));
    };

    $scope.gridsterOpts = {
      margins: [20, 20],
      outerMargin: false,
      pushing: true,
      floating: true,
      draggable: {
        enabled: true, // whether dragging items is supported
        //handle: '.my-class', // optional selector for drag handle
        //start: function(event, $element, widget) {}, // optional callback fired when drag is started,
        //drag: function(event, $element, widget) {}, // optional callback fired when item is moved,
        stop: function (event, $element, widget) {
          console.log('item moved', $element, widget);
        } // optional callback fired when item is finished dragging
      },
      resizable: {
        enabled: false,
        handles: ['n', 'e', 's', 'w', 'se', 'sw']
      }
    };

    // these map directly to gridsterItem options
    $scope.solvedLayout = [{
      sizeX: 2,
      sizeY: 1,
      row: 0,
      col: 0,
      blockcolor: "a"
    }, {
        sizeX: 2,
        sizeY: 2,
        row: 0,
        col: 2,
        blockcolor: "b"
      }, {
        sizeX: 2,
        sizeY: 1,
        row: 2,
        col: 1,
        blockcolor: "c"
      }, {
        sizeX: 1,
        sizeY: 1,
        row: 2,
        col: 3,
        blockcolor: "d"
      }, {
        sizeX: 1,
        sizeY: 1,
        row: 2,
        col: 4,
        blockcolor: "e"
      }, {
        sizeX: 1,
        sizeY: 1,
        row: 0,
        col: 4,
        blockcolor: "f"
      }, {
        sizeX: 1,
        sizeY: 1,
        row: 0,
        col: 5,
        blockcolor: "g"
      }, {
        sizeX: 2,
        sizeY: 1,
        row: 1,
        col: 0,
        blockcolor: "h"
      }, {
        sizeX: 1,
        sizeY: 1,
        row: 1,
        col: 4,
        blockcolor: "i"
      }, {
        sizeX: 1,
        sizeY: 2,
        row: 1,
        col: 5,
        blockcolor: "j"
      }, {
        sizeX: 1,
        sizeY: 1,
        row: 2,
        col: 0,
        blockcolor: "k"
      }];


    $scope.randomItems = function () {
      return [{
        sizeX: 2,
        sizeY: 1,
        row: $scope.randomRow(),
        col: 0,
        val: 'A',
        blockcolor: "a"
      }, {
          sizeX: 2,
          sizeY: 2,
          row: $scope.randomRow(),
          col: 2,
          val: 'B',
          blockcolor: "b"
        }, {
          sizeX: 2,
          sizeY: 1,
          row: $scope.randomRow(),
          col: 1,
          val: 'C',
          blockcolor: "c"
        }, {
          sizeX: 1,
          sizeY: 1,
          row: $scope.randomRow(),
          col: 3,
          val: 'D',
          blockcolor: "d"
        }, {
          sizeX: 1,
          sizeY: 1,
          row: $scope.randomRow(),
          col: 4,
          val: 'E',
          blockcolor: "e"
        }, {
          sizeX: 1,
          sizeY: 1,
          row: $scope.randomRow(),
          col: 4,
          val: 'F',
          blockcolor: "f"
        }, {
          sizeX: 1,
          sizeY: 1,
          row: $scope.randomRow(),
          col: 5,
          val: 'G',
          blockcolor: "g"
        }, {
          sizeX: 2,
          sizeY: 1,
          row: $scope.randomRow(),
          col: 0,
          val: 'H',
          blockcolor: "h"
        }, {
          sizeX: 1,
          sizeY: 1,
          row: $scope.randomRow(),
          col: 4,
          val: 'I',
          blockcolor: "i"
        }, {
          sizeX: 1,
          sizeY: 2,
          row: $scope.randomRow(),
          col: 5,
          val: 'J',
          blockcolor: "j"
        }, {
          sizeX: 1,
          sizeY: 1,
          row: $scope.randomRow(),
          col: 0,
          val: 'K',
          blockcolor: "k"
        }];
    };
    $scope.displayLayout = $scope.solvedLayout;
    $scope.solved = true;

    $scope.$watch('displayLayout', function (newValue, oldValue) {
      let tooManyRows = newValue.filter(function (item) {
        return (item.row > 2);
      });

      $scope.solved = !(tooManyRows.length > 0);
      console.log('testRows', $scope.solved);
    }, true);

    //$scope.$watchCollection('standardItems', function(newItems, oldItems) {
    //var newItemLen = newItems ? newItems.length : 0;
    //var oldItemLen = oldItems ? oldItems.length : 0;
    //console.log(JSON.stringify(oldItems));
    //console.log(newItemLen, oldItemLen);
    //});


  });