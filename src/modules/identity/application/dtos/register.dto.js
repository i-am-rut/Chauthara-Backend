class RegisterDto {
  constructor({
    username,
    email,
    password,
    name = null
  }) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
  }
}

export default RegisterDto;