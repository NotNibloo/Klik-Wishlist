import fs from "fs";
import path from "path";
import chalk from "chalk";
import { Client } from "discord.js";
import { pathToFileURL } from "url";

interface Event {
  name: string;
  once?: boolean;
  execute: (...args: any[]) => void | Promise<void>;
}

export default async function loadEvents(client: Client) {
  const eventsPath = path.resolve("./src/events");
  const files = fs.readdirSync(eventsPath).filter(f => f.endsWith(".ts"));

  for (const file of files) {
    const filePath = path.join(eventsPath, file);
    const module = await import(pathToFileURL(filePath).href);
    const event: Event = module.default;

    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    }

    console.log(chalk.yellow(`Loaded event: ${event.name}`));
  }
}
