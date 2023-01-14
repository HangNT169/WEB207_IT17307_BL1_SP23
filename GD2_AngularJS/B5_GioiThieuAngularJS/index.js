// B1: Khoi tao module
var myApp = angular.module("myModule", []);
// B2: Khoi tao controller
// Co 2 cach khoi tao
// C1: Dung ham cu the
// Cu phap
// ten bien cua module.controller("ten controller",ten ham);
// myApp.controller("myController", myFunction);
// // scope: la 1 bien(service). Trung gian trao doi giua model va view
// function myFunction($scope) {
//   // code
//   $scope.message = "Hello angular js";
// }
// C2: Ham nac danh
myApp.controller("myController", function ($scope) {
  // code
  // Gia tri truyen vao la 1 String
  $scope.message = "Hello angular js";
  // Gia tri truyen vao la 1 Object
  // Object {}
  // Mang []
  var employee = {
    firstName: "Hang",
    lastName: "Nguyen",
  };
  $scope.e = employee;

  //   $scope.a = {
  //     firstName: "Hang",
  //     lastName: "Nguyen",
  //   };

  // Gia tri truyen vao la 1 mang String
  $scope.info = ["hihi", "hihi1"];
  // Gia tri truyen vao la 1 mang Object
  $scope.mangObject = [
    {
      firstName: "Hang",
      lastName: "Nguyen",
    },
    {
      firstName: "Hang",
      lastName: "Nguyen",
    },
  ];
  $scope.tinhTong = function () {
    // code
    $scope.tong = $scope.number1 + $scope.number2;
  };
});
