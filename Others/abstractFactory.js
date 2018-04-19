/*
 this class is for abstract factory and the operation's classes

 It uses abstract factory architecture and strategy architecture   
*/

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
	PayMsg(){}
}

class paymsg_1 extends PAYMSG{
	constructor(DS) {
		super(DS)
	}
	PayMsg(){
		console.log("please insert a credit or a debit card.")
	}
}

class DISPLAYMENU {
	constructor(DS) {
		this.D = DS
	}
	DisplayMenu(){}
}

class displaymenu_1 extends DISPLAYMENU {
	constructor(DS) {
		this.D = DS
	}
	DisplayMenu(){
		console.log("your card approved\n");
		console.log("Today Gas Price:\n" + "Regular: " + this.D.getRprice()+ " Diesel: "+ this.D.getDprice())
		console.log("please select gases!(press 7 to Cancel)")
	}
}

class REJECTMSG {
	constructor(DS) {
		this.D = DS
	}
	RejctMsg(){}
}

class rejectmsg_1 extends REJECTMSG {
	constructor(DS) {
		this.D = DS
	}
	RejctMsg(){
		console.log("your card has been rejected!!!")
	}
}

class CANCELMSG {
	constructor(DS) {
		this.D = DS
	}
	CancelMsg(){}
}

class cancelmsg_1 extends CANCELMSG {
	constructor(DS) {
		this.D = DS
	}
	CancelMsg(){
		console.log("you already cancel your card!!!")
	}
}

class ENTERPINMSG {
	constructor(DS) {
		this.D = DS
	}
	
}

class STOREPIN {
	constructor(DS) {
		this.D = DS
	}
}

class STORECASH {
	constructor(DS) {
		this.D = DS
	}
}


class SETPRICE {
	constructor(DS) {
		this.D = DS
	}
}

class SETINIT {
	constructor(DS) {
		this.D = DS
	}
}

class PUMPEDGASUNIT {
	constructor(DS) {
		this.D = DS
	}
}


class DISPLAYPUMPED {
	constructor(DS) {
		this.D = DS
	}
}


class STOPMSG {
	constructor(DS) {
		this.D = DS
	}
}

class PRINTRECEIPT {
	constructor(DS) {
		this.D = DS
	}
}

class RETURNCASH {
	constructor(DS) {
		this.D = DS
	}
}

class SETM {
	constructor(DS) {
		this.D = DS
	}
}


class WRONGPINMSG {
	constructor(DS) {
		this.D = DS
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

  getDisplayMenu(){
  	return new displaymeny_1(this.D)
  }

  getRejectMsg(){
  	return new rejectmsg_1(this.D)
  }

  getCancelMsg(){
  	return new cancelmsg_1(this.D)
  }

  getEnterPinMsg(){
  	return new enterpinmsg_1(this.D)
  }

  getStorePin(){
  	return new storepin_1(this.D)
  }

  getStoreCash(){
  	return new storecash_1(this.D)
  }

  getSetPrice(){
  	return new setprice_1(this.D)
  }

  getSetInit(){
  	return new setinit_1(this.D)
  }

  getPumpedGasUnit(){
  	return new pumpedgasunit_1(this.D)
  }

  getDisplayPumped(){
  	return new displaypumped_1(this.D)
  }

  getStopMsg(){
  	return new stopmsg_1(this.D)
  }

  getPrintReceipt(){
  	return new printreceipt_1(this.D)
  }

  getReturnCash(){
  	return new returncash_1(this.D)
  }

  getSetM(){
  	return new setm_1(this.D)
  }

  getWrongPinMsg(){
  	return new wrongpinmsg_1(this.D)
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

  getStoreData() {
  	return new storedata_2(this.D)
  }

  getPayMsg() {
  	return new paymsg_2(this.D)
  }

  getDisplayMenu(){
  	return new displaymeny_2(this.D)
  }

  getRejectMsg(){
  	return new rejectmsg_2(this.D)
  }

  getCancelMsg(){
  	return new cancelmsg_2(this.D)
  }

  getEnterPinMsg(){
  	return new enterpinmsg_2(this.D)
  }

  getStorePin(){
  	return new storepin_2(this.D)
  }

  getStoreCash(){
  	return new storecash_2(this.D)
  }

  getSetPrice(){
  	return new setprice_2(this.D)
  }

  getSetInit(){
  	return new setinit_2(this.D)
  }

  getPumpedGasUnit(){
  	return new pumpedgasunit_2(this.D)
  }

  getDisplayPumped(){
  	return new displaypumped_2(this.D)
  }

  getStopMsg(){
  	return new stopmsg_2(this.D)
  }

  getPrintReceipt(){
  	return new printreceipt_2(this.D)
  }

  getReturnCash(){
  	return new returncash_2(this.D)
  }

  getSetM(){
  	return new setm_2(this.D)
  }

  getWrongPinMsg(){
  	return new wrongpinmsg_2(this.D)
  }

  getInitPrice() {
  	return new initprice_2(this.D)
  }
}




module.exports = {AF_1,AF_2}