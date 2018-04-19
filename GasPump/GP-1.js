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
  	this.M.PayCredit()
  }

  PayDebit(p){
  	this.D.setTemp_p(p)
  	this.M.PayDebit()
  }
}


module.exports = GP_1