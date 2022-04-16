/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "marin",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}marin`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			'https://c.tenor.com/1nwkeOg8j48AAAPo/sono-bisque-doll-sono-bisque-doll-wa-koi-wo-soru.mp4';
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `💖 *MARIN* 💖\n\n🍀 *Description: A WhatsApp Bot With Rich NSFW features based on chitoge.*\n\n🌐 *OFFICIAL BOT URL: https://github.com/ShineiIchijo/Chitoge* \n\n 📒 *Guide: https://github.com/ShineiIchijo/Chitoge-Guides* \n\n 🔮 *BOT URL:https://github.com/Chey-san/Marin-Kitagawa-Bot* \n`,
			}
		);
	};
}
