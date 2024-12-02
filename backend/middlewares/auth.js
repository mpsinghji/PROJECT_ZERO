import jwt from "jsonwebtoken";
import { Response } from "../utils/response.js";
import { message } from "../utils/message.js";

export const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return Response(res, 401, false, message.noTokenProvided);
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return Response(res, 403, false, message.invalidOrExpiredToken);
      }
      req.user = decoded;
      next();
    });
  };
