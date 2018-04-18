class AbstractFactory {
  constructor() {

  }

}

class AF_1 extends AbstractFactory{
	constructor() {
		super()
  }
}

class AF_2 extends AbstractFactory{
	constructor() {
		super()
  }
}

module.exports = {AF_1,AF_2}