// ===============================================================================
// LOAD friendList DATA
// ===============================================================================
var friends = require('../data/friends.js');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Request
    // Below code handles when users "visit" a page.
    // When a user visits a link
    // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    // Displays all friends in the friendList array
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a survey request... this data is then sent to the server...
    // Then the server saves the data to the friends array)
    // ---------------------------------------------------------------------------

    // Create New Friend - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newfriend = req.body;
        // scores array for new friend (req parameter)
        var newScores = req.body.scores;
        var bestIndex = 0;
        var bestCount = 9999;

        // find "best match" for the new friend
        for (var i = 0; i < friends.length; i++) {
            var loopDiff = 0;
            for (var j = 0; j < newScores.length; j++) {
                loopDiff = loopDiff + Math.abs(newScores[j] - friends[i].scores[j]);
            }

            // update the bestIndex if this difference is the lowest
            if (loopDiff < bestCount) {
                bestIndex = i;
                bestCount = loopDiff;
            }
        }

        var bestfriend = friends[bestIndex];

        // add new entry to friends array
        friends.push(newfriend);

        // return the best friend object to be displayed in the modal on survey page
        res.json(bestfriend);
    });

}
