/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
                        aliases: ["hello"," alive","bot"],
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			'https://telegra.ph/file/63f4a60b59020501e4310.mp4'
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `ᴍᴏꜱʜɪ ᴍᴏꜱʜɪ  M.sender.username \n\n_senpai💖 ℍ𝕠𝕨 𝕒𝕣𝕖 𝕪𝕠𝕦💖 𝕋𝕪𝕡𝕖 ${this.client.config.prefix}help 𝕥𝕠 𝕤𝕖𝕖 𝕞𝕪 𝕔𝕒𝕞𝕞𝕒𝕟𝕕'𝕤 𝕝𝕚𝕤𝕥 \n\n`,
			}
		);
	};
}
