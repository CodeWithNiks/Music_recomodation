import * as Sequelize from 'sequelize';
// Adjust import path based on your project structure

export interface IRsvp extends Sequelize.Model {
  sr_no: number;
  e_id: number;
  id?: number;
}

export interface ICreateRsvpRequest {
  e_id: number;
  id?: number;
}
