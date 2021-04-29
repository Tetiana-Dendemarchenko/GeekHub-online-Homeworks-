//2nd task

let timer = null;
document.getElementById('input').addEventListener('keyup', (event) => {
    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
        document.getElementById('output').innerHTML = event.target.value;
    }, 5000);
});

