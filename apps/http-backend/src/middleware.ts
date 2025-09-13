import { JWT_SECRET } from "@repo/backend-common/config";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export function middleware(req : Request, res: Response, next: NextFunction){

    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];
    if(!token){
        return res.status(401).json({
            message: "unauthorized"
        })
    }
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    if(!decoded || !decoded.userId){
        res.json({
            message: "not authorized"
        })
    }
    // @ts-ignore
    req.userId = decoded.userId;
    next();
}
