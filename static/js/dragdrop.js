$( function() {

    $( ".card > .button" ).on( "click", function( event ) {
        addToFavourite();
    });

    $( ".favourites" ).on( "click", ".suhael", function( event ) {
        deleteFavourite($(this));
    });

    $( ".card" ).draggable({
        connectToSortable: 'td.cell',
        revert: "invalid", // when not dropped, the item will revert back to its initial position
        containment: "document",
        helper: "clone",
        cursor: "move"
    });

    //http://devheart.org/examples/jquery-customizable-layout-using-drag-and-drop/1-getting-started-with-sortable-lists/index.html

    $('td.cell').sortable({
        connectWith: 'td.cell',
        placeholder: 'card',
        stop: function( event, ui ) {
            console.log($(ui.item).html());
            $(ui.item).addClass("smaller");
        }
    });

    function addToFavourite() {
        var $favourites = $(".favourites");
        var $list = $( "ul", $favourites ).length ?
            $( "ul", $favourites ) :
            $( "<ul class='list'/>" ).appendTo( $favourites );

       $("<li class='suhael'>test</li>").appendTo( $list );
    }

    function deleteFavourite($item) {
        $item.remove();
    }

} );
