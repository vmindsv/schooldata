/*function appctrl($scope) {
  console.log("Hello World from controller");
  person1 = {
        id:'100',
        name:'Bharath',
        email:'bharath@email.com',
        number:'1234567'
  };
  person2 = {
        id:'101',
        name:'vinod',
        email:'vinod@email.com',
        number:'12345'
  };
  person3 = {
        id:'103',
        name:'nani',
        email:'nani@email.com',
        number:'12345678'
  };
  var companylist = [person1, person2, person3];
  $scope.companylist = companylist;
}*/
angular.module ('myapp',[])
.controller('appctrl',function($scope, $http){
  console.log("welcome Angular");

  var refresh = function(){
  $http.get('/companydata').then(function(response){
    console.log("i got the data i requested");
    $scope.companydata = response;
    $scope.company ={};
  })
  /*.config(['$routeProvider', function ($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:"html/header.html",
      controller:"headerctrl"
    })
    .otherwise({
  		redirectTo:'/'
  	});
  }]);*/
};

refresh();

  $scope.addcompany = function(){
    console.log($scope.companydata);
    $http.post('/companydata',$scope.company).then(function(response){
      console.log(response);
      refresh();
    });
    $scope.remove = function(id){
      console.log(id);
      $http.delete('/companydata/' + id).then(function(response){
        refresh();
      });
    };

  }
});
