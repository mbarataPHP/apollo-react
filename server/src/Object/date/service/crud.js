import {DateObject} from '../Class/DateObject';

export default {

    /**
     *
     * @param date
     */
    createDate: (date = null) => {
        if(date===null){
            date = new Date();
        }

        return new DateObject(date.getTime()+'');
    }
}