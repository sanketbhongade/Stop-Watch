let timerInterval;
let timerValue=0;
let running=false;

function startTimer(){
    if(!running){
        running=true;
        timerInterval=setInterval(updateTimer,1000);
    }
}

function stopTimer(){
    if(running){
        running=false;
        clearInterval(timerInterval);
    }
}

function resetTimer(){
    stopTimer();
    timerValue=0;
    updateDisplay();
}

function updateTimer(){
    timerValue++;
    updateDisplay();
}

function updateDisplay(){
    const hours= Math.floor(timerValue / 3600);
    const minutes=Math.floor((timerValue % 3600) / 60);
    const seconds= timerValue % 60;

    const formattedTimer=hours+":"+minutes+":"+seconds;

    document.getElementById('timer').textContent=formattedTimer;
}

