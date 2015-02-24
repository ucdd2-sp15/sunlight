var nominations = {

    searchByName: function(name) {

        // search nominations by name
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/nominations?query=" + name, apikey, function(data) {

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
        nominations.searchByName('David')

    }
}