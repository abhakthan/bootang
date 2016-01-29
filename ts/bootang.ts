/// <reference path="../def/angular.d.ts" />

module controller {
    export class MainController {
        getName() {
            return 'Ajay';
        }
    }
}

module directive {
    export class Graph {
        render() {
            return {
                template: 'Hello';
            };
        }
    }
}

// Define application module
angular.module('bootang', []);

// bootstrap angular
angular.element(document).ready(function() {
    angular.bootstrap(document, ['bootang'], {
        strictDi: true
    });
});

angular.module('bootang')
    .controller('MainController', controller.MainController)
    .directive('graph', (new directive.Graph).render);