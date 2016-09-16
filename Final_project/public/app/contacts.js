(function($, undefined) {

    $('#phone').on('change',


        function () {
            var re = /^\d[\d\(\)\ -]{4,14}\d$/;
            var myPhone = document.getElementById('phone').value;
            var valid = re.test(myPhone);
            if (valid) output = 'Номер телефона введен правильно!';
            else output = 'Номер телефона введен неправильно!';

            alert(''+output+'');
            return valid;
        }
    )


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



})(jQuery);