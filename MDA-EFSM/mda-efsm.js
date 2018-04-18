const operations = require('../Operation/op')
// const datastore = require('../Others/datastore')

const MDA_EFSM = class MDA {

	// Construct a stateList contains 8 state.
  constructor() {

   	const stateList = [new Start(this),new S0(this),new S1(this),new S2(this),new S3(this), new S4(this), new S5(this), new S6(this), new S7(this)]
   	this.S = stateList[0] // initially point to Start state 

   	// Provide change state
   	this.changeState = (i) => {
   		this.S = stateList[i]
   	}

  }

 	Activate(){
	 		this.S.Activate()
	}

	Start(){
	 		this.S.Start()

	}

}

class State {
	constructor(mda) {
		this.mda = mda
		const OP = new operations
	}

	Activate(){
	 		console.log('Nothing happen!!');
	}

	Start(){
	 		console.log('Nothing happen!!');
	}
}

class Start extends State {
	constructor(mda) {
		super(mda)
	}

	Activate(){
		console.log('Activate!!!!!')
		this.mda.changeState(1)
  }
	// methods
}

class S0 extends State {
	constructor(mda) {
		super(mda)
	}

	Start(){
		console.log('Start!!!!!')
		this.mda.changeState(2)
  }
}


class S1 extends State {
	constructor(args) {
		super(args)
	}

	// methods
}

class S2 extends State {
	constructor(args) {
		super(args)
	}

	// methods
}

class S3 extends State {
	constructor(args) {
		super(args)
	}

	// methods
}

class S4 extends State {
	constructor(args) {
		super(args)
	}

	// methods
}

class S5 extends State {
	constructor(args) {
		super(args)
	}

	// methods
}

class S6 extends State {
	constructor(args) {
		super(args)
	}

	// methods
}

class S7 extends State {
	constructor(args) {
		super(args)
	}

	// methods
}


module.exports = MDA_EFSM