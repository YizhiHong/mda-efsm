// Import class Module GP-11 and GP-2 
const GP1 = require('./GasPump/GP-1')
const GP2 = require('./GasPump/GP-2')
const {AF_1,AF_2} = require('./Others/abstractFactory')
const efsm = require('./MDA-EFSM/mda-efsm')
const OP = require('./Operation/op')
	
const O = "Operation: "
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ">>>"
});

const readme = "\n\n\n\nWelcome to gas pump application\n\n" 
				+ "CS584 Project by Yizhi Hong\n\n"


let MENU_GP1 = {
    Activate: ['Please Enter value a', 'Please Enter value b'],
    PayDebit: ['Please initialize your Pin code'],
    Pin: ['Please Enter your Pin']
}

let MENU_GP2 = {
    Activate: ['Please Enter value a', 'Please Enter value b', 'Please Enter value c'],
    PayCash: ['Please Enter your cash value']
}

const menu1 = "1.Activate(float a,float b) "
			+"2.Start() "
			+"3.PayCredit() "
			+"4.PayDebit(string p)\n"
			+"5.Approved() "
			+"6.Reject() "
			+"7.Cancel() "
			+"8.Pin(String x)\n"
			+"9.Regular() "
			+"10.Diesel() "
			+"11.StartPump() "
			+"12.PumpGallon()\n"
			+"13.StopPump() "
			+"14.FullTank() "
			+"q.quit the application\n"

const menu2 = "1.Activate(float a,float b, float c)\n"
			+"2.PayCash(float c)\n"
			+"3.PayCredit()\n"
			+"4.PayDebit(string p)\n"
			+"5.Reject()\n"
			+"6.Cancel()\n"
			+"7.Approved()\n"
			+"8.Regular()\n"
			+"9.Super()\n"
			+"10.Premium()\n"
			+"11.StartPump()\n"
			+"12.PumpLiter()\n"
			+"12.Stop()\n"
			+"13.NoReceipt()\n"
			+"14.Receipt()\n"

const askInput = (MENU,action) => {
    return new Promise( (res, rej) => {
        let questions = MENU[action]

        if(typeof questions === 'undefined') rej(`Wrong action key: ${action}`)

        let chainQ = Promise.resolve([]) // resolve to active 'then' chaining (empty array for answers)

        questions.forEach(question => {
          chainQ = chainQ.then( answers => new Promise( (resQ, rejQ) => {
              rl.question(`${question}: `, answer => { 
              	answers.push(answer)
              	resQ(answers)
              	
              })
            })
          );
        });

        chainQ.then((answers) => {
            // rl.close();
            res(answers)
        })
    });
};

const driver1 = (GasPump,menu) => {

	// Display the menu
	console.log(menu)
	rl.prompt()

	rl.on('line', (line) => {
	  switch (line.trim()) {

	    case '1': // Activate()
	    	console.log(O + "Activate(float a,float b)")

	      askInput(MENU_GP1,'Activate') // Ask for input value
	      .then((ans) => {
	      	a = parseFloat(ans[0])
	      	b = parseFloat(ans[1])
	      	GasPump.Activate(a,b)
	      	rl.prompt()
	      })
	      break
	      
	    case '2': // Start()
	    	console.log(O + "Start()")

	    	GasPump.Start()
	      break

	    case '3':
	    	console.log(O + "PayCredit()")

	    	GasPump.PayCredit()
	      break

	    case '4':
	    	console.log(O + "PayDebit(string p)")

				askInput(MENU_GP1,'PayDebit') // Ask for init Pin code
		      .then((ans) => {
		      	p = ans[0]
		      	GasPump.PayDebit(p)
		      	rl.prompt()
		      })
	    	break

	    case '5':
	    	console.log(O + "Approved()")

	    	GasPump.Approved()
	    	break

	    case '6':
	    	console.log(O + "Reject()");

	    	GasPump.Reject()
	    	break

	    case '7':
	    	console.log(O + "Cancel()");

	    	GasPump.Cancel()
	    	break

	    case '8':
	    	console.log(O + "Pin(String x)");

	    	askInput(MENU_GP1,'Pin') // Ask for input Pin code
		      .then((ans) => {
		      	p = ans[0]
		      	GasPump.Pin(p)
		      	rl.prompt()
		    })
	    	break

	    case '9':
	    	console.log(O + "Regular()");

	    	GasPump.Regular()
	    	break

	    case '10':
	    	console.log(O + "Diesel()");

	    	GasPump.Diesel()
	    	break

	    case '11':
	    	console.log(O + "StartPump()");

	    	GasPump.StartPump()
	    	break

	    case '12':
	    	console.log(O + "PumpGallon()");

	    	GasPump.PumpGallon()
	    	break

	    case '13':
	    	console.log(O + "StopPump()");

	    	GasPump.StopPump()
	    	break

	    case '14':
	    	console.log(O + "FullTank()");

	    	GasPump.FullTank()
	    	break

	    case 'q':
	    	rl.close()
	    	break
	    default:
	      console.log(`Sorry! There is no commend named '${line.trim()}'`);
	      break;
	  }

	  rl.prompt();

	}).on('close', () => {
	  console.log('Have a great day!');
	  process.exit(0);
	});
}

const driver2 = (GasPump,menu) => {

	// Display the menu
	console.log(menu)

	rl.prompt()

	rl.on('line', (line) => {
	  switch (line.trim()) {

	    case '1': // Activate()

	      askInput(MENU_GP1,'Activate') // Ask for input value
	      .then((ans) => {
      		GasPump.Activate()
	      })

	      break
	      
	    case '2': // Start()
	    	GasPump.Start()
	      break
	    case 'q':
	    	rl.close()
	    	break
	    default:
	      console.log(`Sorry! There is no commend named '${line.trim()}'`);
	      break;
	  }

	  rl.prompt();

	}).on('close', () => {
	  console.log('Have a great day!');
	  process.exit(0);
	});
}

rl.question('Please select the GP-1 or GP-2 by enter 1 or 2\n\n>>> ', (answer) => {

	let AF, op
	let mda 

	if (answer === '1'){
		//Gas Pump 1 Start

		AF = new AF_1 //create a AF_1 concrete class
		op = new OP(AF) //create a OP concrete class
		mda = new efsm(op) //create a MDA-EFSM concrete class

		let gp = new GP1(mda,AF,op)
		driver1(gp,menu1)
	}else if (answer === '2'){
		//Gas Pump 2 Start

		AF = new AF_2 //create a AF_1 concrete class
		op = new OP(AF) //create a OP concrete class
		mda = new efsm(op) //create a MDA-EFSM concrete class

		let gp = new GP2(mda,AF,op)
		driver2(gp,menu2)


	}else{
		console.log('Your put the wrong input!! please excute the application again!!');
		rl.close()
	}

});

