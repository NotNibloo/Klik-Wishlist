import { Client, GatewayIntentBits, Collection } from "discord.js";
import dotenv from "dotenv";
import chalk from "chalk";
import loadCommands from "./handlers/commandHandler";
import loadEvents from "./handlers/eventHandler";
import type { Command } from "./types/Command";

dotenv.config();

export const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection<string, Command>();

declare module "discord.js" {
  interface Client {
    commands: Collection<string, Command>;
  }
}

console.log(chalk.blue("Loading handlers"));

await loadCommands(client);
await loadEvents(client);

client.login(process.env.TOKEN);
