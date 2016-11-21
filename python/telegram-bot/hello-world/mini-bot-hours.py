#!/usr/bin/env python3.4
# -*- coding:utf-8  -*-

# Artigo: http://imasters.com.br/linguagens/py/bot-telegram-mais-web-scraping-parte-01/?trace=1519021197&source=single

from telegram.ext import Updater, CommandHandler
from time import strftime

up = Updater('Insira o token aqui.')


def Horas(bot, update):

    msg = "Olá {user_name} agora são: "
    msg += strftime('%H:%M:%S')

    bot.send_message(chat_id=update.message.chat_id,
                     text=msg.format(
                         user_name=update.message.from_user.first_name))


up.dispatcher.add_handler(CommandHandler('horas', Horas))
up.start_polling()
