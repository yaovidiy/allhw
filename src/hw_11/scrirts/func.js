export function Accordion (accordions) {
    // const accordion = document.querySelector('.accordion');
     const header = accordions.querySelector('.accordion__header');
     const content = accordions.querySelector('.accordion__content');
     const active = 'accordion__content_active';
     const activeHead = 'accordion__header_active';
     const triangleOpen = 'triangle__open';
     const triangleClose = 'triangle__close';
     let state = 'close';
     header.addEventListener('click', function(){
         if (state === 'open'){
             closeAccordion();
             state = 'close';
         }
         else{
            openAccordion();
            state = 'open';              
         }
     });
 
 function openAccordion() {
     content.classList.add(active); //Открываем скрытый контент
     header.classList.add(activeHead); //Меняем цвет header'a
     header.classList.remove(triangleClose); // Убираем черный смотрящий влево триугольгик 
     header.classList.add(triangleOpen);// Добавляем белый смотрящий вниз треугольник


 }
 function closeAccordion() {
     content.classList.remove(active); //Закрываем скрытый контент
     header.classList.remove(activeHead);//Меняем цвет header'a
     header.classList.remove(triangleOpen);// Убираем белый смотрящий вниз триугольгик 
     header.classList.add(triangleClose);// Добавляем черный смотрящий влево треугольник

 }
 
 }