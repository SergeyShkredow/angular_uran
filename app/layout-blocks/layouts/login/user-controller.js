myApp.controller('userCtrl','$state', function ($scope, $state) {
    $scope.test = "foo";

    $scope.login = function () {
        console.log('Go-go');
        $state.go('main');
    }
});