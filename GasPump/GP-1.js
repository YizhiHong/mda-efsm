class GP_1 {
  constructor(efsm,abstractFactory,operation) {

  	this.M = efsm
  	this.AF = abstractFactory
  	this.OP = operation
  	this.D = abstractFactory.getDatastore()

  }

  Activate(a,b){
  	if (a > 0 && b > 0){
  		if (this.D.getTemp_a() === 0 && this.D.getTemp_b() === 0){
  			// set up temp a and b when a, b equal to zero
  			this.D.setTemp_a(a)
				this.D.setTemp_b(b)
  		}
			this.M.Activate() // call mda-efsm activate
  	} else {
  		console.log('Invaild input!!!');
  	}
  }

  Start(){
  	this.M.Start()
  }

  PayCredit(){
  	this.M.Pay(1)
  }

  PayDebit(p){
  	this.D.setTemp_p(p)
  	this.M.Pay(2)
  }

  Approved(){
  	this.M.Approved()
  }

  Reject(){
  	this.M.Reject()
  }

  Cancel(){
  	this.M.Back()
  	this.M.Cancel()
  }

  Pin(x){
  	pin = this.D.getPin()
  	if (pin === x){
  		this.M.Approved()
  	}else{
  		this.M.IncorrectPin()
  	}
  }

  Regular(){
  	this.M.SelectGas(1)
  }

  Diesel(){
  	this.M.SelectGas(2)
  }

  StartPump(){
  	if(this.D.getPrice() > 0){
  		this.M.StartPump()
  	}
  }

  PumpGallon(){
  	this.M.Pump()
  }

  StopPump(){
  	this.M.StopPump()
  	this.M.Receipt()

  }

  FullTank(){
		this.M.StopPump()
  	this.M.Receipt()
  }

}


module.exports = GP_1