/*
*
* ng-codepen v0.0.1
*
* (c) 2013-2014 Sercan Eraslan http://sercaneraslan.com
* License: MIT
*
*/
angular.module('ngCodepen', []).
    directive('codepen', function() {

        return {
            restrict: 'A',
            replace: true,
            transclude: true,
            scope: true,
            template: '<iframe scrolling="no" frameborder="0" class="cp_embed_iframe" allowtransparency="true" allowfullscreen="true" style="width: 100%; overflow: hidden;"></iframe>',
            controller: ['$scope', '$element', '$attrs', '$transclude', function ($scope, $element, $attrs, $transclude) {

                var url = document.location.protocol
                    + '//codepen.io/' + $attrs.cpUser
                    + '/embed/' + $attrs.cpSlugHash
                    + '?user=' + $attrs.cpUser
                    + '&height=' + $attrs.cpHeight
                    + '&theme-id=' + $attrs.cpThemeId
                    + '&slug-hash=' + $attrs.cpSlugHash
                    + '&default-tab=' + $attrs.cpDefaultTab;

                $transclude(function () {
                    $element.attr('src', url)
                        .attr('height', $attrs.cpHeight)
                        .attr('id', 'cp_embed_' + $attrs.cpSlugHash);
                });
            }]
        };
    });
