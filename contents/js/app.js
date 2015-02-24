$( "#legislators" ).on( "click", function( event ) {
    legislators.load()
})

$( "#districts" ).on( "click", function( event ) {
    districts.load()
})

$( "#committee" ).on( "click", function( event ) {
    committee.load()
})

// TODO: add loaders for more features