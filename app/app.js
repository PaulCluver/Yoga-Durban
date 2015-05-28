(function() {

    'use strict';

    var yogaApp = angular.module('yogaApp', ['ui.router']);

    yogaApp.constant('VERSION', '0.1');
    
    yogaApp.service('ClassesDataService', function() {
        
        this.classes = [{
            name: 'Proin mauris nisl',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit placerat libero, vel lacinia ex luctus id. Aenean fringilla suscipit rhoncus. Sed suscipit, eros non bibendum placerat, mauris metus euismod magna, sed ultrices ligula sem et arcu. In hac habitasse platea dictumst. Proin mauris nisl, rutrum eget lorem id, faucibus scelerisque diam. Donec molestie nisl eget gravida mattis',
            day: 'Tuesday',
            time: '18:15pm - 19:45pm',
            location: 
            {
                address: 'Positive Health, 5 Claribel Rd',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, 
        {
            name: 'Praesent at sapien',
            description: 'Maecenas bibendum, leo sodales accumsan pretium, turpis elit imperdiet dolo',
            day: 'Thursday',
            time: '17:00pm - 19:00pm',
            location: 
            {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }        
        }];

    });

    yogaApp.service('ClassesService', function(ClassesDataService) {
        
        this.getAllClasses = function() {
            return ClassesDataService.classes;
        };

    });

    yogaApp.service('QuotesDataService', function() {
       
        this.quotes = [{
            text: 'Everything flows, nothing stands still',
            author: 'Heraclitus of Ephesus'
        },
        {
            text: 'Practice, practice...all is coming',
            author: 'Sri K. Pattabhi Jois'
        },
        {
            text: 'It is difficult to understand the universe if you only study one planet',
            author: 'Miyamoto Musashi'
        },
        {
            text: 'Stop acting so small. You are the universe in ecstatic motion.',
            author: 'Rumi'
        },
        {
            text: 'It is better to live one day seeing the rise and fall of things than to live a hundred years without seeing anything.',
            author: 'Gautama Buddha'
        }];

    });

    yogaApp.service('QuotesService', function(QuotesDataService) {
        
        this.getRandomQuote = function() {
            var quotesLength = QuotesDataService.quotes.length;
            var randomItem = Math.floor((Math.random() * quotesLength));
            return QuotesDataService.quotes[randomItem];
        };

    });

    yogaApp.controller('appCtrl', ['$scope', function($scope) {
        
        
        
    }]);

    yogaApp.controller('homeCtrl', function($scope) {
        
              
    });

    yogaApp.controller('contactCtrl', function($scope) {
        
        

    });

    yogaApp.controller('classesCtrl', ['$scope', 'ClassesService', function($scope, ClassesService) {
       
        $scope.classes = ClassesService.getAllClasses();

    }]);

    yogaApp.filter('durations', function() {
        
        return function(duration) {
            switch (duration) {
                case 1:
                    return '1 hour';
                case 2:
                    return '2 hours';
                case 3:
                    return 'Half day';
                case 4:
                    return 'Full day';
            }
        }

    });
    
}());
