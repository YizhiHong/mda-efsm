/*
  Gas Pump 2
*/
class GP_2 {
  constructor(efsm,abstractFactory,operation) {

    this.M = efsm
    this.AF = abstractFactory
    this.OP = operation
    this.D = abstractFactory.getDatastore()

  }

  Activate(a,b,c){
    if (a > 0 && b > 0 && c >0){
      if (this.D.getTemp_a() === 0 && this.D.getTemp_b() === 0 && this.D.getTemp_c() === 0){
        // set up temp a and b when a, b equal to zero
        this.D.setTemp_a(a)
        this.D.setTemp_b(b)
        this.D.setTemp_c(c)
      }
      this.M.Activate() // call mda-efsm activate
    } else {
      console.log('Invaild input!!!')
    }
  }

  PayCash(c){
    if (c > 0){
      this.M.Start()
      this.D.setTemp_cash(c)
      this.M.Pay(3)
    }else{
      console.log('Invaild input!!!')
    }
    
  }

  PayCredit(){
    this.M.Start()
    this.M.Pay(1)
  }

  Approved(){
    this.M.Approved()
  }

  Reject(){
    this.M.Reject()
  }

  Cancel(){
    this.M.Cancel()
  }

  Regular(){
    this.M.SelectGas(1)
  }

  Super(){
    this.M.SelectGas(2)
  }

  Premium(){
    this.M.SelectGas(3)
  }


  StartPump(){
    if(this.D.getM() === 0){
      this.M.StartPump()
    }else{
      this.M.StartPump()
    }
  }

  PumpLiter(){
    if(this.D.getM() === 1){
      this.M.Pump()
    }else if(this.D.getM() === 0){
      if(this.D.getCash() < this.D.getPrice()*(this.D.getL() + 1)){
        this.M.StopPump()
      }else{
        this.M.Pump()
      }
    }
  }

  Stop(){
    this.M.StopPump()
  }

  Receipt(){
    this.M.Receipt()
  }
  NoReceipt(){
    this.M.NoReceipt()
  }
}




module.exports = GP_2