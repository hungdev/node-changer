const inquirer = require("inquirer");

//First set of questions
const questions = [
  {
    type: "list",
    name: "Version 14",
    message: "Choose your version:",
    choices: ["14", "16", "18", "other versions"],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

module.exports = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log("Your Order:", answers);
    // console.log(pad("Tea:".gray, 10), answers.tea);
    // total = parseFloat(answers.tea.split("$")[1]);
    // //Because answer.tea is in String, we need to split the string by "$" and cast
    // //the number element into type Float and store it in "total"
    // console.log(pad("Milk:".gray, 10), answers.milk);
    // total += parseFloat(answers.milk.split("$")[1]);
    // //Summing up the total price.
    // console.log(pad("Topping:".gray, 10), answers.topping);
    // total += parseFloat(answers.topping.split("$")[1]);
    // console.log(pad("Sugar:".gray, 10), answers.sugar);
    // if (answers.serveHot == false) {
    //   //If a use wants cold tea, select the ice level before printing out the price
    //   inquirer.prompt(serveCold).then((answer) => {
    //     console.log(pad("Ice level:".gray, 10), answer.ice);
    //     console.log("------------------");
    //     console.log("Total price: $" + total);
    //   });
    // } else {
    //   //If the user wants the tea hot, print out the price.
    //   console.log("------------------");
    //   console.log("Total price: $" + total);
    // }
  });
};
