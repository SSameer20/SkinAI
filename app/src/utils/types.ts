export type UserType = {
  Email: string;
  Password: string;
  ConfirmPassword?: string;
  FirstName?: string;
  LastName?: string;
  Phone?: string;
};

export interface User extends UserType {
  ID: number;
}

export type AuthResponse = { message: string; User?: User };
