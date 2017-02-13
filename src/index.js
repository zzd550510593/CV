var app = angular.module('CV',[]);
app.directive('uiProject',['$http','$rootScope',function($http,$rootScope){
    return {
        restrict:'A',
        scope:{
        },
        template:
            '<div class="project" ng-repeat="p in data track by $index">' +
                '<div class="project-name">{{p.name}}</div>' +
                '<div class="project-tech">' +
                    '<div class="tech" ng-repeat="val in p.techs track by $index">{{val}}</div>' +
                '</div>' +
                '<div class="project-description">{{p.description}}</div>' +
            '</div>',
        link:function(scope){
            scope.data = null;
            $http.get('./data.json').success(function(data){
               if(scope.$$phase||$rootScope.$$phase){
                   scope.data = data['data'];
               }else{
                   scope.$apply(function(){
                       scope.data = data['data'];
                   })
               }
            });
        }
    }
}]);