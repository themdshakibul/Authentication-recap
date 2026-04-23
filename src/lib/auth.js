// "use server";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// ex:  mongobd:https://
// env name add width process.env
const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("better_auth");

export const auth = betterAuth({
  // email and password
  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db, {
    client,
  }),
});
