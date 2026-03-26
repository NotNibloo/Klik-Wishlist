import { ButtonBuilder, ButtonStyle } from "discord.js";

export const wishlistButton = new ButtonBuilder()
  .setCustomId("wishlistButton")
  .setLabel("Apply!")
  .setStyle(ButtonStyle.Primary);

export const redirectButton = new ButtonBuilder()
  .setCustomId("redirectButton")
  .setLabel("🔗")
  .setStyle(ButtonStyle.Secondary);
