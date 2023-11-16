const value = document.getElementById("value")
const btns = document.querySelectorAll(".btn")
let count = 0

btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const style = event.currentTarget.classList
            if (style.contains('decrease')) {
                count--; 
            }
            else if (style.contains('reset')) {
                count = 0;
            }
            else if (style.contains('increase')) {
                count++;    
            }
            
            if(count > 0){
                value.textContent = value.style.color = "green";
            }
            if(count < 0){
                value.textContent = value.style.color = "red";
            }
            if(count == 0){
                value.textContent = value.style.color = "black";                
            }
            value.textContent = count
        })
    })
    
