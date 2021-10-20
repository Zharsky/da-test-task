var ispnum = function (num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
};

const fibonacci = (num) => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

function nxtPrmFib(number) {
    let r = 0;
    let l = 1;
    while (true) {
        var fib = fibonacci(l);
        console.log('fib', fib, number);
        if (fib > number) {
            if (ispnum(fib)) {
                r = fib;
                break;
            } else {
                l = l + 1;
                console.warn('bumping to ', fib);
            }
        } else {
            l = l + 1;
            console.warn('bumping to', fib);
        }
    }
    console.warn('Next prime fib ', r);
}

nxtPrmFib(20);


// ________________________________________________________

function isPrimeNumber(num) {
    if (num < 2) return false;

    for (let k = 2; k < num; k++) {

        if (num % k === 0) {

            return false;
        }
    }
    return true;
}

const fibonacci = (() => {
    const cacheMap = new Map();

    return function fibonacci(number) {

        if (number <= 1) {
            return 1;
        }

        if (!cacheMap.has(number)) {
            const result = fibonacci(number - 1) + fibonacci(number - 2);

            cacheMap.set(number, result);
        }

        return cacheMap.get(number);
    };
})();

function nextPrimaryFibonacci(number) {
    for (let i = 1; ; i++) {
        const fibNumber = fibonacci(i);
        const isPrimary = isPrimeNumber(fibNumber);


        console.log('fib', fibNumber, number);

        if (fibNumber > number && isPrimary) {
            return fibNumber;
        }

        console.warn('bumping to ', fibNumber);
    }
}

console.log('Next prime fibonacci', nextPrimaryFibonacci(5));
