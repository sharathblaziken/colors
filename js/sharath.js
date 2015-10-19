var app = angular.module('app',[]);
app.controller('ctrl',function($scope){
  $scope.square="";
  //$watch watches the number model to update the square view dynamically
  $scope.$watch('number', function() {
    if($.isNumeric($scope.number)){
        $scope.square=$scope.number*$scope.number;
      }
      else{
        $scope.square = "[Enter a number in the box]";
      }
  });
  $scope.$watch('color', function() {
    if($scope.color=='white'){
      $("body").css({"background":$scope.color});
      $("#color").css({"color":"deepskyblue"});
      $scope.color="you little rebel! :D ";
    }
    else{
      $("body").css({"background":$scope.color});
    }
  });

});
