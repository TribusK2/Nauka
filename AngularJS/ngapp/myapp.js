var MyApp = angular.module("MojaApp", []);

MyApp.config(function(){});


MyApp.run(function(){});


MyApp.controller("MojController", function($scope){
    // Dane do ASJZad03
    $scope.wiadomosc = "Moje kolory";

    $scope.kolory = ["red", "black", "green", "blue", "grey"];

    // dane do ASJZad04 (ASJZad05)  
    $scope.tytul = "Lista gości";

    $scope.lista = [
        {imie: "Tomek", miejsce: "A1", wiek: 25, dostepnosc: true},
        {imie: "Agnieszka", miejsce: "A2", wiek: 20, dostepnosc: true},
        {imie: "Marcin", miejsce: "B1", wiek: 18, dostepnosc: true},
        {imie: "Monika", miejsce: "B2", wiek: 22, dostepnosc: true},
        {imie: "Łukasz", miejsce: "C1", wiek: 84, dostepnosc: true},
        {imie: "Kasia", miejsce: "C2", wiek: 75, dostepnosc: true},
        {imie: "Franek", miejsce: "D1", wiek: 38, dostepnosc: true},
        {imie: "Małgosia", miejsce: "D2", wiek: 44, dostepnosc: true},
    ];

    // dane do AJSZad05
    $scope.reset = function(){
        for (i=0; i<$scope.lista.length; i++){
        $scope.lista[i].dostepnosc = true;
        };   
    };

    $scope.dodajosobe = function(){
        $scope.lista.push({
            imie: $scope.nowaosoba.imie,
            miejsce: $scope.nowaosoba.miejsce,
            wiek: $scope.nowaosoba.wiek,
            dostepnosc: true
        });
        $scope.nowaosoba.imie = "";
        $scope.nowaosoba.miejsce = "";
        $scope.nowaosoba.wiek = "";
    };
    // Zamiast ponizszej funkcji można uzyć $index bezpośrednio w ng-click (linijka 27 w html)
    // $scope.usunosobe = function(x){
    //     var index = $scope.lista.indexOf(x);
    //     $scope.lista.splice(x, 1);
    // }
    $scope.log = function(){
        console.log($scope.lista)
    };
});

