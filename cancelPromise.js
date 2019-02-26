const cancelPromise = ({ cb, data }) => cb(data);
const timeoutPromise = (timeOutData) => setTimeout(cancelPromise, timeOutData.timer, timeOutData.data);
const promise = new Promise((resolve, reject) => {
    const timeOutData = {
        timer: 2000,
        data: {
            cb: resolve,
            data: 'Promise time out after 2 Seconds'
        }
    };

    setTimeout(resolve, 5000, 10); // This code will run after 5 seconds
    timeoutPromise(timeOutData); // This code will run after 2 seconds & cancel promise
});

promise.then(console.log);
