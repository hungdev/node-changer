#!/usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";
import clear from "clear";
import { nodeInquirer } from "../lib/inquirer.js";

clear();

console.log(
  chalk.yellow(
    figlet.textSync("Node Changer - Cee", { horizontalLayout: "full" })
  )
);

const run = async () => {
  await nodeInquirer();
};

run();
