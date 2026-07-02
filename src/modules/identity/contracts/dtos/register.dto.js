export class RegisterDto {
  constructor({
    username,
    email,
    password,
    name,
  }) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
  }
}