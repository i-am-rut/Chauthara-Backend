export class SessionDto {
  constructor({
    id,
    username,
    email,
    name,
  }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.name = name;
  }
}