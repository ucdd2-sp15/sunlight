$( "#legislators" ).on( "click", function( event ) {
    legislators.load()
})

$( "#districts" ).on( "click", function( event ) {
    districts.load()
})

$('#documents').on("click", function(event){
    documents.load()
})

// TODO: add loaders for more features
