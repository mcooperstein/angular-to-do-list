var app = angular.module("myApp", []);
//var app = angular.module('myApp', ['ngStorage']);

app.controller("toDoCtrl", function ($scope /*, $localStorage*/ ) {

    $scope.today = new Date();

    $scope.saved = localStorage.getItem("todos");

    $scope.todos = (localStorage.getItem("todos") !== null) ? JSON.parse($scope.saved) : [
        {
            text: "Clean my Room",
            done: false
        },
        {
            text: "Do my Homework",
            done: false
        }
    ];
    localStorage.setItem("todos", JSON.stringify($scope.todos));

    $scope.things = function () {
        if ($scope.todos.length == 1) {
            return "thing";
        } else {
            return "things";
        }
    };

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };
    console.log($scope.todos.length);
    console.log($scope.todos);

    $scope.addTodo = function () {
        if ($scope.formTodoText.length >= 1) {
            $scope.todos.push({
                text: $scope.formTodoText,
                done: false
            });
        }
        $scope.formTodoText = "";
        //clear the input after adding
        localStorage.setItem("todos", JSON.stringify($scope.todos));
    };

    $scope.checkTodo = function (todo) {
        if ($scope.todo.done == true) {
            delete $scope.todo.done;
        }
    };

    $scope.clearCompleted = function () {
        var doneTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(doneTodos, function (todo) {
            if (!todo.done) {
                $scope.todos.push(todo);
            }
        });
        localStorage.setItem("todos", JSON.stringify($scope.todos));
    };

    $scope.clearAll = function () {
        if (confirm("Are you sure you want to delete this list?") == true) {
            localStorage.clear();
            $scope.todos = [];
        }
    };
});
