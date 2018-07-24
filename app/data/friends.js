
//array to hold data for 'friends' that have taken the survey
//initialize with seed data
var friendList = [
    {
        name: 'Suzy Smith',
        photo: 'https://images.pexels.com/photos/898978/pexels-photo-898978.jpeg?auto=compress&cs=tinysrgb&h=350',
        scores: [
            "4",
            "5",
            "5",
            "2",
            "4",
            "5",
            "4",
            "4",
            "3",
            "4"
        ]
    },
    {
        name: 'Bobby Baldwin',
        photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350',
        scores: [
            "4",
            "1",
            "2",
            "2",
            "4",
            "3",
            "4",
            "1",
            "1",
            "1"
        ]
    },
    {
        name: 'Daisy Duke',
        photo: 'https://i.pinimg.com/736x/4c/f1/98/4cf198b6247791dfd38ff894b7a8aa79--short-denim-short-shorts.jpg',
        scores: [
            "5",
            "2",
            "2",
            "1",
            "4",
            "3",
            "3",
            "2",
            "1",
            "4"
        ]
    },
    {
        name: 'Daffy Duck',
        photo: 'https://vignette.wikia.nocookie.net/villains/images/4/45/Daffy_Duck_Official.png/revision/latest?cb=20170714013403',
        scores: [
            "2",
            "1",
            "1",
            "2",
            "2",
            "1",
            "1",
            "2",
            "2",
            "1"
        ]
    }
]

// Export the array. This makes it accessible to other files using require.
module.exports = friendList;
