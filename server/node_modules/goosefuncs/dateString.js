function dateString() {
    const date = new Date();
    const month = date.getMonth() + 1;

    let monthName = "January";

    switch (month) {
        case month === 2:
            monthName = "Februaury";
            return;

        case month === 3:
            monthName = "March";
            return;

        case month === 4:
            monthName = "April";
            return;

        case month === 5:
            monthName = "May";
            return;

        case month === 6:
            monthName = "June";
            return;

        case month === 7:
            monthName = "July";
            return;

        case month === 8:
            monthName = "August";
            return;

        case month === 9:
            monthName = "Septembr";
            return;

        case month === 10:
            monthName = "October";
            return;

        case month === 11:
            monthName = "November";
            return;

        case month === 12:
            monthName = "December";
            return;

        default:
            monthName = "January";
    }

  return (`[${date.getDate()} ${monthName} ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`);
}


module.exports = dateString