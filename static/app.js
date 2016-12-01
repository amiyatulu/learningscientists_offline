var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider

    .when('/',{

        templateUrl:'pages/main.html',
        controller:'mainController'

    })
    .when('/spaced_practice',{
        templateUrl:'pages/spaced_practice.html',
        controller:'secondController'

    })
    .when('/spaced_practice/blog',{
        templateUrl:'pages/spaced_practice_blog.html',
        controller:'secondController'

    })

    .when('/retrieval_practice',{
        templateUrl:'pages/retrieval_practice.html',
        controller:'secondController'

    })

    .when('/retrieval_practice/blog',{
        templateUrl:'pages/retrieval_practice_blog.html',
        controller:'secondController'

    })
    .when('/elaboration',{
        templateUrl:'pages/elaboration.html',
        controller:'secondController'

    })
    .when('/elaboration/blog',{
        templateUrl:'pages/elaboration_blog.html',
        controller:'secondController'

    })

    .when('/interleaving',{
        templateUrl:'pages/interleaving.html',
        controller:'secondController'

    })

    .when('/interleaving/blog',{
        templateUrl:'pages/interleaving_blog.html',
        controller:'secondController'

    })
    .when('/concrete_examples',{
        templateUrl:'pages/concrete_examples.html',
        controller:'secondController'

    })
    .when('/concrete_examples/blog',{
        templateUrl:'pages/concrete_examples_blog.html',
        controller:'secondController'

    })
    .when('/dual_coding',{
        templateUrl:'pages/dual_coding.html',
        controller:'secondController'

    })
    .when('/dual_coding/blog',{
        templateUrl:'pages/dual_coding_blog.html',
        controller:'secondController'

    })
    ;

});

myApp.controller('mainController', ['$scope', '$log',
function($scope, $log) {

        $scope.name = "Amiya";

}]);
myApp.controller('secondController', ['$scope', '$log', '$routeParams',
function($scope, $log, $routeParams) {
        $scope.name = "Behera";
        $scope.num = $routeParams.num;

}]);
