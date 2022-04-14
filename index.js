const CEE = new Date(2023,5,7);
const start = new Date(2020,7,18)
const day = document.getElementById("day");
const hour= document.getElementById("hour");
const min = document.getElementById("min");
const bar = document.getElementById("bar-line")

update();
    function update() {
        let now = new Date();
        dayd=Math.ceil((CEE.getTime()-now.getTime())/1000/60/60/24);
        hourd=Math.ceil((CEE.getTime()-now.getTime())/1000/60/60);
        mind=Math.ceil((CEE.getTime()-now.getTime())/1000/60);
            
            
            
        day.textContent=dayd+"天"
        hour.textContent=hourd+"时"
        min.textContent=mind+"分"
        
        bar.style.width=Math.ceil(((now.getTime()-start.getTime())/(CEE.getTime()-start.getTime())*100))+"%"
        bar.textContent = "你的高中时代已过去了"+Math.ceil(((now.getTime()-start.getTime())/(CEE.getTime()-start.getTime())*100))+"%";
        setTimeout(update,500)
    }
