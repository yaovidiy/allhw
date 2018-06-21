red.onclick = function () {
    if (document.getElementById('yellow').className != 'yellow'){      
        document.getElementById('yellow').classList.toggle('active__yellow');
        document.getElementById('red').classList.toggle('active__red');
    }
    else if (document.getElementById('green').className !='green'){
        document.getElementById('green').classList.toggle('active__green');
        document.getElementById('red').classList.toggle('active__red');
    }            
    else {
        document.getElementById('red').classList.toggle('active__red');
    }
}
yellow.onclick = function () {
    if (document.getElementById('red').className != 'red') {
        document.getElementById('red').classList.toggle('active__red');       
        document.getElementById('yellow').classList.toggle('active__yellow'); 
    }
    else if (document.getElementById('green').className != 'green'){
        document.getElementById('green').classList.toggle('active__green');
        document.getElementById('yellow').classList.toggle('active__yellow');
    }  
    else {
        document.getElementById('yellow').classList.toggle('active__yellow'); 
    }
} 
green.onclick = function () {
    if (document.getElementById('red').className != 'red') {
        document.getElementById('red').classList.toggle('active__red'); 
        document.getElementById('green').classList.toggle('active__green'); 
    }
    else if (document.getElementById('yellow').className != 'yellow') {
        document.getElementById('yellow').classList.toggle('active__yellow');
        document.getElementById('green').classList.toggle('active__green'); 
    }   
    else {
        document.getElementById('green').classList.toggle('active__green'); 
    }
}
reset.onclick = function () {
    document.getElementById('red').className = 'red';
    document.getElementById('yellow').className = 'yellow';
    document.getElementById('green').className = 'green';
}