// const sessionIdToUserMap = new Map();
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const secretKey = process.env.jsonSecret;

function setUser(user) {
  // sessionIdToUserMap.set(sessionId, user);
  const payload = {user};
  const token = jwt.sign(payload, secretKey);
  return token;
}

function getUser(token) {
  // return sessionIdToUserMap.get(sessionId);
  const payload = jwt.verify(token, secretKey); //returns payload
  return payload.user;
}

export { setUser, getUser };