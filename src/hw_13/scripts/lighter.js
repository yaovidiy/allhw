export function ligther (target) {
    const main = document.createElement('div');
    const circl = document.createElement('section');
    const button = document.createElement('button');
    const active_btn = 'active-btn';
    const active_light = 'lighter__active-light';

    main.classList.add('lighter');
    circl.classList.add('lighter__light');
    button.classList.add('lighter__button');

    button.innerHTML = 'on/off';
    
    target.insertBefore(main, target.firstChild);
    main.appendChild(circl);
    main.appendChild(button);

    function active () {
        button.classList.add(active_btn);
        main.classList.add('active');
        circl.classList.add(active_light);
    }
    function disable () {
        button.classList.remove(active_btn);
        main.classList.remove('active');
        circl.classList.remove(active_light);
    }

    button.addEventListener('click', ()=>{
    let stat = main.querySelector('.active-btn');
        if (stat === null){
          active();
        }
        else {
            disable(); 
        }

    });
}