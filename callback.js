function welcomeMessage(name, greetHandler) {
        greetHandler(name);
    }


// const name =["tonmoy",'amam','sifat']

// welcomeMessage(name[2]);
// console.log(welcomeMessage(name[2]))
// welcomeMessage(name[2]);

function greetMorning(name) {
        console.log('Good morning', name);
    }


    welcomeMessage('Tom Hanks', greetMorning);
// welcomeMessage(greetMrnig());





// function handleClick() {
//         console.log('button is clicked');
//     }
    
//     document.getElementById('my-btn').addEventListener('click', handleClick)
    
//     document.getElementById('btn').addEventListener('click', function () {
//         console.log('buttn is clicked');
//     })
