var nominations = {

    // https://sunlightlabs.github.io/congress/nominations.html

    searchByCommitteId: function(committee_ids) {


        var committee_ids = committee_ids || 'SSAS'
        console.log("HELLO")

        $.get("https://congress.api.sunlightfoundation.com/nominations?committee_ids=" + committee_ids, apikey, function(data) {

            console.log('got ' + data)
            if (data.results){

                $.get("/sunlight/nominations/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    searchByOrganization: function(name) {

        // search legistalors by name
        // ref: https://sunlightlabs.github.io/congress/nominations.html

        $.get("https://congress.api.sunlightfoundation.com/nominations?organization=" + name, apikey, function(data) {

            $.get("/sunlight/nominations/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },


    searchByQuery: function(query) {

        // search legistalors by query
        // ref: https://sunlightlabs.github.io/congress/nominations.html

        $.get("https://congress.api.sunlightfoundation.com/nominations?query=" + query, apikey, function(data) {

            $.get("/sunlight/nominations/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },

    load: function() {

        $.get("/sunlight/nominations/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        nominations.searchByCommitteId('SSAS')

    }

}
