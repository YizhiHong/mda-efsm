class OP {
  constructor(abstractFactory) {
  	this.AF = abstractFactory
  	this.D = abstractFactory.getDatastore()
  }

  StoreData(){
  	this.SD = this.AF.getStoreData()
  	this.SD.StoreData()
  }

  PayMsg(){
  	this.PM = this.AF.getPayMsg()
  	this.PM.PayMsg()
  }

  InitPrice(){
  	this.IP = this.AF.getInitPrice()
  	this.IP.InitPrice()
  }
}



module.exports = OP