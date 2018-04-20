class DataStore {
  constructor() {

  }
}

class DS_1 extends DataStore {
  constructor() {
  	super()
  	// create the attrbutes
  	let temp_a = 0.0
  	let temp_b = 0.0
  	let temp_p = ""
  	let pin = ""
  	let price
  	let G = 0
  	let total =0.0
  	let Rprice = 0.0
  	let Dprice = 0.0

  	// create the getter and setter
  	this.getTemp_a = () =>{
  		return temp_a
  	}
  	this.setTemp_a = a =>{
  		temp_a = a
  	}
   	this.getTemp_b = () =>{
  		return temp_b
  	}
  	this.setTemp_b = b =>{
  		temp_b = b
  	}
  	this.getTemp_p = () =>{
  		return temp_p
  	}
  	this.setTemp_p = p =>{
  		temp_p = p
  	}
   	this.getPin = () =>{
  		return pin
  	}
  	this.setPin = p =>{
  		pin = p
  	}
   	this.getPrice = () =>{
  		return price
  	}
  	this.setPrice = p =>{
  		price = p
  	}
   	this.getG = () =>{
  		return G
  	}
  	this.setG = g =>{
  		G = g
  	}
    this.getTotal = () =>{
  		return total
  	}
  	this.setTotal = t =>{
  		total = t
  	}
  	this.getRprice = () =>{
  		return Rprice
  	}
  	this.setRprice = r =>{
  		Rprice = r
  	}
    this.getDprice = () =>{
  		return Dprice
  	}
  	this.setDprice = d =>{
  		Dprice = d
  	}
  }
}


class DS_2 extends DataStore {
  constructor() {
  	 super()
  	// create the attrbutes
  	let temp_a = 0.0
  	let temp_b = 0.0
  	let temp_c = 0.0
  	let temp_cash = ""
  	let price
  	let Rprice = 0.0
  	let Sprice = 0.0
  	let Pprice = 0.0
  	let cash = 0.0
  	let total = 0.0
  	let L = 0
    let M

  	// create the getter and setter
  	this.getTemp_a = () =>{
  		return temp_a
  	}
  	this.setTemp_a = a =>{
  		temp_a = a
  	}
   	this.getTemp_b = () =>{
  		return temp_b
  	}
  	this.setTemp_b = b =>{
  		temp_b = b
  	}
  	this.getTemp_c = () =>{
  		return temp_c
  	}
  	this.setTemp_c = c =>{
  		temp_c = c
  	}
  	this.getTemp_cash = () =>{
  		return temp_cash
  	}
  	this.setTemp_cash = c =>{
  		temp_cash = c
  	}
   	this.getPrice = () =>{
  		return price
  	}
  	this.setPrice = p =>{
  		price = p
  	}
   	this.getL = () =>{
  		return L
  	}
  	this.setL = l =>{
  		L = l
  	}
  	this.getCash = () =>{
  		return cash
  	}
  	this.setCash = c =>{
  		cash = c
  	}
    this.getTotal = () =>{
  		return total
  	}
  	this.setTotal = t =>{
  		total = t
  	}
  	this.getRprice = () =>{
  		return Rprice
  	}
  	this.setRprice = r =>{
  		Rprice = r
  	}
    this.getSprice = () =>{
  		return Sprice
  	}
  	this.setSprice = s =>{
  		Sprice = s
  	}
  	this.getPprice = () =>{
  		return Pprice
  	}
  	this.setPprice = p =>{
  		Pprice = p
  	}
    this.getM = () => M
    this.setM = m =>{
      M =m
    }
  }
}

module.exports = {DS_1,DS_2}