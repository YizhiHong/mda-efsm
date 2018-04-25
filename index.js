/*
This is a driver 
*/

// Import class Module
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
    Activate: ['Please Enter value a>>>', 'Please Enter value b>>>'],
    PayDebit: ['Please initialize your Pin code>>>'],
    Pin: ['Please Enter your Pin>>>']
}

let MENU_GP2 = {
    Activate: ['Please Enter value a>>>', 'Please Enter value b>>>', 'Please Enter value c>>>'],
    PayCash: ['Please Enter your cash value>>>']
}

const menu1 = "1.Activate(float a,float b) "
			+"2.Start() "
			+"3.PayCredit() "
			+"4.PayDebit(string p) "
			+"5.Approved() "
			+"6.Reject()\n"
			+"7.Cancel() "
			+"8.Pin(String x) "
			+"9.Regular() "
			+"10.Diesel() "
			+"11.StartPump() "
			+"12.PumpGallon()\n"
			+"13.StopPump() "
			+"14.FullTank() "
			+"q.quit the application\n"

const menu2 = "1.Activate(float a,float b, float c) "
			+"2.PayCash(float c) "
			+"3.PayCredit() "
			+"4.Approved() "
			+"5.Reject() "
			+"6.Cancel()\n"
			+"7.Regular() "
			+"8.Super() "
			+"9.Premium() "
			+"10.StartPump() "
			+"11.PumpLiter() "
			+"12.Stop()\n"
			+"13.NoReceipt() "
			+"14.Receipt() "
			+"q.quit the application\n"

const askInput = (MENU,action) => {
    return new Promise( (res, rej) => {
        let questions = MENU[action]

        if(typeof questions === 'undefined') rej(`Wrong action key: ${action}`)

        let chainQ = Promise.resolve([]) // resolve to active 'then' chaining (empty array for answers)

        questions.forEach(question => {
          chainQ = chainQ.then( answers => new Promise( (resQ, rejQ) => {
              rl.question(`${question} `, answer => { 
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

	console.log(menu)

	rl.prompt()

	rl.on('line', (line) => {
		// Display the menu
		console.log('\n' + menu)

	  switch (line.trim()) {

	    case '1': // Activate()
	    	console.log(O + "Activate(float a,float b)")

	      askInput(MENU_GP1,'Activate') // Ask for input value
	      .then((ans) => {
	      	a = parseFloat(ans[0])
	      	b = parseFloat(ans[1])
	      	if (!isNaN(a) && !isNaN(b)){
	      		GasPump.Activate(a,b)
		      }else{
		      	console.log('Invaild Input!')
		      }
		      rl.prompt()

	      })
	      break
	      
	    case '2': // Start()
	    	console.log(O + "Start()")

	    	GasPump.Start()
	      break

	    case '3': // PayCredit()
	    	console.log(O + "PayCredit()")

	    	GasPump.PayCredit()
	      break

	    case '4': //PayDebit(string p)
	    	console.log(O + "PayDebit(string p)")

				askInput(MENU_GP1,'PayDebit') // Ask for init Pin code
		      .then((ans) => {
		      	p = ans[0]
		      	GasPump.PayDebit(p)
		      	rl.prompt()
		      })
	    	break

	    case '5': //Approved()
	    	console.log(O + "Approved()")

	    	GasPump.Approved()
	    	break

	    case '6': //Reject()
	    	console.log(O + "Reject()");

	    	GasPump.Reject()
	    	break

	    case '7':// Cancel()
	    	console.log(O + "Cancel()");

	    	GasPump.Cancel()
	    	break

	    case '8':// Pin(String x)
	    	console.log(O + "Pin(String x)");

	    	askInput(MENU_GP1,'Pin') // Ask for input Pin code
		      .then((ans) => {
		      	p = ans[0]
		      	GasPump.Pin(p)
		      	rl.prompt()
		    	})
	    	break

	    case '9': // Regular()
	    	console.log(O + "Regular()");

	    	GasPump.Regular()
	    	break

	    case '10': // Diesel()
	    	console.log(O + "Diesel()");

	    	GasPump.Diesel()
	    	break

	    case '11': // StartPump
	    	console.log(O + "StartPump()");

	    	GasPump.StartPump()
	    	break

	    case '12': // PumpGallon
	    	console.log(O + "PumpGallon()");

	    	GasPump.PumpGallon()
	    	break

	    case '13': //StopPump
	    	console.log(O + "StopPump()");

	    	GasPump.StopPump()
	    	break

	    case '14': // FullTank
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

	console.log(menu)

	rl.prompt()

	rl.on('line', (line) => {
		// Display the menu
		console.log('\n' + menu)

	  switch (line.trim()) {

	    case '1': // Activate()
	    	console.log(O + "Activate(float a,float b,float c)")

	      askInput(MENU_GP2,'Activate') // Ask for input value
	      .then((ans) => {
	      	a = parseFloat(ans[0])
	      	b = parseFloat(ans[1])
	      	c = parseFloat(ans[2])
	      	if (!isNaN(a) && !isNaN(b) && !isNaN(c)){
	      		GasPump.Activate(a,b,c)
		      }else{
		      	console.log('Invaild Input!')
		      }
		      rl.prompt()

	      })
	      break
	      
	    case '2': // PayCash(float c)
	    	console.log(O + "PayCash(float c)")
	    	askInput(MENU_GP2,'PayCash') // Ask for init Pin code
		      .then((ans) => {
		      	c = parseFloat(ans[0])
		      	if (!isNaN(c)){
		      		GasPump.PayCash(c)
		      	}else{
		      		console.log('Invaild Input!')
		      	}
		      	rl.prompt()
		      })
	      break

	    case '3': // PayCredit()
	    	console.log(O + "PayCredit()")

	    	GasPump.PayCredit()
	      break

	    case '4':  //  Approved
	    	console.log(O + "Approved()")

	    	GasPump.Approved()
	    	break

	    case '5': //  Reject
	    	console.log(O + "Reject()");

	    	GasPump.Reject()
	    	break

	    case '6':  // Cancel
	    	console.log(O + "Cancel()");

	    	GasPump.Cancel()
	    	break

	    case '7': // Regular
	    	console.log(O + "Regular()");

	    	GasPump.Regular()
	    	break

	    case '8':// Super
	    	console.log(O + "Super()");
	    	GasPump.Super()
	    	break

	  	case '9': // Premium
	    	console.log(O + "Premium()")

	    	GasPump.Premium()
	    	break 

	    case '10': //StartPump
	    	console.log(O + "StartPump()");

	    	GasPump.StartPump()
	    	break

	    case '11':
	    	console.log(O + "PumpLiter()");

	    	GasPump.PumpLiter()
	    	break

	    case '12':
	    	console.log(O + "Stop()");

	    	GasPump.Stop()
	    	break

	    case '13':
	    	console.log(O + "NoReceipt()");

	    	GasPump.NoReceipt()
	    	break

	    case '14':
	    	console.log(O + "Receipt()");

	    	GasPump.Receipt()
	    	break

	    case 'q':
	    	rl.close()
	    	break
	    default:
	      console.log(`Sorry! There is no commend named '${line.trim()}'`);
	      break;
	  }

	  rl.prompt()

	}).on('close', () => {
	  console.log('Have a great day!');
	  process.exit(0);
	})
};

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

