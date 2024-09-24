let screen = document.getElementById('screen');
let calculatorOn = true;

function insert(value) {
    if (calculatorOn) {
        const current = screen.innerHTML;
        if (current.length >= 8) return;

        if (value === '.' && current.includes('.')) return;

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
}

function deleteLast() {
    if (calculatorOn) {
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
        const greetings = ['Hello', 'Kamusta', 'Hola', 'Bonjour', 'Ciao', 'Namaste', 'Sawasdee'];
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        screen.innerHTML = randomGreeting;

    }
}
