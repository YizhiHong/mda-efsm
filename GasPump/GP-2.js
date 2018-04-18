const efsm = require('../MDA-EFSM/mda-efsm') // Associated with MDA EFSM
const {DS_2} = require('../Others/datastore') // Associated with DS_1
const {AF_2} = require('../Others/abstractFactory') // Associated with AF_1

class GP_2 {
  constructor() {
  	this.M = new efsm
  	this.D = new DS_2
  	this.AF = new AF_2
  }

  Activate(){
  	this.M.Activate()
  }

  Start(){
  	this.M.Start()
  }
}




module.exports = GP_2