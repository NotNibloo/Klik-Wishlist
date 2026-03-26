import { ChatInputCommandInteraction, AttachmentBuilder } from "discord.js";
import { wishlistEmbed } from "../components/wishlistEmbed";
import path from "path";

export async function setup(interaction: ChatInputCommandInteraction) {
  const banner = new AttachmentBuilder(
    path.join(__dirname, "../assets/Logo_Text_White.svg"),
    { name: "banner.svg" },
  );
  interaction.reply({
    embeds: [wishlistEmbed],
    files: [banner],
  });
}
