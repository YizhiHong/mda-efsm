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

class storedata_2 extends STOREDATA{
	constructor(DS) {
		super(DS) 
	}
	StoreData(){
		a = this.D.getTemp_a()
		b = this.D.getTemp_b()
		c = this.D.getTemp_c()
		this.D.setRprice(a)
		this.D.setSprice(b)
		this.D.setPprice(c)
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
class paymsg_2 extends PAYMSG{
	constructor(DS) {
		super(DS)
	}
	PayMsg(){
		// console.log("please insert a credit card or cash.")
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
		super(DS)
	}
	DisplayMenu(){
		console.log("-------------------Gas Menu--------------------")
		console.log("Your card approved\n");
		console.log("Today Gas Price:\n" + "Regular: " + this.D.getRprice()+ " Diesel: "+ this.D.getDprice())
		console.log("please select gases!(Press 9.Regular 10.Diesel 7.Cancel)")
		console.log("-----------------------------------------------")
	}
}

class displaymenu_2 extends DISPLAYMENU {
	constructor(DS) {
		super(DS)
	}
	DisplayMenu(){
		console.log("-------------------Gas Menu--------------------")
		console.log("Today Gas Price:\n" + "Regular: " + this.D.getRprice()+ " Super: "+ this.D.getSprice() + " Premium: " + this.D.getPprice())
		console.log("please select gases!(Press 7.Regular 8.Super 9.Premium 6.Cancel)")
		console.log("-----------------------------------------------")
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
		super(DS)
	}
	RejectMsg(){
		console.log("Your card has been rejected!!!")
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
		super(DS)
	}
	CancelMsg(){
		console.log("You already cancel your card!!!")
	}
}

class cancelmsg_2 extends CANCELMSG {
	constructor(DS) {
		super(DS)
	}
	CancelMsg(){
		console.log("You already cancel your card or cash!!!")
	}
}

class ENTERPINMSG {
	constructor(DS) {
		this.D = DS
	}
}

class enterpinmsg_1 extends ENTERPINMSG {
	constructor(DS) {
		super(DS)
	}

	EnterPinMsg(){
		console.log("waiting for invoke pin()")
	}
}

class STOREPIN {
	constructor(DS) {
		this.D = DS
	}
	StorePin(p){}
}

class storepin_1 extends STOREPIN {
	constructor(DS) {
		super(DS)
	}

	StorePin(){
		this.D.setPin(this.D.getTemp_p())
	}
}

class STORECASH {
	constructor(DS) {
		this.D = DS
	}
	StoreCash(){}
}

class storecash_2 extends STORECASH {
	constructor(DS) {
		super(DS)
	}
	StoreCash(){
		this.D.setCash(this.D.getTemp_cash())
	}
}

class SETPRICE {
	constructor(DS) {
		this.D = DS
	}
	SetPrice(){}
}

class setprice_1 extends SETPRICE {
	constructor(DS) {
		super(DS)
	}
	SetPrice(g){
		if (g === 1){
			this.D.setPrice(this.D.getRprice())
			console.log("You selected the Regular gas, Price:" + this.D.getPrice())
		} else if(g === 2){
			this.D.setPrice(this.D.getDprice())
			console.log("You selected the Diesel gas, Price:" + this.D.getPrice())
		}
	}
}

class setprice_2 extends SETPRICE {
	constructor(DS) {
		super(DS)
	}
	SetPrice(g){
		if (g === 1){
			this.D.setPrice(this.D.getRprice())
			console.log("You selected the Regular gas, Price:" + this.D.getPrice())
		}else if (g ===2){
			this.D.setPrice(this.D.getSprice())
			console.log("You selected the Super gas, Price:" + this.D.getPrice())
		}else if(g === 3){
			this.D.setPrice(this.D.getPprice())
			console.log("You selected the Premium gas, Price:" + this.D.getPrice())
		}
	}
}

class SETINIT {
	constructor(DS) {
		this.D = DS
	}
	SetInit(){}
}

class setinit_1 extends SETINIT {
	constructor(DS) {
		super(DS)
	}
	SetInit(){
		this.D.setTotal(0.0)
		this.D.setG(0)
		console.log("All set, you can PumpGallon() now!!!")
	}
}

class setinit_2 extends SETINIT {
	constructor(DS) {
		super(DS)
	}
	SetInit(){
		if (this.D.getM() === 1){
			this.D.setPrice(this.D.getPrice()*1.1)
		}
		this.D.setTotal(0.0)
		this.D.setL(0)
		console.log("All set, you can PumpLiter() now!!!")
	}
}

class PUMPEDGASUNIT {
	constructor(DS) {
		this.D = DS
	}
	PumpedGasUnit(){}
}

class pumpedgasunit_1 extends PUMPEDGASUNIT {
	constructor(DS) {
		super(DS)
	}
	PumpedGasUnit(){
		let G = this.D.getG()
		G = G + 1
		this.D.setG(G)
		let total = (G)*this.D.getPrice()
		this.D.setTotal(total)
	}
}

class pumpedgasunit_2 extends PUMPEDGASUNIT {
	constructor(DS) {
		super(DS)
	}
	PumpedGasUnit(){
		let L = this.D.getL()
		L = L + 1
		this.D.setL(L)
		let total = (L)*this.D.getPrice()
		this.D.setTotal(total)
	}
}

class DISPLAYPUMPED {
	constructor(DS) {
		this.D = DS
	}
}

class displaypumped_1 extends DISPLAYPUMPED {
	constructor(DS) {
		super(DS)
	}
	DisplayPumped(){
		console.log("Pumped gallon:" + this.D.getG())
		console.log("total:" + this.D.getTotal())
	}
} 

class displaypumped_2 extends DISPLAYPUMPED {
	constructor(DS) {
		super(DS)
	}
	DisplayPumped(){
		console.log("Pumped Liter:" + this.D.getL())
		console.log("total:" + this.D.getTotal())
		if (this.D.getCash() > 0){
			console.log("balance:" + (this.D.getCash() - this.D.getTotal()))
		}
	}
} 


class STOPMSG {
	constructor(DS) {
		this.D = DS
	}
	StopMsg(){}
}

class stopmsg_1 extends STOPMSG {
	constructor(DS) {
		super(DS)
	}
	StopMsg(){
		console.log("The gaspump is stopping now!")
	}
}

class stopmsg_2 extends STOPMSG {
	constructor(DS) {
		super(DS)
	}
	StopMsg(){
		console.log("The gaspump is stopping now!")
	}
}

class PRINTRECEIPT {
	constructor(DS) {
		this.D = DS
	}
	PrintReceipt(){}
}

class printreceipt_1 extends PRINTRECEIPT {
	constructor(DS) {
		super(DS)
	}
	PrintReceipt(){
		console.log("printing your receipt...")
		console.log("-------------------------\n")
		console.log("-pay method: " + (this.D.getPin() === "" ? "Credit card": "Debit card"))
		console.log("-total gallons:" + this.D.getG())
		console.log("-total:" + this.D.getTotal() + "\n")
	}
}

class printreceipt_2 extends PRINTRECEIPT {
	constructor(DS) {
		super(DS)
	}
	PrintReceipt(){
		console.log("printing your receipt...")
		console.log("-------------------------\n")
		console.log("-pay method: " + (this.D.getCash() > 0 ? "Cash": "Credit card"))
		console.log("-total liters:" + this.D.getL())
		console.log("-total:" + this.D.getTotal() + "\n")
	}
}


class RETURNCASH {
	constructor(DS) {
		this.D = DS
	}
}

class returncash_1 extends RETURNCASH {
	constructor(DS) {
		super(DS)
	}
	ReturnCash(){}
}

class returncash_2 extends RETURNCASH {
	constructor(DS) {
		super(DS)
	}
	ReturnCash(){
		if (this.D.getCash() > 0){
			let remain = this.D.getCash() - this.D.getTotal()
			if(remain>0){
				console.log("returning your remaining cash $" + remain)
			}
		}

	}
}

class SETM {
	constructor(DS) {
		this.D = DS
	}
	SetM(){}
}

class setm_1 extends SETM {
	constructor(DS) {
		super(DS)
	}
	SetM(k){
	}
}
class setm_2 extends SETM {
	constructor(DS) {
		super(DS)
	}
	SetM(k){
		this.D.setM(k)
	}
}

class WRONGPINMSG {
	constructor(DS) {
		this.D = DS
	}
	WrongPinMsg(){}
}

class wrongpinmsg_1 extends WRONGPINMSG{
	constructor(DS) {
		super(DS)
	}
	WrongPinMsg(){
		console.log("Sorry! Your pin is incorrect!!!")
	}
}
class wrongpinmsg_2 extends WRONGPINMSG{
	constructor(DS) {
		super(DS)
	}
	WrongPinMsg(){
		console.log("Sorry! something wrong here!!!")
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
		this.D.setPin("")
	}
}

class initprice_2 extends INITPRICE{
	constructor(DS) {
		super(DS) 
	}
	InitPrice(){
		this.D.setPrice(0.0)
	}
}


class AbstractFactory {
  constructor() {}
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
  	return new displaymenu_1(this.D)
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
  	return new displaymenu_2(this.D)
  }

  getRejectMsg(){
  	return new rejectmsg_1(this.D)
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