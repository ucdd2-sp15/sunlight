$( "#legislators" ).on( "click", function( event ) {
    legislators.load()
})

$( "#districts" ).on( "click", function( event ) {
    districts.load()
})

// TODO: add loaders for more features

$('#bills').on('click', function(event) {
	bills.load()
})