//Practice--->
function togglePointer(){
    let container = document.getElementById('container');
    let btn=document.getElementById('btn');
    if (container.style.backgroundColor !='black') {
        container.style.backgroundColor = 'black';
        container.style.color='white';
    }
    else{
        container.style.backgroundColor='aquamarine';
        container.style.color='black';
    }
}

//EventListener--->
let main=document.getElementById('main');
main.addEventListener('mouseover' ,function run(){
    main.style.backgroundColor='lightblue';
});
main.addEventListener('mouseout' , function run(){
    main.style.backgroundColor='pink';
});

//Date and time--->
let dt=new Date(3000, 5 ,8 ,9 , 7 , 6 );
console.log(dt);
dt.getFullYear();
console.log(dt);

function clock(){
    watch.innerHTML=new Date();
}
setInterval(clock,1000)
