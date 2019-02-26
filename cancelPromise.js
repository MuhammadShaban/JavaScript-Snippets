const cancelPromise = ({cb, data}) => cb(data);
const promise = new Promise((resolve, reject) => {
    const timeOut = {
        timer: 5000,
        data: {
            cb: reject,
            data: 'Time Out In: 5 Seconds'
        }
    };

    setTimeout(resolve, 10000, 10); // This code will run after 10 seconds
    setTimeout(cancelPromise, timeOut.timer, timeOut.data); // This code will run after 5 seconds & cancel promise
});
promise.then(console.log);
