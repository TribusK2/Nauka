var MyApp = angular.module("MojaApp", []);

MyApp.config(function(){});


MyApp.run(function(){});


MyApp.controller("MojController", function($scope){
    // Dane do ASJZad03
    $scope.wiadomosc = "Moje kolory";

    $scope.kolory = ["red", "black", "green", "blue", "grey"];

    // dane do ASJZad04
    $scope.tytul = "Lista gości";

    $scope.lista = [
        {imie: "Tomek", miejsce: "A1", wiek: 25},
        {imie: "Agnieszka", miejsce: "A2", wiek: 20},
        {imie: "Marcin", miejsce: "B1", wiek: 18},
        {imie: "Monika", miejsce: "B2", wiek: 22},
        {imie: "Łukasz", miejsce: "C1", wiek: 84},
        {imie: "Kasia", miejsce: "C2", wiek: 75},
        {imie: "Franek", miejsce: "D1", wiek: 38},
        {imie: "Małgosia", miejsce: "D2", wiek: 44},
    ];

});

