var bills = {

    searchByRecentActivity: function(last_action_at) {

        // search legistalors by lstAction 
        // ref: https://congress.api.sunlightfoundation.com/bills?history.active=true&order=last_action_at

        var last_action_at = last_action_at || "2010-03-23"

        $.get("https://congress.api.sunlightfoundation.com/bills?last_action_at=" + last_action_at, apikey, function(data) {

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

    searchByBillID: function(bill_id) {

        $.get("https://congress.api.sunlightfoundation.com/bills?bill_id=" + bill_id, apikey, function(data) {

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

        $.get("https://congress.api.sunlightfoundation.com/legislators?chamber=" + chamber, apikey, function(data) {

            $.get("/sunlight/legislators/list.jade", function(template) {
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
        legislators.searchByChamber('senate')

    }

}
