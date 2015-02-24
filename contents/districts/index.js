var districts = {

    searchByZipcode: function(zipcode) {


        // ref: https://sunlightlabs.github.io/congress/districts.html

        var zipcode = zipcode || '80301'

        $.get("https://congress.api.sunlightfoundation.com/districts/locate?zip=" + zipcode, apikey, function(data) {

            console.log('got ' + data)
            if (data.results){

                $.get("/sunlight/districts/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    load: function() {

        $.get("/sunlight/districts/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        districts.searchByZipcode()

    }
}