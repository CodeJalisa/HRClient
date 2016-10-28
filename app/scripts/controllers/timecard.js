angular.module('hrclientApp')
.controller('TimecardCtrl', function ($scope, $http){
  $scope.submit = function(){
    var timeCard = {
      "email": email.value,
      "startTime": startTime.value,
      "endTime": endTime.value,
    };

    $http({
       method:'POST',
       url: 'http://localhost:8080/timecard',
       data: timeCard
     })
     .then(
       function(response){
         console.log(response.data);
         $scope.$setPristine(true);
       }

     );
   }});
