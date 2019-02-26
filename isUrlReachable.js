const https = require('http');
const url = require('url');

const isUrlReachable = (urlPath) => {
    const options = {
        method: 'HEAD',
        host: url.parse(urlPath).host,
        port: 80,
        path: url.parse(urlPath).pathname
    };

    return new Promise((resolve, reject) => {
        https
            .request(options, result =>
                resolve(/4\d\d/.test(result.statusCode) === false)
            )
            .on('error', error => reject(false))
            .end();
    });
};

isUrlReachable('https://jsonplaceholder.typicode.com/posts/1')
    .then(console.log)
    .catch(console.error);

isUrlReachable('https://jsonplaceholderr.typicode.com/posts/1')
    .then(console.log)
    .catch(console.error);
