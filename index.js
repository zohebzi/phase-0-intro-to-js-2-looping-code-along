// Code your solutions in this file
function writeCards (names, event) {
    let newArr = [];
    for (let i = 0; i < names. length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        newArr.push(message);
    }

    return newArr; }

    function countDown(int) {
        while (int>=0) {
            console.log (int);
            int--
        }
    }