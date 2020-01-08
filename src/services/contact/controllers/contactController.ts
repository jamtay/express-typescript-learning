import * as mongoose from "mongoose";
import { ContactSchema } from "../models/contact";
import { Request, Response } from "express";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req: Request, res: Response) => {
  const newContact = new Contact(req.body);
  return newContact.save();
};

export const getContacts = (req: Request, res: Response) => {
  return Contact.find({});
};

export const getContactWithID = (req: Request, res: Response) => {
  return Contact.findById(req.params.contactId);
};

export const updateContact = (req: Request, res: Response) => {
  return Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true });
};

export const deleteContact = (req: Request, res: Response) => {
  return Contact.deleteOne({ _id: req.params.contactId });
};
