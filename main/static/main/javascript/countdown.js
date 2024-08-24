'use strict';

function countdown(){
    const targetDate = new Date( 2024, 8, 21, 9, 0, 0);
    const endgetDate = new Date( 2024, 8, 21, 16, 0, 0);
    const now = new Date();
    const distance = targetDate.getTime() - now.getTime();
    const span = endgetDate.getTime() - now.getTime();

    const calsdays = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) );
    const calshours = Math.floor( ( distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
    const calsminutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
    const calsseconds = Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 );
    var sec;
    var min;
    var hour;
    var days;
    if(calsseconds<10)sec='0'+calsseconds;
    else sec=calsseconds;
    if(calsminutes<10)min='0'+calsminutes;
    else min=calsminutes;
    if(calshours<10)hour='0'+calshours;
    else hour=calshours;
    days = calsdays;
    if(distance >= 0){
        document.getElementsByClassName("index-countdown-content")[0].innerText=days+":"+hour+":"+min+ ":" + sec ;
    }
    else if(span >= 0){
        document.getElementsByClassName("index-countdown-content")[0].innerText="音展当日！！";
    }
    else{
        document.getElementsByClassName("index-countdown-content")[0].innerText="音展終了！！";
    }
}

setInterval(countdown, 500);
