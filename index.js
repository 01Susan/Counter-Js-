const value = document.querySelector("#counter");
const btns =  document.querySelectorAll(".btn");
let count = 0;
btns.forEach((item)=> {
    item.addEventListener('click',function(e){
        const style = e.currentTarget.classList;
        if (style.contains('decrease')){
            count--;
        }
        if (style.contains('increase')){
            count++
        }
        if (style.contains('reset')){
            count = 0;
        }
        value.textContent = count;
    });
});