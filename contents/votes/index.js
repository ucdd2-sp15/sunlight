var votes={
	searchByChamber: function(chamber){
		$.get("https://congress.api.sunlightfoundation.com/votes?chamber=" + chamber, apikey, function(data) {
			$.get("/sunlight/votes/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })
		})
	},
	searchByNumber: function(number){
		$.get("https://congress.api.sunlightfoundation.com/votes?number=" + number, apikey, function(data) {

            $.get("/sunlight/votes/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })
	},
    load: function() {

        $.get("/sunlight/votes/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        votes.searchByChamber('senate')

    }
}