var MyApp = angular.module("MojaApp", []);

MyApp.config(function(){});


MyApp.run(function(){});


MyApp.controller("MojController", function($scope){

    $scope.wiadomosc = "Moje kolory";

    $scope.kolory = ["red", "black", "green", "blue", "grey"];

});