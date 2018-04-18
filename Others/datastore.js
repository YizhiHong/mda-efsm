class DataStore {
  constructor() {

  }
}

class DS_1 extends DataStore {
  constructor() {
  	super()
  	this.temp_a = 0
  	this.temp_b = 0
  }
}


class DS_2 extends DataStore {
  constructor() {
  	super()
  }
}

module.exports = {DS_1,DS_2}