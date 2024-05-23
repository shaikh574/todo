var app = angular.module('todoApp', []);

app.controller('TodoController', ['$scope', function($scope) {
  $scope.todos = [
    { text: 'Learn AngularJS', completed: false },
    { text: 'Build a ToDo app', completed: false }
  ];

  $scope.addTodo = function() {
    if ($scope.newTodo) {
      $scope.todos.push({ text: $scope.newTodo, completed: false });
      $scope.newTodo = ''; // Clear the input after adding
    }
  };

  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1);
  };
}]);
