myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$httpProvider','$stateProvider','$urlRouterProvider','$locationProvider',
    function($httpProvider,$stateProvider, $urlRouterProvider, $locationProvider) {
        // $httpProvider.interceptors.push('authInterceptor');
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('user', {
                url: '/',
                templateUrl: 'app/layout-blocks/layouts/login/user.html',
                controller: 'userCtrl'
            })
            .state('main', {
                url: '/main',
                views: {
                    '' : {
                        templateUrl: 'app/layout-blocks/layouts/main/main.html',
                        controller: 'mainCtrl'
                    },
                    'album@main': {
                        templateUrl: 'app/layout-blocks/album-list/album-list.html',
                        controller: 'albumCtrl'
                    },
                    'imageDown@main': {
                        templateUrl: 'app/layout-blocks/image-download/image-download.html',
                        controller: 'imageDownCtrl'
                    },
                    'imageItem@main': {
                        templateUrl: 'app/layout-blocks/image-item/image-item.html',
                        controller: 'imageItemCtrl'
                    },
                    'imageList@main': {
                        templateUrl: 'app/layout-blocks/image-list/image-list.html',
                        controller: 'imageListCtrl'
                    }
                },
            })
    }]);
