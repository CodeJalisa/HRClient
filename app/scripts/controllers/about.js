'use strict';

/**
 * @ngdoc function
 * @name hrclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hrclientApp
 */
angular.module('hrclientApp')
.controller('AboutCtrl', ['$scope', '$http',
function ($scope, $http){
 var timeCard = {
   "email": "",
   "startTime": "",
   "endTime": ""

 };
 $scope.responses = [];
 $http.get("http://localhost:8080/timecard")
 .success(
   function(response){
     $scope.responses = response;
     console.log(response);
   }
 ).error(function(err){
   console.log("Error:" + err.data);
 });
}
]);
