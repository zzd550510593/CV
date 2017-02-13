var app = angular.module('CV',[]);

app.directive('uiProgress',[function(){
    return {
        restrict:'A',
        scope:{

        },
        template:
        '<div class="ui-progress">' +
        '<div class="ui-progress-name">{{name}}</div>' +
        '<div class="ui-progress-bar">' +
        '<div ng-style="style"></div>' +
        '</div>' +
        '<div class="ui-progress-bar-corner"></div>' +
        '</div>',
        link:function(scope,elem,attr){
            scope.name = attr['name'];
            scope.style = {
                'transform':'translate3d(' + (attr['percent']-100) + '%,0,0)'
            }

        }
    }
}]);

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
                '<textarea class="project-description">{{p.description}}</textarea>' +
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