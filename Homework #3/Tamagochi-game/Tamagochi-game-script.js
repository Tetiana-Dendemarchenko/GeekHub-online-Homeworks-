let hunger = 100;
let tidiness = 100;
let sleep = 100;
let entertainment = 100;
let goingOut = 100;

function Loop(time = 2) {

    let total = hunger + tidiness + sleep + entertainment + goingOut;

    if ( hunger === 0 || tidiness === 0 || sleep === 0 || entertainment === 0 || goingOut === 0 ) {
        document.getElementById ( "pet" ).src = "img/dead.jpg";
        document.getElementById ( 'deathMsg' ).innerHTML = `YOUR PET HAS PASSED AWAY. 
                                                         Revive your Pet refreshing the page!`;
        time = 0;
    } else if ( total > 400 ) {
        document.getElementById ( "pet" ).src = "img/happy.jpg";
        document.getElementById ( "pet" ).style.width = '160px';
    } else if ( total > 300 ) {
        document.getElementById ( "pet" ).src = "img/green.jpg";
        document.getElementById ( "pet" ).style.width = '140px';
    } else if ( total > 200 ) {
        document.getElementById ( "pet" ).src = "img/grey.jpg";
        document.getElementById ( "pet" ).style.width = '150px';
    } else if ( total > 100 ) {
        document.getElementById ( "pet" ).src = "img/yellow.jpg";
    } else if ( total > 50 ) {
        document.getElementById ( "pet" ).src = "img/red.jpg";
        document.getElementById ( "pet" ).style.width = '120px';
        document.getElementById ( "pet" ).style.height = '120px';
    }

    hunger = hunger - parseInt ( time );
    tidiness = tidiness - parseInt ( time );
    sleep = sleep - parseInt ( time );
    entertainment = entertainment - parseInt ( time );
    goingOut = goingOut - parseInt ( time );


    document.getElementById ( 'hunger' ).style.width = hunger + 'px';
    document.getElementById ( 'tidiness' ).style.width = tidiness + 'px';
    document.getElementById ( 'sleep' ).style.width = sleep + 'px';
    document.getElementById ( 'entertainment' ).style.width = entertainment + 'px';
    document.getElementById ( 'goingOut' ).style.width = goingOut + 'px';


    document.getElementById ( 'hunger' ).innerHTML = hunger + '%';
    document.getElementById ( 'tidiness' ).innerHTML = tidiness + '%';
    document.getElementById ( 'sleep' ).innerHTML = sleep + '%';
    document.getElementById ( 'entertainment' ).innerHTML = entertainment + '%';
    document.getElementById ( 'goingOut' ).innerHTML = goingOut + '%';
}

function BeginGame() {
    let timeBeingSet = setInterval ( Loop, 1000 );
}

function FeedYourPet() {
    hunger = 100;
    document.getElementById ( 'hunger' ).innerHTML = hunger + '%';
    document.getElementById ( 'hunger' ).style.width = hunger + 'px';
}

function GiveShower() {
    tidiness = 100;
    document.getElementById ( 'tidiness' ).innerHTML = tidiness + '%';
    document.getElementById ( 'tidiness' ).style.width = tidiness + 'px';
}

function LetSleep() {
    sleep = 100;
    document.getElementById ( 'sleep' ).innerHTML = sleep + '%';
    document.getElementById ( 'sleep' ).style.width = sleep + 'px';
}

function PlayGames() {
    entertainment = 100;
    document.getElementById ( 'entertainment' ).innerHTML = entertainment + '%';
    document.getElementById ( 'entertainment' ).style.width = entertainment + 'px';
}

function GoOut() {
    goingOut = 100;
    document.getElementById ( 'goingOut' ).innerHTML = goingOut + '%';
    document.getElementById ( 'goingOut' ).style.width = goingOut + 'px';
}

BeginGame ();
