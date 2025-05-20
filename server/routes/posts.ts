import { title } from "process";
import { Router, Request, Response, NextFunction } from "express";
import { Jwt } from "jsonwebtoken";
import Posts from "../model/Posts";

const router = Router();

interface PostRequestBody {
  title: string;
  description: string;
  type: "Need" | "Offer";
}
