export class CreateUserDto {
  email: string;
  name: string;
  password: string;
}
export class UserDto extends CreateUserDto {
  _id: string | number;
  __v: number;
}
