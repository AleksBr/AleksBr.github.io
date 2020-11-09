(function ($) {
    $(document).ready(function () {

        $.getJSON("linux-command.json", function (data) {

            let items = [];

            $.each(data, function (key, val) {
                items.push("<a href='#' class='button' id='" + key + "'>" + key + "</a>");
            });

            // $("<ul/>", {
            //     "class": "js-command-list",
            //     html: items.join("")
            // }).appendTo(".list-block");

            $('.list-block').append(items);
        });

        $('.list-block').on('click', 'a', function (e) {
            e.preventDefault();
            $('.info-block').html('');
            $('.example-block').html('');
            let target = $(this).attr('id');
            let desc = "";
            let example = [];

            $.getJSON("linux-command.json", function (data) {

                $.each(data, function (key, val) {
                    if (key === target) {
                        desc = val['description'];
                        example = val['example'];
                        return false;
                    } else {
                        desc = "не заполнено";
                        example = "";
                    }
                });

                $('.info-block').append(desc);
                $('.example-block').append(example);
            });
        });

    });
})(jQuery);