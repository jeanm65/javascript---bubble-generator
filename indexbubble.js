const counterDisplay = document.querySelector('h3');
let counter = 0;
const bubbleMaker = () => {
    const bubble = document.createElement('span');  
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    
    // console.log(Math.random);// display a number between 0 and 1
    
    // console.log(Math.random() * 100);// display a number between 0 and 100
    
     const size = Math.random() * 200 + 100 + "px"; // chiffre entre 100 et 300
    
     bubble.style.height = size;
     bubble.style.width = size;
    
     bubble.style.top = Math.random() * 100 + 50 + '%';// la bulle se trouve au moin à 50% du haut
    
     bubble.style.left = Math.random() * 100 + '%';

     const plusMinus = Math.random() > 0.5 ? 1 : -1;
    
     bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + '%' ); 
     
     bubble.addEventListener('click', () => {
        counterDisplay.textContent = counter++;
       bubble.remove();
     })

     setTimeout(() => {
         bubble.remove();
     }, 8000);


}
setInterval(bubbleMaker, 1000);


