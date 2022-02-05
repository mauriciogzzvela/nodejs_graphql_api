import {User} from "./users.model";

const users: Array<User> = [];

users.push(new User(1,"pepe", "pecas", "pepepecas@gmail.com", "holapepe", 1));
users.push(new User(2, "john", "doe", "johndoe@gmail.com", "holajohn", 1));

exports.userSample = users;