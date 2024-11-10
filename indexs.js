const input = document.querySelectorAll('.input');
const hour = input[0];
const min = input[1];
const sec = input[2];
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let count;

start.addEventListener('click',()=>{
        stop.style.display = "initial";
        start.style.display = "none"
    if(hour.value == "00" && min.value == "00" && sec.value == "00"){
        return ;
    }
    count = setInterval(() => {
        time();
    }, 1000);

       function time(){
        
        if(sec.value > 60){
            min.value++;
        sec.value = sec.value - 59;
     }
        if(min.value > 60){
            hour.value++;
        min.value = min.value - 60;
    }
        if(hour.value == 0 && min.value == 0 && sec.value == 0){
        hour.value = "";
        min.value = "";
        sec.value = "";
        stopInterval()
        }
   
       if(sec.value != 0){
            sec.value = `${sec.value <= 10 ? "0":""}${sec.value -1}`;
        }
       if( min.value !=0 && sec.value == 0 ){
            sec.value = 59 ;
            min.value = `${min.value <= 10 ? "0":""}${min.value -1}`;
        }
       if( hour.value !=0 && min.value == 0 ){
            min.value = 59 ;
            sec.value = 59 ;
            hour.value = `${hour.value <= 10 ? "0":""}${hour.value -1}`;
        }
      
    
}})
function stopInterval(main){
    start.innerHTML = main == 'pause' ? "countinue":"start";
    stop.style.display = "none";
    start.style.display = "initial"
    clearInterval(count);
    
}
stop.addEventListener('click',()=>{
    stopInterval('pause');
    
    })

    reset.addEventListener('click',()=>{
        hour.value = ""
        min.value = ""
        sec.value = ""
        stopInterval();
})


