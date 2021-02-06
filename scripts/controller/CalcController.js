class CalcController {
    constructor() {
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize() {
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        setInterval(() => {
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

        }, 1000);
        this.initButtonsEvents();
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    /**
     * método relacionado a tecla AC, para que quando clicada
     * deve remover tudo que foi digitado anteriormente - clear all
     */
    clearAll() {
        this._operation = [];
    }

    /**
     * método relacionado a tecla CE, para que quando clicada
     * deve remover apenas a ultima operação - cancel entry
     */
    cancelEntry() {
        this._operation.pop();
    }

    /**
     * se o usuário digitar algum dados inválido retorna no display 
     * a mensagem de erro
     */
    setError() {
        this._displayCalcEl = "Error";
    }

    isOperator(value) {
        return (["+", "-", "*", "/", "%"].indexOf(value) > -1);
    }

    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value;
    }

    /**
     * adiciona o operador digitado ao final do array
     */
    addOperation(value) {
        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {
                this.setLastOperation(value);
            } else if (isNaN(value)) {
                console.log(value);
            } else {
                this._operation.push(value);
            }
        } else {
            if (this.isOperator(value)) {
                this._operation.push(value);
            } else {
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));
            }


        }
        console.log(this._operation);
    }

    /**
     * retorna a última operação
     */
    getLastOperation() {
        return this._operation[this._operation.length - 1];
    }

    /**
     * executa uma ação específica para cada tecla 
     * da calculadora pressionada
     */
    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.cancelEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'porcento':

                break;
            case 'igual':

                break;
            case 'ponto':
                this.addOperation('.');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g,#parts > g');

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e => {
                this.execBtn(btn.className.baseVal.replace("btn-", ""));
            });
        });

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = "pointer"
            })
        })
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._dateEl.innerHTML = value;
    }
}