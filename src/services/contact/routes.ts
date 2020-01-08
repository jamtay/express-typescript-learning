import { Request, Response } from "express";
import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from "./controllers/contactController";
import {handleDeletedResponse} from "./response/deleted";

export default [
  {
    path: "/api/v1/contact",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        res.json(await getContacts(req, res));
      }
    ]
  }, {
    path: "/api/v1/contact",
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        res.json(await addNewContact(req, res));
      }
    ]
  }, {
    path: "/api/v1/contact/:contactId",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        res.json(await getContactWithID(req, res));
      }
    ]
  }, {
    path: "/api/v1/contact/:contactId",
    method: "put",
    handler: [
      async (req: Request, res: Response) => {
        res.json(await updateContact(req, res));
      }
    ]
  }, {
    path: "/api/v1/contact/:contactId",
    method: "delete",
    handler: [
      async (req: Request, res: Response) => {
        const result = handleDeletedResponse(await deleteContact(req, res), req.params.contactId);
        res.json(result);
      }
    ]
  }
];