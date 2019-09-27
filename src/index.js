class Store {
  constructor() {
    this.state = {}
    this.fnList = {}
  }
}

window.$com_store = new Store();
module.exports = window.$com_store;