//MODEL
weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);
//ROUTERS
weatherApp.config(function($routeProvider){
    //route provider provides the routes. It decides what to do based on the hash provided
    //
//    console.log($location.path())
    $routeProvider
    .when('/',{
        
        templateUrl:'pages/home.html',
        controller:"homeController"
    })
    .when('/forcast',{
        templateUrl:"pages/forcast.htm",
        controller:"forcastController"
        
    })
    
})
//weatherApp.config(function($routeProvider){
//    $routeProvider
////    .when('/',function(){
////        templateUrl:"pages/home.html",
////        controller:"mainController"
////    })
//    .when('/forcast',function(){
//        templateUrl:'pages/forcast.html',
//        controller:'forcastController'
//    })
//});
//weatherApp.config(function ($routeProvider) {
//    $routeProvider
//    .when('/',function(){
////        templateUrl:'pages/home.html',
////        controller:'homeController'
//    })
//});
//
////CONTROLLERS
weatherApp.controller("homeController",["$scope","$log","$location",function($scope,$log,$location){
    $log.info("home")
    
}])
//
weatherApp.controller("forcastController",["$scope","$log",function($scope,$log){
    
}])