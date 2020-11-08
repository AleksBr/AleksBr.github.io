(function ($) {
    $(document).ready(function() {

        $.getJSON( "linux-command.json", function( data ) {

            let items = [];

            $.each( data.commands, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val['name'] + "</li>" );
            });

            $( "<ul/>", {
                "class": "my-new-list",
                html: items.join( "" )
            }).appendTo( "body" );
        });

    });
})(jQuery);