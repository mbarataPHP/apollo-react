export class DateObject{

    /**
     *
     * @param dateTime
     */
    constructor(dateTime){
        this.dateTime = dateTime;
    }

    getDate(){
        let date = new Date();
        date.setTime(this.dateTime);
        return date;

    }


    /**
     *
     * @returns {string}
     */
    dateFr(){


        let aaaa = this.getDate().getUTCFullYear();
        let gg = this.getDate().getUTCDate();
        let mm = (this.getDate().getUTCMonth() + 1);

        if (gg < 10){
            gg = "0" + gg;
        }


        if (mm < 10){
            mm = "0" + mm;
        }


        let cur_day = gg + "-" + mm + "-" + aaaa;

        let hours = this.getDate().getUTCHours();
        let minutes = this.getDate().getUTCMinutes();
        let seconds = this.getDate().getUTCSeconds();

        if (hours < 10){
            hours = "0" + hours;
        }


        if (minutes < 10){
            minutes = "0" + minutes;
        }

        if (seconds < 10){
            seconds = "0" + seconds;
        }


        return cur_day + " " + hours + ":" + minutes + ":" + seconds;
    }
}