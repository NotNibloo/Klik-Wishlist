import fs from "fs";
import path from "path";
import chalk from "chalk";
import { Client } from "discord.js";
import { pathToFileURL } from "url";
import type { Command } from "../types/Command";

export default async function loadCommands(client: Client) {
  const commandsPath = path.resolve("./src/commands");
  const files = fs.readdirSync(commandsPath).filter(f => f.endsWith(".ts"));

  for (const file of files) {
    const filePath = path.join(commandsPath, file);
    const module = await import(pathToFileURL(filePath).href);
    const command: Command = module.default;

    client.commands.set(command.data.name, command);

    console.log(chalk.green(`Loaded command: ${command.data.name}`));
  }
}
