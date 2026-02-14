import { REST, Routes } from "discord.js";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { pathToFileURL } from "url";

dotenv.config();

const commands = [];
const commandsPath = path.resolve("./src/commands");
const files = fs.readdirSync(commandsPath).filter(f => f.endsWith(".ts"));

for (const file of files) {
  const filePath = path.join(commandsPath, file);
  const module = await import(pathToFileURL(filePath).href);
  commands.push(module.default.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN!);

await rest.put(
  Routes.applicationGuildCommands(
    process.env.CLIENT_ID!,
    process.env.GUILD_ID!,
  ),
  { body: commands },
);

console.log("Commands deployed");
