var controller;
(function (controller) {
    var MainController = (function () {
        function MainController() {
        }
        MainController.prototype.getName = function () {
            return 'Ajay';
        };
        return MainController;
    })();
    controller.MainController = MainController;
})(controller || (controller = {}));
var directive;
(function (directive) {
    var Graph = (function () {
        function Graph() {
        }
        Graph.prototype.render = function () {
            return {
                template: 'Hello'
            };
        };
        return Graph;
    })();
    directive.Graph = Graph;
})(directive || (directive = {}));
angular.module('bootang', []);
angular.element(document).ready(function () {
    angular.bootstrap(document, ['bootang'], {
        strictDi: true
    });
});
angular.module('bootang')
    .controller('MainController', controller.MainController)
    .directive('graph', (new directive.Graph).render);
//# sourceMappingURL=bootang.js.map