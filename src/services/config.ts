import dotenv from 'dotenv';
import 'reflect-metadata';
import {injectable} from 'inversify';
import path from 'path';
import xbytes from 'xbytes';
import {ConditionalKeys} from 'type-fest';
import {ActivityType, PresenceStatusData} from 'discord.js';
dotenv.config();

export const DATA_DIR = path.resolve(process.env.DATA_DIR ? process.env.DATA_DIR : './data');

const CONFIG_MAP = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  REGISTER_COMMANDS_ON_BOT: process.env.REGISTER_COMMANDS_ON_BOT === 'true',
  DATA_DIR,
  CACHE_DIR: path.join(DATA_DIR, 'cache'),
  CACHE_LIMIT_IN_BYTES: xbytes.parseSize(process.env.CACHE_LIMIT ?? '2GB'),
