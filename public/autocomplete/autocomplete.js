$(function() {

    $("#topic_title").autocomplete({
        source: "/users.json",
        minLength: 1,
        select: function(event, ui) {
            var url = ui.item.id;
            if(url != '#') {
                location.href = '/users/' + url;
            }
        },
 
        html: true, // optional (jquery.ui.autocomplete.html.js required)

      // optional (if other layers overlap autocomplete list)
        open: function(event, ui) {
            $(".ui-autocomplete").css("z-index", 1000);
        }
    });
 
});
