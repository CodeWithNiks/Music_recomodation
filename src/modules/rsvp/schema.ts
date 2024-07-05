import * as Sequelize from 'sequelize';
import { IRsvp } from './model';
import { sequelize } from '../../config/database/sql';
// Adjust import path based on your project structure

export const RsvpSchema = sequelize.define<IRsvp>(
  'rsvp',
  {
    sr_no: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    e_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Optional: Adds createdAt and updatedAt fields
  },
);
