// 1st task

function perform() {
    //TODO implement
}

perform(20, function(value) {
    console.log(value) //20
    var param = 1;
    console.log(param); //1
    return param;
})

    .then("a", "b", function(a, b, param) {
        console.log(++param); //2
        return param;
    })

    .then(function(param) { //param === 2
        console.log(++param); //3
        return param;
    });

//


