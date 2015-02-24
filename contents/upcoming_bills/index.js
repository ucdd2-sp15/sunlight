var upcoming_bills = {

    searchByDate: function(date) {

        // search legistalors by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        } 

        if(mm<10) {
            mm='0'+mm
        }

        today = yyyy+'-'+mm+'-'+dd

        var date = date || today

        $.get("https://congress.api.sunlightfoundation.com/upcoming_bills?legislative_day=" + date, apikey, function(data) {

            console.log('got ' + data)
            if (data.results){

                $.get("/sunlight/upcoming_bills/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    searchByCongress: function(congress) {

        // search legistalors by name
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/upcoming_bills?congress=" + congress, apikey, function(data) {

            $.get("/sunlight/upcoming_bills/list.jade", function(template) {
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

        $.get("https://congress.api.sunlightfoundation.com/upcoming_bills?chamber=" + chamber, apikey, function(data) {

            $.get("/sunlight/upcoming_bills/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },    

    searchByRange: function(range) {

        // search legistalors by chamber 
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/upcoming_bills?range=" + range, apikey, function(data) {

            $.get("/sunlight/upcoming_bills/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },   

    load: function() {

        $.get("/sunlight/upcoming_bills/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        // upcoming_bills.searchByDate('day')

    }

}