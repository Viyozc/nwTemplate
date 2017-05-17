var directives = angular.module('directives',[])
directives.directive('caseVideo',['$interval',function ($interval) {
        return {
            restrict:'AE',
            replace:true,
            transclude:true,
            templateUrl:'./views/components/caseVideo.html',
            scope:{
                url:'=',
                loop:'=',
                autoplay:'=',
                poster:'=',
                preload:'='
            },
            link:function (scope, element, attrs, controller, transcludeFn) {
                document.getElementsByClassName('video-progress')[0].addEventListener('click',function () {
                    console.log('play');
                    alert();
                })
                angular.element(element).click(function () {
                    console.log('video')
                })
                console.log('video page');


            }
        }
    }])
// directives.directive('videoPlay',function () {
//     return {
//         restrict:'AE',
//         replace:true,
//         template:'<div class="video-play">play</div>',
//         scope:{
//             state:'=',
//             play:'&',
//             stop:'&'
//         },
//         link:function (scope, elem, attrs, controller) {
//             // elem.on('click',function () {
//             //     state === 'paused'? play() : stop();
//             // })
//         }
//
//     }
// })
//
//
//
//
//
// directives.directive('afterRepeat',['$timeout',function ($timeout) {
//     return function (scope,elem,attrs) {
//         // if(scope.$last){
//             // if(attrs['afterRepeat']){
//             //     scope.$eval(attrs['afterRepeat'])
//             // }
//         // }
//     }
// }]);

