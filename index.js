// Import class Module GP-11 and GP-2 
const GP1 = require('./GasPump/GP-1')
const GP2 = require('./GasPump/GP-2')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const readme = "\n\n\n\nWelcome to gas pump application\n\n" 
				+ "CS584 Project by Yizhi Hong\n\n"


const MENU_GP1 = {
    Activate: ['Please Enter value a', 'Please Enter value b'],
    Pay: ['A2: Question 1', 'A2: Question 2']
}

const MENU_GP2 = {
    Activate: ['Please Enter value a', 'Please Enter value b', 'Please Enter value c'],
    action2: ['A2: Question 1', 'A2: Question 2']
}

const menu1 = "1.Activate(float a,float b)\n"
			+"2.Start()\n"
			+"3.PayCredit()\n"
			+"4.PayDebit(string p)\n"
			+"5.Approved()\n"
			+"6.Reject()\n"
			+"7.Start()\n"
			+"8.Cancel()\n"
			+"9.Pin(String x)\n"
			+"10.Regular()\n"
			+"11.StartPump()\n"
			+"12.PumpGallon()\n"
			+"13.StopPump()\n"
			+"14.FullTank()\n"

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

	      askInput(MENU_GP1,'Activate') // Ask for input value
	      .then((ans) => {
      		GasPump.Activate(parseFloat(ans[0]),parseFloat(ans[1]))
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

rl.question('Please select the GP-1 or GP-2 by enter 1 or 2\n\n ', (answer) => {
	if (answer === '1'){
		//Gas Pump 1 Start

		let gp = new GP1()
		driver1(gp,menu1)
	}else if (answer === '2'){
		//Gas Pump 2 Start

		let gp = new GP2()
		driver2(gp,menu2)

	}else{
		console.log('Your put the wrong input!! please excute the application again!!');
		rl.close()
	}

});

