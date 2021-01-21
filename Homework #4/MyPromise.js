function perform() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}
perform(20, function(value) {
    console.log(value)
    var param = 1;
    console.log(param);
    return param;
})
.then('a', 'b', function(a, b, param) {
    console.log(++param);
    return param;
})
    .then(funtion(param) {
        console.log(++param);
        return param;
})


const delayedText = (delay, fn) = {
    let delayedText = false;
    return args => {
        if (inDelayedText){
            return;
        }

        inDelayedText = true;
        fn(args);
        setTimeout (() => {
            inDelayedText = false;
        }, delay);
    };
};
const sendRequestDelayedText = delayedText (500, search);
<input type="text" onChange={sendRequestDelayedText}/>





const debounce = (delay, fn) => {
    letinDebounce = null;
    return arguments => {
        clearTimeout(inDebounce);
        inDebounce = setTimeout (() => fn(arguments), delay);
    }
}

let timeout = null;

let input = document.createElement('input')
input.addEventListener("keyup",)