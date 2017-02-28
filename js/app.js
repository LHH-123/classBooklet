var classApp = angular.module('classApp', ['ui.router','classAppServices','classAppCtrls','classAppDirectives']);

classApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/index.html'
                },
                'topbar@index': {
                    templateUrl: 'tpls/topbar.html'
                },
                'main@index': {
                    templateUrl: 'tpls/home.html'
                }
            }
        })
        .state('index.photographs',{
            url:'/photographs',
            views: {
                'main@index':{
                    templateUrl: 'tpls/photographs.html',
                    css:['css/homepage.css']
                }
            }
        })
        .state('index.photographs.photo',{
            url:'/photo',
            templateUrl:'tpls/photo.html'
        })
        .state('index.photographs.video',{
            url:'/video',
            templateUrl:'tpls/video.html'

        })
        .state('index.photographs.sort',{
            url:'/sort',
            template:"<h1>这是排序方式</h1>"

        })


        .state('index.activity',{
            url:'/activity',
            views: {
                'main@index':{
                    template:"<h1>这是活动</h1>"
                }
            }
        })
        .state('index.share',{
            url:'/share',
            views: {
                'main@index':{
                    template:"<h1>这是说说</h1>"
                }
            }
        })
      
});


