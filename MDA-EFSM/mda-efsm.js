/*
 this class is for MDA-EFSN

 It uses state architecture - decentralized solution
*/

const MDA_EFSM = class MDA {

	// Construct a stateList contains 8 state.
  constructor(op) {

   	const stateList = [new Start(this,op),new S0(this,op),new S1(this,op),new S2(this,op),new S3(this,op), new S4(this,op), new S5(this,op), new S6(this,op), new S7(this,op)]
	// a stateList to maintain a list of start from start to S7
   	this.S = stateList[0] // current state: initially point to Start state 

   	// Provide state changing
   	this.changeState = (i) => {
   		this.S = stateList[i]
   	}

  }
  // Call State
 	Activate(){
	 	this.S.Activate()
	}

	Start(){
	 	this.S.Start()
	}

	Pay(t){ 
		this.S.Pay(t)
	}

	Approved(){
		this.S.Approved()
	}

	Reject(){
		this.S.Reject()
	}

	Cancel(){
		this.S.Cancel()
	}

	SelectGas(g){
		this.S.SelectGas(g)
	}

	StartPump(){
		this.S.StartPump()
	}

	Pump(){
		this.S.Pump()
	}

	StopPump(){
		this.S.StopPump()
	}

	Receipt(){
		this.S.Receipt()
	}

	NoReceipt(){
		this.S.NoReceipt()
	}

	IncorrectPin(){
		this.S.IncorrectPin()
	}

	Back(){
		this.S.Back()
	}

}

// A State
class State {
	constructor(mda,operation) {
		this.mda = mda
		this.OP = operation
	}
	// Create abstact method
	Activate(){
	 	console.log('Nothing happen!');
	}

	Start(){
	 	console.log('Nothing happen!');
	}

	Pay(t){
		console.log('Nothing happen!');
	}

	Approved(){
		console.log('Nothing happen!');
	}

	Reject(){
		console.log('Nothing happen!');
	}

	Cancel(){
		console.log('Nothing happen!');
	}

	SelectGas(g){
		console.log('Nothing happen!');
	}

	StartPump(){
		console.log('Nothing happen!');
	}

	Pump(){
		console.log('Nothing happen!');
	}

	StopPump(){
		console.log('Nothing happen!');
	}

	Receipt(){
		console.log('Nothing happen!');
	}

	NoReceipt(){
		console.log('Nothing happen!');
	}

	IncorrectPin(){
		console.log('Nothing happen!');
	}

	Back(){
		// console.log('Nothing happen!')
	}

}

class Start extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}
	//invokes StoreData, change state to S0
	Activate(){
		this.OP.StoreData()
		this.mda.changeState(1)
  }
	// methods
}

class S0 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}
	//invokes PayMsg and InitPrice actions, change state to S1
	Start(){
		this.OP.PayMsg()
		this.OP.InitPrice()
		this.mda.changeState(2)
  }
}


class S1 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}
	//invokes different action base on 1:credit 2:debit 3:cash
	Pay(t){
		if(t === 1){

			this.OP.SetM(1)
			this.mda.changeState(3) // point to S2

		}else if (t === 2){

			this.OP.EnterPinMsg()
			this.OP.StorePin()

			this.mda.changeState(8) // point to S7

		}else if (t === 3){

			this.OP.StoreCash()
			this.OP.SetM(0)
			this.OP.DisplayMenu()

			this.mda.changeState(4) // point to S3
		}
	}
}

class S2 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}
	//invokes SetM(1) and DisplayMenu(), change state to S3
	Approved(){

		this.OP.SetM(1)
		this.OP.DisplayMenu()

		this.mda.changeState(4)
	}

	//invokes RejectMsg() and back to S0
	Reject(){

		this.OP.RejectMsg()

		this.mda.changeState(1)
	}
}

class S3 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}
	//invokes CancelMsg() and back to S0
	Cancel(){

		this.OP.CancelMsg()

		this.mda.changeState(1)
	}
	//back to S3
	Back(){
		this.mda.changeState(4)
	}
	// invokes SetPrice(g), change state to S4
	SelectGas(g){

		this.OP.SetPrice(g)


		this.mda.changeState(5)
	}


	// methods
}

class S4 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}

	Back(){
		this.mda.changeState(4)
	}
	//invokes SetInit(), change state to S5
	StartPump(){
		this.OP.SetInit()

		this.mda.changeState(6)
	}
}

class S5 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}
	// invokes PumpedGasUnit() and DisplayPumped(), keep in state S5
	Pump(){
		this.OP.PumpedGasUnit()
		this.OP.DisplayPumped()

		this.mda.changeState(6)
	}
	// invokes StopMsg(), change state to S6
	StopPump(){
		this.OP.StopMsg()

		this.mda.changeState(7)
	}
}

class S6 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}

	// invokes PrintReceipt() and ReturnCash(), back to S0
	Receipt(){
		this.OP.PrintReceipt()
		this.OP.ReturnCash()

		this.mda.changeState(1)
	}
	// invokes ReturnCash(), back to S0
	NoReceipt(){
		this.OP.ReturnCash()

		this.mda.changeState(1)
	}
}

class S7 extends State {
	constructor(mda,operation) {
		super(mda,operation)
	}
	// invokes ReturnCash(), back to S0
	Approved(){
		this.OP.DisplayMenu()

		this.mda.changeState(4)
	}
	// invokes WrongPinMsg(), back to S0
	IncorrectPin(){
		this.OP.WrongPinMsg()

		this.mda.changeState(1)
	}

}


module.exports = MDA_EFSM