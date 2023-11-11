const btn = document.getElementById("btn");
const icon = document.querySelector(".far");
btn.addEventListener("click",()=>{
        if(btn.innerText === 'SUBSCRIBE'){
            btn.innerText = 'SUBSCRIBED';
        }else btn.innerText = 'SUBSCRIBE';
        btn.classList.toggle('active');
        icon.classList.toggle('active');
})