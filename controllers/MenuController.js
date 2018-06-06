
 const inquirer = require('inquirer');

 module.exports = class MenuController {
   constructor(){
     this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Exit",
          "Get Date"
        ]
      }
    ];
    this.contacts = [];
   }

   main(){
     console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
     switch(response.mainMenuChoice){
     case "Add new contact":
     this.addContact();
      break;
    case "Exit":
      this.exit();
    case "Get Date":
      this.getDate();
    default:
      console.log("Invalid input");
      this.main();
  }
})
.catch((err) => {
  console.log(err);
});
   }

   clear(){
     console.log("\x1Bc");
   }

   addContact(){
     this.clear();
     console.log('addContact called');
     this.main();
   }

   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }
   getDate(){
     this.clear();
     console.log("getDate called");
     let currentTime= new Date();
     console.log(currentTime);
     process.exit();
   }
}
