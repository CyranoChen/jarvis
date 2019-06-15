require('dotenv').config();

module.exports = {
    getConfigs: function () {
        return {
            "BACKEND": {
                "APIKEY": process.env.SERVER_BACKEND_APIKEY,
                "APIURL": process.env.SERVER_BACKEND_APIURL
            },
            "INFOBOX": {
                "BATTERY": "85%",
                "DISTANCE": "1.231km",
                "TRASH": "92%",
                "ACCURACY": "82%"
            },
            "CASE": [
                {
                    "IMG": "temp-case1.jpg",
                    "NAME": "Bulbasaur",
                    "TIMESTAMP": "2019/6/15 12:47:35",
                    "CATEGORY": "DRY",
                    "CONFIDENCE": 0.89,
                    "ERROR": false
                },
                {
                    "IMG": "temp-case2.jpg",
                    "NAME": "Charmander",
                    "TIMESTAMP": "2019/6/15 12:47:35",
                    "CATEGORY": "WET",
                    "CONFIDENCE": 0.86,
                    "ERROR": false
                },
                {
                    "IMG": "temp-case3.jpg",
                    "NAME": "Squirtle",
                    "TIMESTAMP": "2019/6/15 12:47:35",
                    "CATEGORY": "RECYCLABLE",
                    "CONFIDENCE": 0.45,
                    "ERROR": true
                },
                {
                    "IMG": "temp-case4.jpg",
                    "NAME": "Caterpie",
                    "TIMESTAMP": "2019/6/15 12:47:35",
                    "CATEGORY": "HAZARDOUS",
                    "CONFIDENCE": 0.34,
                    "ERROR": true
                },
                {
                    "IMG": "temp-case5.jpg",
                    "NAME": "Rattata",
                    "TIMESTAMP": "2019/6/15 12:47:35",
                    "CATEGORY": "HAZARDOUS",
                    "CONFIDENCE": 0.78,
                    "ERROR": false
                },
                {
                    "IMG": "temp-case6.jpg",
                    "NAME": "Pikachu",
                    "TIMESTAMP": "2019/6/15 12:47:35",
                    "CATEGORY": "WET",
                    "CONFIDENCE": 0.95,
                    "ERROR": false
                },
            ]
        };
    }
};