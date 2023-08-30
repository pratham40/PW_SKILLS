let calculateRemainingDays=(eventDate)=>{
    let currentDate=new Date();
    let event_Date=new Date(eventDate);
    const daysRemaining=Math.ceil((event_Date-currentDate)/(1000*86400))
    return daysRemaining
}

const eventDate='2023-08-31'
console.log(calculateRemainingDays(eventDate));