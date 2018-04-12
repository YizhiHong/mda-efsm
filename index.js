const efsm = require('./MDA-EFSM/mda-efsm')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  // prompt: 'Input> '
});


const readme = "\n\n\n\nWelcome to gas pump application\n\n" 
				+ "CS584 Project by Yizhi Hong\n\n"

const menu1 = "1.activate()\n"
			+"2.start()\n"

const menu2 = "1.activate()\n"
			+"2.fuck()\n"

const main = (gp,menu) => {
	console.log(menu)
	rl.prompt()

	rl.on('line', (line) => {
	  switch (line.trim()) {
	    case '1':
	      console.log('!')
	      break
	    case '2':
	    	console.log('world!')
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

		main(answer,menu1)
	}else if (answer === '2'){

		main(answer,menu2)
	}else{
		console.log('Your put the wrong input!! please excute the application again!!');
		rl.close()
	}

});

