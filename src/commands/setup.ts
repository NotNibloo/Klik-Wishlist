import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  PermissionFlagsBits,
} from "discord.js";
import type { Command } from "../types/Command";

const command: Command = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription(
      "this command can only be accesed by administator of discord server",
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    if (interaction.memberPermissions?.has(PermissionFlagsBits.Administrator)) {
      await interaction.reply("Setup");
    } else {
      await interaction.reply("You dont have permissions to do this command!");
    }
  },
};

export default command;
