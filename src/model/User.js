import { Firebase } from "./../util/Firebase";
import { ClassEvent } from "../util/Classevent";

export class User extends ClassEvent {
  static getRef() {
    return Firebase.db().collection('/users');
  }

  static findByEmail(email){
    return User.getRef().doc(email);
  }
}