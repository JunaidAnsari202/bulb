let button=document.getElementById('btn')
    let bulb=document.getElementById('bulb')
    button.addEventListener('click',bulbs)
    function bulbs(e){
        if(button.textContent.includes('on')){
            bulb.src="img/off.jpg"
            button.textContent="Turn on"
            button.textContent="Turn off"
        }
        else{
            bulb.src="img/on.jpg" 
            // button.textContent="Turn on"
            button.textContent="Turn off"
        }
    }