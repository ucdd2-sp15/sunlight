var nominations = {

    all: function() {

        //var limit = limit || 20;

        $.get('http://congress.api.sunlightfoundation.com/nominations', apikey, function(data) {

            console.log('got ' + data);
            if (data.results) {

                $.get('/sunlight/nominations/list.jade', function(template) {
                    var html = jade.render(template, {
                        data: data
                    });
                    console.log(html);
                    $('#list').html(html);
                })
            }
        })
    },

    searchByCommitteeId: function(committee_id) {
        // search nominations by committee_id (default to ???????????????????????????????????????????)
        // ref: https://sunlightlabs.github.io/congress/nominations.html
        var committee_id = committee_id || 0;

        $.get('https://congress.api.sunlightfoundation.com/nominations?committee_ids=' + committee_id, apikey, function(data) {

            console.log('got ' + data);
            if (data.results) {

                $.get('/sunlight/nominations/list.jade', function(template) {
                    var html = jade.render(template, {
                        data: data
                    });
                    console.log(html);
                    $('#list').html(html)
                })
            }
        })
    },

    searchByQuery: function (query) {

        var query = query || "";

        $.get('https://congress.api.sunlightfoundation.com/nominations?query=' + query, apikey, function (data) {

            console.log('got ' + data);
            if (data.results) {

                $.get('/sunlight/nominations/list.jade', function(template) {
                    var html = jade.render(template, {
                        data: data
                    });
                    console.log(html);
                    $('#list').html(html);
                })
            }
        })
    },

    load: function() {

        $.get('/sunlight/nominations/ui.jade', function(template) {
            var html = jade.render(template);
            $('#ui').html(html);
        });

        // default search results
        nominations.all();
    }
};