var committees = {

    searchByLegislators: function(legislators) {

        // search legistalors by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/committees.html

        var legislators = $.get("https://congress.api.sunlightfoundation.com/legislators?query=" + name, apikey, function(data) {
                return data
            })

        $.get("https://congress.api.sunlightfoundation.com/committees/?member_ids=" + legislators.bioguide_id, apikey, function(data) {

            console.log('got ' + data)
            if (data.results){

                $.get("/sunlight/committee/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    searchByName: function(name) {

        // search legistalors by name
        // ref: https://sunlightlabs.github.io/congress/committees.html

        $.get("https://congress.api.sunlightfoundation.com/committees?committee_id=" + name + "&fields=members", apikey, function(data) {

            $.get("/sunlight/committee/list.jade", function(template) {
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