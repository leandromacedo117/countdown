import { useState } from "react";

const useCountdown  = (date) => {
    // importação para APP.jxs
    const[day,setDay] = useState()
    const[hour,setHour] = useState()
    const[minute,setMinute] = useState()
    const[segund,setSegund] = useState()

    const CountDown = () =>{
            const countDate = new Date(date).getTime()
    const atuDate  = new Date().getTime();
   
    // calc interval of countDate and atuDate
    const interval = countDate - atuDate;

    // transformando em segundos, minuntos, segundos e dias 
    const segund = 1000;
    const minute = segund * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(interval/day)
    const hourNumber = Math.floor((interval % day)/hour)
    const minuteNumber = Math.floor((interval % hour)/minute)
    const segundNumber = Math.floor((interval % minute)/segund)

    setDay(dayNumber)
    setHour(hourNumber)
    setMinute(minuteNumber)
    setSegund(segundNumber)
    }
  
    // atulizar a cada segundo
    setInterval(CountDown, 1000);

    // return sets
    return[day, hour, minute, segund]
}

export default useCountdown;