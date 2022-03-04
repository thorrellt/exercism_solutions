export class BankAccount {
  #dollars
  #open
  constructor() {
    this.#dollars = 0
    this.#open = false
  }
  open() {
    if(this.#open)throw new ValueError()
    this.#open = true
    this.#dollars = 0
  }
  close() {
    if(this.#open == false) throw new ValueError()
    this.#open = false
  }
  deposit(input) {
    if(this.#open == false) throw new ValueError()
    if(input < 0) throw new ValueError()
    this.#dollars += input
  }
  withdraw(output) {
    if(output < 0) throw new ValueError()
    if(this.#dollars < output) throw new ValueError()
    this.#dollars -= output
  }
  get balance() {
    if(this.#open == false) throw new ValueError()
    return this.#dollars
  }
}
export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
