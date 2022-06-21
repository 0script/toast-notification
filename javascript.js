const button=document.getElementById('button');
const toasts=document.getElementById('toasts');

const messages=[
    'Register Successfuly',
    'Loged Successfully',
    'Alert message',
    'You are now loged out',
];

const colors=[
    'green',
    'red',
    'orange'
];

const createNotification=()=>{

    const msg=messages[ Math.floor(Math.random() * (messages.length-1))];
    let div=document.createElement('div');
    
    div.classList.add('toast');
    div.innerHTML=msg;
    div.style.color=colors[ Math.floor(Math.random() * (colors.length-1)) ];
    toasts.append(div);
    
    setTimeout(()=>{
        toasts.removeChild(div);
    }, 5000);
}

button.addEventListener('click',createNotification);