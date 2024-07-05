// modules/playlists/schema.ts

import * as Sequelize from 'sequelize';
import { IRsvp } from './model';
import { sequelize } from '../../config/database/sql';
// import { SongSchema } from '@modules/song/schema'; // Adjust import path based on your project structure

export const rsvpSchema = sequelize.define<IRsvp>(
  'favourites',
  {
    sr_no: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    e_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Optional: Adds createdAt and updatedAt fields
  },
);
