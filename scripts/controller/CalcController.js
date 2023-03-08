class CalcController {
  constructor() {
    this._displayCalc = "0";
    this._currentDate;
    this.initialize();
  }
  initialize(){
    let displayCalcEl = document.querySelector("#display");
    let timeEl = document.querySelector("#hora");
    let dateEl = document.querySelector("#data");

    displayCalcEl.innerHTML = "4567"
    timeEl.innerHTML = "10:55"
    dateEl.innerHTML = "08/03/2023"

  }

  get displayCalc() {
    return this._displayCalc;
  }
  set displayCalc(valor) {
    this._displayCalc = valor;
  }
  get currentDate() {
    return this._currentDate;
  }
  set currentDate(valor) {
    this._currentDate = valor;
  }
}
