import { Firebase } from "./../util/Firebase";
import { Model } from "./Model";


export class User extends Model {

  constructor(response) {

    super();

    this._data = {}

    if (response.user.email) {
      this.getById(response.user.email).then(resp => {
        if (!resp.exists) {
          this.name = response.user.displayName;
          this.email = response.user.email;
          this.photo = response.user.photoURL;

          this.save();
        }
      });
    }
  }

  get name() { return this._data.name; }
  set name(value) { this._data.name = value }

  get email() { return this._data.email; }
  set email(value) { this._data.email = value; }

  get photo() { return this._data.photo; }
  set photo(value) { this._data.photo = value }

  getById(id) {

    return new Promise((s, f) => {

      User.findByEmail(id).onSnapshot(doc => {

        this.fromJSON(doc.data());

        s(doc);

      });

    });
  }

  save() {

    return User.findByEmail(this.email).set(this.toJSON());
  }

  static getRef() {

    return Firebase.db().collection('/users');

  }

  static findByEmail(email) {

    return User.getRef().doc(email);

  }

  addContact(contact) {
    return User.getContactsRef(this.email).doc(btoa(contact.email)).set(contact.toJSON());
  }
}