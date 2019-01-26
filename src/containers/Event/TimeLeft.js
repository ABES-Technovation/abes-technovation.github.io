
const TimeLeft = (dateInString) => {

    const now = new Date().getTime();
    const date = new Date(dateInString);
    let dateDistance = date - now;

    if (dateDistance < 0) {
        return -1;
    }

    let days = Math.floor(dateDistance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDistance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDistance % (1000 * 60)) / 1000);

    // console.log(days, hours, minutes, seconds)

    return [days, hours, minutes, seconds];
}

export default TimeLeft;