import { Request, Response } from "express";

export default [
  {
    path: "/api/v1/contact",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        res.status(200).send({
          message: "SUCCESSFUL GET REQUEST"
        });
      }
    ]
  }, {
    path: "/api/v1/contact",
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        res.status(200).send({
          message: "SUCCESSFUL POST REQUEST"
        });
      }
    ]
  }, {
    path: "/api/v1/contact/:contactId",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        res.status(200).send({
          message: "SUCCESSFUL GET single REQUEST"
        });
      }
    ]
  }, {
    path: "/api/v1/contact/:contactId",
    method: "put",
    handler: [
      async (req: Request, res: Response) => {
        res.status(200).send({
          message: "SUCCESSFUL PUT single REQUEST"
        });
      }
    ]
  }, {
    path: "/api/v1/contact/:contactId",
    method: "delete",
    handler: [
      async (req: Request, res: Response) => {
        res.status(200).send({
          message: "SUCCESSFUL DELETE single REQUEST"
        });
      }
    ]
  }
];