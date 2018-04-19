const {DS_1,DS_2} = require('../Others/datastore')


class STOREDATA {
	constructor(DS) {
		this.D = DS
	}

}

class storedata_1 extends STOREDATA{
	constructor(DS) {
		super(DS) 
	}
	StoreData(){
		a = this.D.getTemp_a()
		b = this.D.getTemp_b()
		this.D.setRprice(a)
		this.D.setDprice(b)
		console.log('Gas Pump Activated') 
	}
}

class PAYMSG {
	constructor(DS) {
		this.D = DS
	}
}

class paymsg_1 extends PAYMSG{
	constructor(DS) {
		super(DS)
	}
	PayMsg(){
		console.log("Gas Price:\n" + "Regular: " + this.D.getRprice()+ " Diesel: "+ this.D.getDprice())
		console.log("please insert a credit or a debit card.")
	}
}

class INITPRICE {
	constructor(DS) {
	  this.D = DS
	}
}

class initprice_1 extends INITPRICE{
	constructor(DS) {
		super(DS) 
	}
	InitPrice(){
		this.D.setPrice(0.0)
	}
}


class AbstractFactory {
  constructor() {

  }

}

class AF_1 extends AbstractFactory{
	constructor() {
		super()
		this.D = new DS_1
  }

  getDatastore() {
  	return this.D
  }

  getStoreData() {
  	return new storedata_1(this.D)
  }

  getPayMsg() {
  	return new paymsg_1(this.D)
  }

  getInitPrice() {
  	return new initprice_1(this.D)
  }
}

class AF_2 extends AbstractFactory{
	constructor() {
		super()
		this.D = new DS_2
  }

  getDatastore() {
  	return this.D
  }
}




module.exports = {AF_1,AF_2}