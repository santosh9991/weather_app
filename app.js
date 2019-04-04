var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    //routeProvider service is available through dependency injection. It is available through ngRoute.
    //It lets us specifty the routs. In otherwords, it will decide what to do when it sees a perticular route in the hash.
    // it also matches the patterns
//    $log.ingo(location.path())
    $routeProvider
    .when(
        //router checks for a perticular hash
        '/',
    {
    //second argument is an object which primarily takes two keys: 1.templateUrl ,2. controller.
    // TemplateUrl will point to the piece of html code to which it should redirect and controller controlles that corresponding html
    templateUrl:'pages/home.htm',
    controller:'homeController'
    })
    .when(
        //router checks for a perticular hash
        '/forcast',
    {
    //second argument is an object which primarily takes two keys: 1.templateUrl ,2. controller.
    // TemplateUrl will point to the piece of html code to which it should redirect and controller controlles that corresponding html
    templateUrl:'pages/forecast.htm',
    controller:'forcastController'
    })
})
myApp.controller('homeController', ['$scope', '$location','$log',function($scope,$location,$log) {
    
//    $log.info($location.path());
    
}]);
myApp.controller('forcastController', ['$scope', '$location','$log',function($scope,$location,$log) {
    
//    $log.info($location.path());
    
}]);