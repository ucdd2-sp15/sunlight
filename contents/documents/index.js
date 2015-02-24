var documents = {

    searchByTitle : function(title) {

        // search legistalors by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/documents/search?title=" + title, apikey, function(data) {

                $.get("/sunlight/documents/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    $("#list").html(html)
                })
        })

    },

    searchByType: function(type) {

        // search legistalors by name
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        $.get("https://congress.api.sunlightfoundation.com/documents/search?document_type=" + type, apikey, function(data) {

            $.get("/sunlight/documents/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })

        })

    },

    load: function() {

        $.get("/sunlight/documents/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        legislators.searchByChamber('senate')

    }

}
