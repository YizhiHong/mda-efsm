const efsm = require('../MDA-EFSM/mda-efsm')
const {DS_1} = require('../Others/datastore')
const {AF_1} = require('../Others/abstractFactory')

class GP_1 {
  constructor() {
  	this.D = new DS_1
  	this.M = new efsm
  	this.AF = new AF_1
  }

  Activate(a,b){
  	if (a > 0 && b > 0){

  		// set up temp a and b 
  		this.D.temp_a = a 
  		this.D.temp_b = b
  		this.M.Activate() // cal mda-efsm activate 
  	} 
  }

  Start(){
  	console.log(this.D.temp_a)
  	this.M.Start()
  }
}


module.exports = GP_1