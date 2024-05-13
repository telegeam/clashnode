(function($) {
    "use strict";
    
    $(document).on('ready', function() {
        window.loopcounter = function(idWarp) {
            if (typeof idWarp != 'undefined') {
                var date = $('.' + idWarp).data('date');



                var start = new Date(date),
                    end = new Date(),
                    diff = new Date(start - end),
                    time = diff / 1000 / 60 / 60 / 24;

                var day = parseInt(time);
                var hour = parseInt(24 - (diff / 1000 / 60 / 60) % 24);
                var min = parseInt(60 - (diff / 1000 / 60) % 60);
                var sec = parseInt(60 - (diff / 1000) % 60);

                counterDate(idWarp, day, hour, min, sec);

                var interval = setInterval(function() {
                    if (sec == 0 && min != 0) {
                        min--;
                        sec = 60;
                    }
                    if (min == 0 && sec == 0 && hour != 0) {
                        hour--;
                        min = 59;
                        sec = 60;
                    }
                    if (min == 0 && sec == 0 && hour == 0 && day != 0) {
                        day--;
                        hour = 23;
                        min = 59;
                        sec = 60;
                    }
                    if (min == 0 && sec == 0 && hour == 0 && day == 0) {
                        clearInterval(interval);
                    } else {
                        sec--;
                    }
                    counterDate(idWarp, day, hour, min, sec);
                }, 1000);

                function counterDate(id, day, hour, min, sec) {
                    if (time < 0) {
                        day = hour = min = sec = 0;
                    }
                    $('.' + id + ' .counter-days').html(counterDoubleDigit(day));
                    $('.' + id + ' .counter-hours').html(counterDoubleDigit(hour));
                    $('.' + id + ' .counter-minutes').html(counterDoubleDigit(min));
                    $('.' + id + ' .counter-seconds').html(counterDoubleDigit(sec));
                }

                function counterDoubleDigit(arg) {
                    if (arg.toString().length <= 1) {
                        arg = ('0' + arg).slice(-2);
                    }
                    return arg;
                }
            }
        }
        //loopcounter( 'counter-id' );
    });
})(jQuery); // End jQuery