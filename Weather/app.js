// Module
var jannaApp = angular.module('jannaApp', ['ngRoute', 'ngResource']);

//Routes
jannaApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        
        templateUrl: 'pages/search.htm',
        controller: 'searchController'
        
        
    })

    .when('/forecast', {
        
        templateUrl: 'pages/forecast.htm',
        controller: 'resultsController'
        
    })

    .when('/forecast/:days', {
        
        templateUrl: 'pages/forecast.htm',
        controller: 'resultsController'
        
    })


});

// Services

jannaApp.service('cityService', function (){
    
    this.city = "New York, NY";
    
});


//Controllers

jannaApp.controller('searchController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
}]);

jannaApp.controller('resultsController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) { 
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '3';
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "f68bad0257d3081e1f2f096abe65ec92",
        
        callback: "JSON_CALLBACK",
        
        cnt: $scope.days
        
    },    
        
        { get: { method:'JSONP'}}
    );
    
    $scope.weatherResult = $scope.weatherAPI.get({ q:$scope.city, cnt:$scope.days});

    console.log($scope.weatherResult);

    $scope.convertToFahrenheit = function(degK){
        
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000);
    };
}]);

