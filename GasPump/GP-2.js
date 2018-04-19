class GP_2 {
  constructor(efsm,abstractFactory,operation) {

    this.M = efsm
    this.AF = abstractFactory
    this.OP = operation
    this.D = abstractFactory.getDatastore()

  }
  Activate(){
  	this.M.Activate()
  }

  Start(){
  	this.M.Start()
  }
}




module.exports = GP_2