$( "#legislators" ).on( "click", function( event ) {
    legislators.load()
})

$( "#districts" ).on( "click", function( event ) {
    districts.load()
})

$( "#committees" ).on( "click", function( event ) {
    committees.load()
})

// TODO: add loaders for more features