const req = require('request');

const config = require('./config');

module.exports = {
    getCameraVideo
};

const _configs = config.getConfigs();

const headers = {
    'APIKey': _configs.LEONARDO.APIKEY,
    'Accept': 'application/json'
    // 'content-type' : 'multipart/form-data'
};

async function getCameraVideo() {
    return new Promise((resolve, reject) => {
        req.post(_configs.LEONARDO.SIMILARITYSCORING_APIURL, {
            formData: {
                texts: JSON.stringify(vectors),
                options: JSON.stringify({ "numSimilarVectors": numSimilarVectors })
            },
            json: true,
            headers: headers
        }, (err, res, body) => {
            if (err) { reject(err); }
            resolve(body);
        });
    });
}
