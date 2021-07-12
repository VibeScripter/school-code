const body = document.body;
const displayTop = document.querySelector('.display-operation');
const displayBottom = document.querySelector('.display-numbers');
const btns = Array.from(document.querySelectorAll('.btn'));
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace'); // allows buttons, visual displays as constants

//all basic functions for the calculator (calculation history, print results and current number etc)
function getHistory() {
    return displayTop.textContent;
}

function printHistory(num) {
    return displayTop.textContent = num;
}

function getCurrent() {
    return displayBottom.textContent;
}

function printCurrent(num) {
    return displayBottom.textContent = num;
}

function clearAll() {
    printCurrent('')
    printHistory('')
}

function deleteLastNum(num) {
    if(num) {
        num = num.substr(0, num.length - 1 )
        printCurrent(num)
    }
    let negativeSign = false; // doesn't subtract a certain number if you do a 'backspace', it literally allows you to reverse upon deletion if you make a mistype or error
}

let negativeSign = false;
let done = false;

for(let btn of btns) {
    btn.addEventListener('click', () => {
       
        let output = getCurrent();
        let history = getHistory();
        output = output.replace(/\,/g,'');
        if(btn.id === 'clear') {
            clearAll()
        } else if (isNaN(output)) {
            return
        } else if(!btn.id) { // also, this little part around here allows for '0' or the past result to be printed if you do -+0 or NaN in your equations
            if(output == '0') {
                if(btn.textContent != '0') {
                    output = btn.textContent;
                    printCurrent(output) // != means 'does NOT equal'. so if anything in your input doesn't equal zero it just adds/subtracts/divides/multiplies by whatever you put last
                }
                return
            }
            if(done) {
                output = ''
                done = false;
            } // the next few strings is just output-history chunks meant to help further define and solidify preexisting code.
            output = output + btn.textContent;
            printCurrent(output)
        } else if(btn.id != '=' && btn.id != '.' && btn.id != '+/-') {
            if(output === '' && history != '') {
                if(isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1)
                }
            }

            if(output != '' || history != '') {
                history = history + output;
                history = history + btn.id;
                printHistory(history)
                printCurrent('')
            }
           
        } else if(btn.id === '=') {
            if(isNaN(history[history.length - 1]) && output == '') {
                return
            }
            if(history != '' || output != '') {
                history = history + output
                let result = eval(history);
                    if(result > Number.MAX_SAFE_INTEGER) {
                        result = Infinity;
                    }
                result = result.toLocaleString();
                printHistory('')
                printCurrent(result)
                done = true;
            }
        } else if(btn.id == '.') {
            if(output.includes('.')){
                return
            } else {
                if(output == '') {
                    output = output + '0';
                }
                output = output + btn.id;
                printCurrent(output)

            }
        } else if(btn.id == '+/-') {
            if(output != '') {
                if(negativeSign) {
                    output = output.substring(1);
                    printCurrent(output)
                    negativeSign = false;
                } else {
                    output = '-' + output;
                    negativeSign = true;
                    printCurrent(output)
                }
            }
        }
    })
} // the last chunk of code helps solidify preexisting code even more. we have the ability to delete numbers, but this allows for that to happen + we can use backspace. 

backspace.addEventListener('click', () => {
    const output = getCurrent();
    if(isNaN(output)) {
        return
    }
    deleteLastNum(output)
})