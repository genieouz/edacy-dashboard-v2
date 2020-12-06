import { User } from "generated/graphql";


export interface ISession {
  token: string;
  user: User;
}
