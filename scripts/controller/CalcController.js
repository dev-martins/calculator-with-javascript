class CalcController {
    constructor() {
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

    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g,#parts > g');

        buttons.forEach((btn, index) => {
            btn.addEventListener('click', e => {

                console.log(btn.className.baseVal.replace("btn-", ""));
            });
        });
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