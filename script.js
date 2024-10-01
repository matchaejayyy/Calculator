let screen = document.getElementById('screen');
let calculatorOn = true;
let showingGreeting = false; 

function insert(value) {
    if (calculatorOn) {
        if (showingGreeting) {
            screen.innerHTML = '0'; 
            showingGreeting = false; 
        }
        const current = screen.innerHTML;
        if (current.length >= 8) return;

        if (/[\+\-\*\/]$/.test(current) && /[\+\-\*\/]/.test(value)) return;

        if (current === '0' || current === 'Error') {
            screen.innerHTML = value;
        } else {
            screen.innerHTML += value;
        }
    }
}

function calculate() {
    if (calculatorOn) {
        if (showingGreeting) return; 
        try {
            const current = screen.innerHTML;
            if (/[\+\-\*\/]$/.test(current)) {
                throw new Error();
            }
            screen.innerHTML = eval(current).toString().slice(0, 8);
        } catch (e) {
            screen.innerHTML = 'Error';
        }
    }
}

function allClear() {
    screen.innerHTML = '0';
    calculatorOn = true;
    showingGreeting = false; 
}

function deleteLast() {
    if (calculatorOn) {
        if (showingGreeting) return; 
        if (screen.innerHTML.length > 1 && screen.innerHTML !== 'Error') {
            screen.innerHTML = screen.innerHTML.slice(0, -1);
        } else {
            screen.innerHTML = '0';
        }
    }
}

function bye() {
    if (calculatorOn) {
        screen.innerHTML = 'Goodbye';
        setTimeout(() => {
            screen.innerHTML = '';
            calculatorOn = false;
        }, 1000);
    }
}

function hello() {
    if (calculatorOn) {
        const greetings = ['Hello', 'Kamusta', 'Hola', 'Bonjour', 'Ciao', 'Namaste', 'Sawasdee', 'Hej', 'Ni hao', 'Hei'];
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        screen.innerHTML = randomGreeting;
        showingGreeting = true; 
    }
}
