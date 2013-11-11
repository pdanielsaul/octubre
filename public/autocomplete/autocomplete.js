var wordlist= [ "about", "above", "across", "after", "against",
    "along", "among", "around", "at", "before",
    "behind", "below", "beneath", "beside", "between",
    "beyond", "but", "by", "despite", "down", "during",
    "except", "for", "from", "in", "inside", "into",
    "like", "near", "of", "off", "on", "onto", "out",
    "outside", "over", "past", "since", "through",
    "throughout", "till", "to", "toward", "under",
    "underneath", "until", "up", "upon", "with",
    "within", "without"] ;

$("#input1").autocomplete({
    // The source option can be an array of terms.  In this case, if
    // the typed characters appear in any position in a term, then the
    // term is included in the autocomplete list.
    // The source option can also be a function that performs the search,
    // and calls a response function with the matched entries.
    source: function(req, responseFn) {
        console.log("args")
        console.log(this)
        console.log(arguments)
        window.x=this
        window.y=arguments
        console.log("args")
        var re = $.ui.autocomplete.escapeRegex(req.term);
        var matcher = new RegExp( "^" + re, "i" );
//        var a = $.grep( wordlist, function(item,index){
//            return matcher.test(item);
//        });
        a=["<b>asdasd</b>","<h1>qweqwe</h1>"]
        responseFn( a );
    }
});
console.log("asdasd");





