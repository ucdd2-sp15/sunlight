$( "#legislators" ).on( "click", function( event ) {
    legislators.load()
})

$( "#districts" ).on( "click", function( event ) {
    districts.load()
})

$('#documents').on("click", function(event){
    documents.load()
})

$('#bills').on("click", function(event){
    bills.load()
})

$('#nominations').on("click", function(event){
    nominations.load()
})

