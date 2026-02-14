import { Client } from "discord.js";
import chalk from "chalk";

export default {
  name: "clientReady",
  once: true,
  execute(client: Client) {
    console.log(chalk.cyan(`Logged in as ${client.user?.tag}`));
  },
};
