'use strict';

/**
 * AngularJS App initialization and modules declaration
 */
var braviApp = angular.module('braviApp', ['ngRoute','ngResource', 'ngCookies','ngSanitize']).config(function($routeProvider, $locationProvider, $httpProvider){

    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];


    /**
     * ROUTING AND DEFAULT TEMPLATE SETTING
     * */
    $routeProvider.when('/', {
        templateUrl:'partial/main-content.html'
    });
});

/**
 * CUSTOM DIRECTIVE FOR INPUT NUMBERS ONLY
 */
braviApp.directive('numbersOnly', function(){
    return{
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).keydown(function(e) {
                var key = e.charCode || e.keyCode || 0;
                return (
                key == 8 ||
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
            });
        }
    }
});
