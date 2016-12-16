var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.when('/furnitures', {
        templateUrl: 'furnitures.html',
        controller: 'furnitureCtrl'
    }).when('/furnitures/:category', {
        templateUrl: 'category.html',
        controller: 'categoryCtrl'
    }).otherwise('/furnitures');
}
])
app.controller('categoryCtrl', function($scope, $routeParams) {
    $scope.currentCategory = $routeParams.category;
    $scope.furnitureCat = {
        tables: {
            name: 'tables',
            furnitures: ['table1', 'table2', 'table3']
        },
        drawers: {
            name: 'drawers',
            furnitures: ['drawer1', 'drawer2', 'drawer3']
        },
        
    }
    $scope.currentFurnitures = $scope.furnitureCat[$scope.currentCategory].furnitures;
})
app.controller('furnitureCtrl', function($scope) {
    $scope.furnitureCat = {
        tables: {
            name: 'tables',
            furnitures: [1, 2, 3]
        },
        drawers: {
            name: 'drawers',
            furnitures: [4, 5, 7]
        }
    }
})
