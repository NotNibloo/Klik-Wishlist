import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import type { Command } from "../types/Command";

const command: Command = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription(
      "this command can only be accesed by administator of discord server",
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply("Setup");
  },
};

export default command;
