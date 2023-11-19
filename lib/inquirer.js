import inquirer from "inquirer";
import { execSync } from "child_process";

const questions = [
  {
    type: "input",
    name: "version",
    message: "Choose your version:",
  },
];

const getLatestVersion = (ver) => {
  if (ver === "14") return "14.19.0";
  if (ver === "16") return "16.16.0";
  try {
    const latest = execSync(`fnm ls | grep "${ver}" | tail -1`)
      .toString()
      .replace(/\*/g, "")
      .trim();
    return latest;
  } catch {
    return "16.16.0";
  }
};

const installVersion = (ver) => {
  execSync(`fnm install ${ver} && fnm use ${ver} && fnm default ${ver}`);
};

export const nodeInquirer = async () => {
  const ans = await inquirer.prompt(questions);

  const version = getLatestVersion(ans.version);

  installVersion(version);
};
