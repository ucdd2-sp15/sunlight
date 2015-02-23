var bills = {

    searchByCongress: function(congress) {

        // search legistalors by congressional sessions. (default to Most Recent)
        // ref: https://sunlightlabs.github.io/congress/.html

        var congress = congress || '113'

        $.get("https://congress.api.sunlightfoundation.com/bills/?congress=" + zipcode, apikey, function(data) {

            console.log('got ' + data)
            if (data.results){

                $.get("/sunlight/bills/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    searchByText: function(text) {

        // search legistalors by name
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/bills/search?query=" + name, apikey, function(data) {

            $.get("/sunlight/bills/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },


    searchByChamber: function(chamber) {

        // search legistalors by chamber 
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/bills?chamber=" + chamber, apikey, function(data) {

            $.get("/sunlight/bills/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },    

    load: function() {

        $.get("/sunlight/legislators/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        legislators.searchByChamber('senate')

    }

}
