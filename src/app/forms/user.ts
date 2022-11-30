export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public interested: string,
    public email: string,
    public password: string
  ) {}
}

export class Customer {
  constructor(
    public firstname: string,
    public lastname: string,
  ) {}
}
