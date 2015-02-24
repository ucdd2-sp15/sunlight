var bills= {

    searchByActiveBills: function(activebills) {

        // search legistalors by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/legislators.html
        console.log(activebills);
        var activebills = activebills || 'true'

        $.get("https://congress.api.sunlightfoundation.com//bills?history.active=" + activebills + "&order=last_action_at", apikey, function(data) {

            // console.log('got ' + data)
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

    searchByVeto: function(vetoed) {

        // search legistalors by name
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/bills?history.vetoed=" + vetoed, apikey, function(data) {

            $.get("/sunlight/bills/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },


    searchByKeyword: function(keyword) {

        // search legistalors by chamber 
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/bills/search?query=" + keyword, apikey, function(data) {

            $.get("/sunlight/bills/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },    

    load: function() {

        $.get("/sunlight/bills/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        bills.searchByActiveBills('true')

    }

}