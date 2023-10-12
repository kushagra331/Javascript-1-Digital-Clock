
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");
function updateClock(){
    //To get the time from the system
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    //changing AM-PM
    if(h>12){
        h=h-12;
        ampm="PM";
    }else{
        ampm="AM";
    }
    //console.log("Hour=",h,"Min=",m,"Sec=",s,"ampm=",ampm);
    //Adding 0 in the value
    h = h<10 ? "0" +h : h;
    m = m<10 ? "0" +m : m;
    s = s<10 ? "0" +s : s;    

    //Assigning Value in the HTML
    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;
    ampmEl.innerText=ampm;
    setTimeout(()=>{
        updateClock();
    });
}

updateClock();