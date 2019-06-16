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
                    "IMG": "case1.jpg",
                    "NAME": "baby diaper",
                    "TIMESTAMP": "2019/6/16 12:47:14",
                    "CATEGORY": "DRY",
                    "CONFIDENCE": 0.89,
                    "ERROR": false,
                    "STYLE": "warning"
                },
                {
                    "IMG": "case2.jpg",
                    "NAME": "banana peel",
                    "TIMESTAMP": "2019/6/16 09:37:35",
                    "CATEGORY": "WET",
                    "CONFIDENCE": 0.86,
                    "ERROR": false,
                    "STYLE": "success"
                },
                {
                    "IMG": "case3.jpg",
                    "NAME": "plastic bag",
                    "TIMESTAMP": "2019/6/15 23:42:35",
                    "CATEGORY": "RECYCLABLE",
                    "CONFIDENCE": 0.45,
                    "ERROR": true,
                    "STYLE": "info"
                },
                {
                    "IMG": "case4.jpg",
                    "NAME": "cigarette end",
                    "TIMESTAMP": "2019/6/15 22:17:35",
                    "CATEGORY": "HAZARDOUS",
                    "CONFIDENCE": 0.34,
                    "ERROR": true,
                    "STYLE": "danger"
                },
                {
                    "IMG": "case5.jpg",
                    "NAME": "battery",
                    "TIMESTAMP": "2019/6/15 21:13:35",
                    "CATEGORY": "HAZARDOUS",
                    "CONFIDENCE": 0.78,
                    "ERROR": false,
                    "STYLE": "danger"
                },
                {
                    "IMG": "case6.jpg",
                    "NAME": "cake",
                    "TIMESTAMP": "2019/6/15 20:00:35",
                    "CATEGORY": "WET",
                    "CONFIDENCE": 0.95,
                    "ERROR": false,
                    "STYLE": "success"
                },
            ]
        };
    }
};