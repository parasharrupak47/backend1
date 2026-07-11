import { asynchandler } from "../utils/asynchandler.js";

const registerUser = asynchandler(async (req, res) => {
  // Your registration logic here
  res.status(201).json({ message: "User registered successfully" });
});


export { registerUser };