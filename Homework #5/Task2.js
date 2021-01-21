// 2nd task

let log = console.log.bind(console);

let delayedSearchClick = new Promise (
    function(resolve) {
        setTimeout(function() {
            resolve("This is the result you have been searching!");
        }, 5000);
    }
);

document.querySelector("input").addEventListener("keydown", _.debounce(async function() {
    log("The search is in progress");
    let result = await delayedSearchClick;
    log("Here is the result:", result);
}, 3000));