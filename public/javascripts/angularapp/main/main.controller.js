
angular.module(myAppConfig.moduleName).controller('MainCtrl',['demoService','$scope',
     function(demoService,$scope){


         $scope.model={};
         $scope.model.myMessage='hello, angular is working';


        demoService.getData().then(function(data) {
            $scope.model.demoData=data;
             
            }, function(){ alert('error');});;
     

    }]);