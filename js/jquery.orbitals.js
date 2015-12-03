
(function ($) {
    'use strict';
    $.fn.orbitals = function (options) {
        var opts = $.extend({}, $.fn.orbitals.defaults, options);
        this.parent().wrap('<div class="orbital-rotater"></div>');
        $('.orbital-rotater').css({
            'height': '100%',
            'width': '100%'
        });


        createOrbitals(this, opts);
        return false;
    };

    function createOrbitals(elements, opts) {
        var counter = 0;
        var angleIncrement = 360 / $(elements).length;
        $(elements).each(function () {
            var originHeight = '0' + ' ' + ($(this).parent().height() / 2 - 7);
            $(this).wrap('<div id="orbital-' + counter + '" class="orbital-wrapper"></div>');

            var fromAngle =  angleIncrement*counter;
            var toAngle = (angleIncrement*counter)+360;
            $.keyframe.define({
                name: 'rotate' + counter,
                from: {
                    'transform': 'rotate(' + fromAngle.toString() + 'deg)' //Note that 'transform' will be autoprefixed for you
                },
                to: {
                    'transform': 'rotate(' + toAngle.toString() + 'deg)' //Note that 'transform' will be autoprefixed for you
                }
            });

            var counterFromAngle = (-1*angleIncrement)*counter;
            var counterToAngle = ((-1*angleIncrement)*counter)-360;
            $.keyframe.define({
                name: 'counterrotate' + counter,
                from: {
                    'transform': 'rotate(' + counterFromAngle + 'deg)' //Note that 'transform' will be autoprefixed for you
                },
                to: {
                    'transform': 'rotate(' + counterToAngle + 'deg)' //Note that 'transform' will be autoprefixed for you
                }
            });
            var duration = opts.duration;
            $(this).parent().playKeyframe({
                name: 'rotate' + counter, // name of the keyframe you want to bind to the selected element
                duration: duration, // [optional, default: 0, in ms] how long you want it to last in milliseconds
                timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
                iterationCount: 'infinite' //[optional, default:1]  how many times you want the animation to repeat
            });
            $(this).playKeyframe({
                name: 'counterrotate' + counter, // name of the keyframe you want to bind to the selected element
                duration: duration, // [optional, default: 0, in ms] how long you want it to last in milliseconds
                timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
                iterationCount: 'infinite' //[optional, default:1]  how many times you want the animation to repeat
            });

            $(this).parent().css({
                'transform-origin': originHeight + 'px',
                'position': 'absolute',
                'margin': '7px 50%'
            });
            counter++;
        });


    }

    $.fn.orbitals.defaults = {
        duration: '90s'
    };

})(jQuery);