var committee = {

    searchByLegislators: function(legislators) {

        // search legislators by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/committees.html

 
        $.get("https://congress.api.sunlightfoundation.com/committees?member_ids=" + legislators, apikey, function(data) {
            
            if (data.results){
                
                $.get("/sunlight/committee/list.jade", function(template) {
                    
                    var html = jade.render(template, {
                        data: data
                    })
                    $("#list").html(html)
                })
            }
        })
    },

    searchByName: function(name) {

        // search legislators by name
        // ref: https://sunlightlabs.github.io/congress/committees.html

        $.get("https://congress.api.sunlightfoundation.com/committees?query=" + name + "&fields=members", apikey, function(data) {

            $.get("/sunlight/committee/list2.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },

    load: function() {

        $.get("/sunlight/committee/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        legislators.searchByChamber('senate')

    }

}