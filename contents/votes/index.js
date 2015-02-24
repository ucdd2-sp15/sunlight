var votes = {

    searchByYear: function(year) {

        var year = year || '2013'

        $.get("https://congress.api.sunlightfoundation.com/votes?query="+year, apikey, function(data) {

            console.log('got ' + data)
            if (data.results){

                $.get("/sunlight/votes/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

   searchByNumber: function(number) {

       
        $.get("https://congress.api.sunlightfoundation.com/votes?query=" + number, apikey, function(data) {

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
        votes.searchByYear('2013')

    }

}