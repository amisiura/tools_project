(function($, undefined) {

    var textArr=['research', 'analisys','decision', 'success'];

    $('.text').append('<p/>');
    $('.text p').last().text('research');

    $('#myCarousel').carousel({wrap:false});

    $("#myCarousel").on(
        'slide.bs.carousel', function ()
        {
            if ($('.text p').length<4)
            {

                $('.text').append('<p/>');
                var n = $('.active').index() + 1;

                var str = textArr[n];
                var h = $('.text p').last();
                h.text(str);
            }

        });




    $('.menu > li').hover(function () {

            clearTimeout($.data(this,'timer'));

            $('ul',this).stop(true,true).slideDown(400);

        },
        function () {

            $.data(this, 'timer', setTimeout($.proxy(function ()
            {
                $('ul', this).stop(true, true).slideUp(400);
            }, this), 100));

        }

    )


    $('article').hide();
    $('article').load('history.html').fadeIn('slow');




    $('#hist').click(function () {
        $('.new').remove();
        $('#myCarousel').show();
        $('article').empty();
        $('article').load('history.html').fadeIn('slow');
        return false;
    });

    $('#goal').click(function () {
        $('.new').remove();
        $('#myCarousel').show();
        $('article').empty();
        $('article').load('goals.html');
        return false;
    });


    $('#achiv').click(function () {
        $('.new').remove();
        $('#myCarousel').show();
        $('article').empty();
        $('article').load('achievments.html');
        return false;
    });


    $('#manag').click(function () {
        $('.new').remove();
        $('#myCarousel').hide();
        $('.text').hide();
        $('article').hide();

        var $d = $('<div/>').addClass('new').appendTo('body');
        $d.load('management.html .container-fluid');

        return false;
    });






})(jQuery);

