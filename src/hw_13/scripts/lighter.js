export function ligther (target) {
    const main = document.createElement('div');
    const circl = document.createElement('section');
    const button = document.createElement('button');
    const active_btn = 'active-btn';
    const active_light_one = 'lighter__active-light-one';
    const active_light_two = 'lighter__active-light-two';
    const grid1 = 'col-md-1';
    let color = 1;

    main.classList.add('lighter');
    main.classList.add('col-md-1');
    main.classList.add('col-lg-1');
    main.classList.add('col-xs-1');
    main.classList.add('col-sm-1');
    circl.classList.add('lighter__light');
    main.classList.add(grid1);
    button.classList.add('lighter__button');

    button.innerHTML = 'on/off';
    
    target.insertBefore(main, target.firstChild);
    main.appendChild(circl);
    main.appendChild(button);

    function active () {
        button.classList.add(active_btn);
        main.classList.add('active');
        if (color === 1){
        circl.classList.add(active_light_one);
        color = 2;
        } else {
        circl.classList.add(active_light_two);
        color =1;
        }
        console.log(color);
    }
    function disable () {
        button.classList.remove(active_btn);
        main.classList.remove('active');
        circl.classList.remove(active_light_one);
        circl.classList.remove(active_light_two);
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