const MDA_EFSM = class MDA {

	// Construct a stateList contains 8 state.
  constructor(op) {

   	const stateList = [new Start(this,op),new S0(this,op),new S1(this,op),new S2(this,op),new S3(this,op), new S4(this,op), new S5(this,op), new S6(this,op), new S7(this,op)]
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
	PayCredit(){
		this.S.PayCredit()
	}

}

class State {
	constructor(mda,operation) {
		this.mda = mda
		this.OP = operation
	}

	Activate(){
	 	console.log('Nothing happen!');
	}

	Start(){
	 	console.log('Nothing happen!');
	}
	PayCredit(){
		console.log('Nothing happen!');
	}
}

class Start extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}

	Activate(){
		this.mda.changeState(1)
		this.OP.StoreData()
  }
	// methods
}

class S0 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}

	Start(){
		this.mda.changeState(2)
		this.OP.PayMsg()
		this.OP.InitPrice()
  }
}


class S1 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}

	PayCredit(){
		this.mda.changeState(3)
		console.log("Waiting For Approve!")
	}
}

class S2 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}


	// methods
}

class S3 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}


	// methods
}

class S4 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}


	// methods
}

class S5 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}


	// methods
}

class S6 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}


	// methods
}

class S7 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}


	// methods
}


module.exports = MDA_EFSM