/*
 this class is for operation

 It uses abstract factory architecture and strategy architecture   
*/

class OP {
  constructor(abstractFactory) {
  	this.AF = abstractFactory
  	this.D = abstractFactory.getDatastore()
  }

  StoreData(){
  	let SD = this.AF.getStoreData()
  	SD.StoreData()
  }

  PayMsg(){
  	let PM = this.AF.getPayMsg()
  	PM.PayMsg()
  }

  DisplayMenu(){
  	let DM = this.AF.getDisplayMenu()
  	DM.DisplayMenu()
  }

  RejectMsg(){
  	let RM = this.AF.getRejectMsg()
  	RM.RejectMsg()
  }

  CancelMsg(){
  	let CM = this.AF.getCancelMsg()
  	CM.CancelMsg() 
  }

  EnterPinMsg(){
  	let EPM = this.AF.getEnterPinMsg()
  	EPM.EnterPinMsg()
  }

  StorePin(){
  	let SP =this.AF.getStorePin()
  	SP.StorePin()
  }

  StoreCash(){
  	let SC = this.AF.getStoreCash()
  	SC.StoreCash()
  }

  SetPrice(g){
  	let SPRICE = this.AF.getSetPrice()
  	SPRICE.SetPrice(g)
  }

  SetInit(){
  	let SI = this.AF.getSetInit()
  	SI.SetInit()
  }

  PumpedGasUnit(){
  	let PGU = this.AF.getPumpedGasUnit()
  	PGU.PumpedGasUnit()
  }

  DisplayPumped(){
  	let DP = this.AF.getDisplayMenu()
  	DP.DisplayPumped()
  }

  StopMsg(){
  	let SM = this.AF.getStopMsg()
  	SM.StopMsg()
  }

  PrintReceipt(){
  	let PR = this.AF.getPrintReceipt()
  	PR.PrintReceipt()
  }

  ReturnCash(){
  	let RC = this.AF.getReturnCash()
  	RC.ReturnCash()
  }

  SetM(k){
  	let SETM = this.AF.getSetM()
  	SETM.setM(k)
  }

  WrongPinMsg(){
  	let MPM = this.AF.getWrongPinMsg()
  	MPM.WrongPinMsg()
  }

  InitPrice(){
  	let IP = this.AF.getInitPrice()
  	IP.InitPrice()
  }
}



module.exports = OP