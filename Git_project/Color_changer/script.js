const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);

    button.addEventListener('click' , function(e){
        console.log(e);
        console.log(e.target);

        if (e.target.id === 'lightgreen'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'maroon'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'royalblue'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'lavender'){
            body.style.backgroundColor = e.target.id;
        }
    });

});
    
   
