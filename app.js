
var m = {
    "images": [

        {
            "thumb":"./media/THUMBS/Beck_01.jpg",
            "src":"./media/IMAGES/Beck_01.jpg",
            "title":"Untitled, 2016",
            "description": "Ink, watercolor, pencil, and powdered charcoal on paper",
            "dimensions":"30 x 35 inches",
        },
        {
            "thumb":"./media/THUMBS/Beck_02.jpg",
            "src":"./media/IMAGES/Beck_02.jpg",
            "title":"Untitled, 2016",
            "description": "Watercolor, powdered charcoal, ink and loose pigment on paper",
            "dimensions":"30 x 33 inches",
        },
        {
            "thumb":"./media/THUMBS/Beck_03.jpg",
            "src":"./media/IMAGES/Beck_03.jpg",
            "title":"Untitled, 2015",
            "description": "Watercolor and ink on paper",
            "dimensions":"30 x 22.5 inches",
        },
        {
            "thumb":"./media/THUMBS/Beck_04.jpg",
            "src":"./media/IMAGES/Beck_04.jpg",
            "title":"Untitled, 2012",
            "description": "Acrylic, ink, collage, pastel and synthetic hair on paper",
            "dimensions":"32 x 26 inches",
        },
    ],
    "stills": [
        {
            "thumb":"./media/THUMBS/Beck_16.jpg",
            "src":"./media/IMAGES/Beck_16.jpg",
            "title":"Still, Delusions of Grandeur, 2016",
            "description": "HD video, 12:04",
            "dimensions":"",
        },
        {
            "thumb":"./media/THUMBS/Beck_17.jpg",
            "src":"./media/IMAGES/Beck_17.jpg",
            "title":"Still, Delusions of Grandeur, 2016",
            "description": "HD video, 12:04",
            "dimensions":"",
        },
        {
            "thumb":"./media/THUMBS/Beck_18.jpg",
            "src":"./media/IMAGES/Beck_18.jpg",
            "title":"Still, Delusions of Grandeur, 2016",
            "description": "HD video, 12:04",
            "dimensions":"",
        },
        {
            "thumb":"./media/THUMBS/Beck_19.jpg",
            "src":"./media/IMAGES/Beck_19.jpg",
            "title":"Still, Delusions of Grandeur, 2016",
            "description": "HD video, 12:04",
            "dimensions":"",
        },


    ]
}
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'mainController'
        })
        .when('/images', {
            templateUrl: 'page-images.html',
            controller: 'imagesController'
        })
        .when('/stills', {
            templateUrl: 'page-stills.html',
            controller: 'stillsController'
        });

});

animateApp.controller('mainController', function ($scope) {

    $scope.pageClass = 'page-home';
});
animateApp.controller('headerController', function ($scope, $location) {

    $scope.isActive = function (viewLocation) {
        var match = viewLocation === $location.path();
        return match
    };
});

animateApp.controller('imagesController', function ($scope) {

    $scope.items = m.images;
    $scope.pageClass = 'page-images';
});

animateApp.controller('stillsController', function ($scope) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.items = m.stills;
    $scope.pageClass = 'page-stills';
});

$(function () {
    $('#myModal').on('show.bs.modal', function (event) {
        var source = $(event.relatedTarget);
        $(this).find('.modal-body').html($(source).find('.panel-body').html());
        $(this).find('.modal-title h4').html($(source).find('.panel-footer .title').html());
        $(this).find('.modal-title .description').html($(source).find('.panel-footer .description').html());
        $(this).find('.modal-title .full-res-link').html($(source).find('.panel-footer .full-res-link').html());

    });
})

