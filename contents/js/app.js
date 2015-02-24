$( "#legislators" ).on( "click", function( event ) {
    legislators.load()
})

$( "#districts" ).on( "click", function( event ) {
    districts.load()
})

$( "#votes" ).on( "click", function( event ) {
    votes.load()
})

// TODO: add loaders for more features