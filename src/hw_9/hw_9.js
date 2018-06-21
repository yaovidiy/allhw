import './hw_9.scss'

// First task random number from min to max

function randomNum (min, max) {
    return Math.random() * (max - min) + min; 
}

// 3 task 
function emptyObj (obj) {
    let a = obj;
    return a;
}
// 4 task
alert (emptyObj());
