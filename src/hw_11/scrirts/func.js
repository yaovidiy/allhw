export function Accordion (accordions) {
     const header = accordions.querySelector('.accordion__header');
     const content = accordions.querySelector('.accordion__content');
     const active = 'accordion__content_active';
     const triangleOpen = 'triangle__open';
     const triangleClose = 'triangle__close';
     header.addEventListener('click', function(){
            openAccordion();                   
     });
 function openAccordion() {
    let activeAccordion = document.querySelector('.accordion__content_active');//Ищем активный элемент
    let activePerent = activeAccordion.parentElement;//Выходим на его родителя accordion__section
    let activeHeader = activePerent.children[0];//Выбираем первый дочерний элемент accorion__header
    activeHeader.classList.remove(triangleOpen);//Убираем у активного иконку открытого треуголнька
    activeHeader.classList.add(triangleClose);//Добавляем закрытый треугольник
     activeAccordion.classList.remove(active);//Закрываем открытый элемент
     content.classList.add(active); //Открываем скрытый контент
     header.classList.remove(triangleClose); // Убираем белый смотрящий вверх триугольгик 
     header.classList.add(triangleOpen);// Добавляем белый смотрящий вниз треугольник
     }
 }