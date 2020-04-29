import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const ROOT_URL = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(ROOT_URL)
    );
  }

  isAdminUser = (): boolean => {
    return this.get("id") === 1;
  };

  static buildsUserCollection = (): Collection<User, UserProps> => {
    return new Collection<User, UserProps>(ROOT_URL, (json: UserProps) =>
      User.buildUser(json)
    );
  };
}
