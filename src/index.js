class Store {
  constructor() {
    this.state = {}
    this.events = {}
  }

  listen(key, fn) {
    if (!key || !fn) {
      return;
    }
    this.events[key] = this.events[key] || [];
    if (this.events[key].indexOf(fn)) {
      this.events[key].push(fn);
    }
  }

  dispatch(key, value) {
    const oldValue = this.state[key];
    this.state[key] = value;
    if (this.events[key] && this.events[key].length) {
      for (const fn of this.events[key]) {
        fn(oldValue, value);
      }
    }
  }
}

window.$com_store = window.$com_store || new Store();
module.exports = window.$com_store;