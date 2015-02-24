var districts = {

    searchByZipcode: function(zipcode) {

        // search legistalors by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/districts.html

        var zipcode = zipcode || '80301';

        $.get("https://congress.api.sunlightfoundation.com/districts/locate?zip=" + zipcode, apikey, function(data) {

            console.log('got ' + data);
            if (data.results){

                $.get("/sunlight/districts/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    });
                    console.log(html);
                    $("#list").html(html)
                })

            }

        })

    },

    searchByName: function(name) {

        // search districts by name
        // ref: https://sunlightlabs.github.io/congress/districs.html

        $.get("https://congress.api.sunlightfoundation.com/districts?query=" + name, apikey, function(data) {

            $.get("/sunlight/districts/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                });
                $("#list").html(html)
            })

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