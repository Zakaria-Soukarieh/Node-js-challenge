
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
//
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if(text === 'list\n'){
    list();
  }
  else if(text === 'add\n'){
  console.log("Error: Please provide a task name to add.");
  }
  else if(text.startsWith('add ')){
    let TX =text.slice(4).trim();
    add(TX);

    }


    else if(text.startsWith('hello')){
    let name = text.slice(6).trim();
    hello(name);
  }
  else if(text === 'help\n'){
    help();
  }
  else{
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name=''){
  console.log('hello ' + name + '!');
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Zakaria Sukarieh")

// if user typed help, it will show possible commands to use that will help him/her
function help(){
  console.log("Possible commands: ")
  console.log("- quit or exit : to quit the application")
  console.log("- hello <name> : to say hello to the given name")
  console.log("- help : to show this message")
};

const tasks =  [
  "do the tasks",
  "wash the dishes",
  "cut the rope"
];

function list (){
  console.log(tasks)
};

function add(TX){
  tasks.push(TX);
  console.log(`Task "${TX}" added!`);
}