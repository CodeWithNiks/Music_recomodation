import * as Sequelize from 'sequelize';

export interface IEvent extends Sequelize.Model {
  e_id: number;
  title: string;
  description?: string;
  date?: Date;
  location?: string;
  type?: string;
}

export interface ICreateEventRequest {
  title: string;
  description?: string;
  date?: Date;
  location?: string;
  type?: string;
}
// id: Primary key
// title: String
// description: Text
// date: Date
// location: String
// type: String (e.g., conference, meetup, webinar)
// userId: Foreign key referencing Users(id)
