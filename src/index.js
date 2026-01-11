function getTimeStamp() {
    return Date.now();
}

function getLongTime(locale = "es-ES"){
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };

    const date = new Date();
    return date.toLocaleString(locale, options);
    

}


module.exports = {
    getTimeStamp,
    getLongTime
};


