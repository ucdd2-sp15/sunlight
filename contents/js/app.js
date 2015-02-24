$( "#legislators" ).on( "click", function( event ) {
    legislators.load()
})

$( "#districts" ).on( "click", function( event ) {
    districts.load()
})

$( "#upcoming_bills" ).on( "click", function( event ) {
    upcoming_bills.load()
})

$("#votes").on("click", function(event){
	votes.load()
})

$( "#floor_updates" ).on( "click", function( event ) {
    floor_updates.load()
})
