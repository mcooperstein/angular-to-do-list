var app = angular.module('myApp', []);

app.controller('toDoCtrl', function ($scope) {

    $scope.todos = [
        {
            text: "Clean my Room",
            done: false
        },
        {
            text: "Do my Homework",
            done: false
        }
    ];

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
    };




});
