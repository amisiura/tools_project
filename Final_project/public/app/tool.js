

(function($, undefined) {


    $( document ).ready(function() {

        $('.menu > li').hover(function () {

                clearTimeout($.data(this, 'timer'));

                $('ul', this).stop(true, true).slideDown(400);

            },
            function () {

                $.data(this, 'timer', setTimeout($.proxy(function () {
                    $('ul', this).stop(true, true).slideUp(400);
                }, this), 100));

            }
        )


/////////////////
        $("#btn1").on('click', function () {


            if ($('.partOne .block').length < 5) {

                var $b = $('.partOne .block')
                    .last()
                    .clone()
                    .addClass('block' + ($('.block').length - 1));

                var $r = $b
                    .find('.radio-inline>input')
                    .attr("name", 'weight' + ($('.block').length - 1));


                $b.find('.radio-inline>input').replaceWith($r);
                $b.appendTo('.partOne');
            }

        })
////////////
        $("#btn2").on('click', function () {
            if ($('.partOne .block').length > 1) {
                $('.partOne .block:last').remove();
                $('.partTwo .block:last').remove();

            }

        })

        /////////
        $("#btn3").on('click', function () {

            if ($('.partTwo').length == 1) {
                $('.partTwo').remove();
                //$('.main:last').remove();

            }
            if ($('.main').length < 2) {

                var $p = $('.main')
                    .clone()
                    .removeClass('partOne')
                    .addClass('partTwo main col-xs-4 col-lg-5');

                $p
                    .find('.block .radio-inline>input').each(function (i, elem) {
                    var n = 0;
                    if (i < 3) {
                        n = 0
                    }
                    else if (i < 6) {
                        n = 1
                    }
                    else if (i < 9) {
                        n = 2
                    }
                    else if (i < 12) {
                        n = 3
                    }


                    $(this).attr("name", "weight" + 2 + n);


                    //$p.find('.radio-inline>input').replaceWith($rr);

                    $p.appendTo('.row');
                })
            }
        })
/////////////////////////////////////////////////////

        $.getJSON('data.json', function (data) {
            var items = [];
            var obj = {};
            obj = data;


            $("input[name=type]").on('change', function () {
                $('select[name=crit]').empty();

                if ($(this).val() == "1") {
                    var obj1 = obj[Object.keys(data)[0]];
                    $.each(obj1, function (key, value) {

                        $('select[name=crit]').append($("<option/>", {
                            value: key,
                            text: value
                        }));
                    })
                }
                ;

                if ($(this).val() == "2") {
                    var obj1 = obj[Object.keys(data)[1]];
                    $.each(obj1, function (key, value) {
                        $('select[name=crit]').append($("<option/>", {
                            value: key,
                            text: value
                        }));
                    })
                }
                ;

                if ($(this).val() == "3") {
                    var obj1 = obj[Object.keys(data)[2]];
                    $.each(obj1, function (key, value) {
                        $('select[name=crit]').append($("<option/>", {
                            value: key,
                            text: value
                        }));
                    })
                }
                ;

                if ($(this).val() == "4") {

                    var obj1 = obj[Object.keys(data)[3]];
                    $.each(obj1, function (key, value) {
                        $('select[name=crit]').append($("<option/>", {
                            value: key,
                            text: value
                        }));
                    })
                }
                ;


            });
        })
///////////////////////////////////////////////////

        $("#btn4").on('click', function () {
            $('#exampleModal h3').remove();

            var s1 =0;
            var s2=0;
            var r1=0;
            var r2=0;
            var l=$('.partOne .block').length;
            for (i=0;i<l;i++)
            {
                var w1 =$('.partOne .block:eq('+i+') input[type="radio"]:checked').val();
                var b1 =$('.partOne .block:eq('+i+') select[name=ball]').val();
                r1=b1*w1;

                s1+=r1;
            }

            for (i=0;i<l;i++)
            {
                var w2 =$('.partTwo .block:eq('+i+') input[type="radio"]:checked').val();
                var b2 =$('.partTwo .block:eq('+i+') select[name=ball]').val();
                r2=b2*w2;

                s2+=r2;
            }

            console.log(s1, s2);


            var result=s1/s2;
            var textResult='';

            if(result<0.7){
                textResult='......the second item is much better ';
            }

            if(+result<0.9){
                textResult='...The items are almost the same';
            }
            if(+result<1.1){
                textResult='...the first item is slightly better'
            }
            if(+result<1.3) {textResult='... the first item is much better than second'}

            $(function(){
                $('#exampleModal').arcticmodal();
            });

            $('#exampleModal').prepend('<h3> So, the conclusion is..:<br>'+textResult+'</h3>');
            ;



///                                        $modal.find('<p/>').text('test test test');


        })

    })



})(jQuery);

