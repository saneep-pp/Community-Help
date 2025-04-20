import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../model/User";
import { log } from "console";

const router = Router();

interface AuthRequestBody {
  username: string;
  password: string;
}

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as AuthRequestBody;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User Created" });
  } catch (err) {
    res.status(400).json({ err: "Username Already exists or invalid data" });
    // console.log("error creating signup auth",err);
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as AuthRequestBody;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid username or passord" });
    }
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error!" });
  }
});
