import * as Sequelize from 'sequelize';
// Adjust import path based on your project structure

export interface IRsvp extends Sequelize.Model {
  sr_no: number;
  id: number;
  e_id?: number;
}

export interface ICreateRsvpequest {
  id: number;
  e_id?: number;
}
