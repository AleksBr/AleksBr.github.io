(function ($) {
    $(document).ready(function () {

        $.getJSON("linux-command.json", function (data) {

            let items = [];

            $.each(data, function (key, val) {
                items.push("<li id='" + key + "'>" + key + "</li>");
            });

            $("<ul/>", {
                "class": "js-command-list",
                html: items.join("")
            }).appendTo(".list-block");
        });

        $('.list-block').on('click', 'li', function (e) {
            $('.info-block').html('');
            let target = $(this).attr('id');
            let desc = "";
            let example = [];

            $.getJSON("linux-command.json", function (data) {

                $.each(data, function (key, val) {
                    if(key === target) {
                        desc = val['description'];
                        example = val['example'];
                    }
                });

                $('.info-block').append(desc);
                $('.info-block').append(example);
            });
        });

    });
})(jQuery);