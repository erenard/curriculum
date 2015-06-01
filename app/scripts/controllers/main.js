'use strict';

/**
 * @ngdoc function
 * @name curriculumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the curriculumApp
 */
angular.module('curriculumApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title = {
        label: 'Ingénieur full-stack',
        url: 'http://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/'
    };

    $scope.trainingCourses = [
        {
            diploma: 'DEA Informatique distribuée',
            year: 2004,
            school: 'Université Paris Sud',
            url: 'www.u-psud.fr'
        },
        {
            diploma: 'Ingénieur système et réseaux',
            year: 2003,
            school: "Ecole centrale d'éléctronique",
            url: 'www.ece.fr'
        }
    ];

    $scope.experiences = [
        {
            company: "RTE, Réseau de transport d’électricité",
            url: "www.rte-france.com",
            from: "10/2014",
            to: "08/2015",
            title: "Développeur full-stack",
            description: "Le projet APOGEE consiste à expérimenter de manière opérationnelle une pratique de conduite des réseaux électriques basée sur une forte automatisation des actions en temps réel et un anticipation renforcée des moyens d'actions pour assurer la sureté du système électrique.",
            technologies: ['AngularJS', 'Bootstrap', 'vis.js', 'Three.js', 'node.js', 'karma', 'gulp', 'gradle', 'openlayers', 'd3.js']
        },
        {
            company: "RTE, Réseau de transport d’électricité",
            url: "www.rte-france.com",
            from: "10/2014",
            to: "08/2015",
            title: "Développeur full-stack",
            description: "Le projet APOGEE consiste à expérimenter de manière opérationnelle une pratique de conduite des réseaux électriques basée sur une forte automatisation des actions en temps réel et un anticipation renforcée des moyens d'actions pour assurer la sureté du système électrique.",
            technologies: ['AngularJS', 'Bootstrap', 'vis.js', 'Three.js', 'node.js', 'karma', 'gulp', 'gradle', 'openlayers', 'd3.js']
        }
    ];

  });
