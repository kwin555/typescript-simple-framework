import { User } from "./models/user";

const user = new User({ name: "new record", age: 23423 });

user.set({ name: "New Name", age: 9999 });

console.log(user);

user.save();
