import "reflect-metadata";
import { FakerField } from "../src/faker-decorator";

export class UserSetting {
  @FakerField()
  lightmode: boolean;
}

// 예제 엔티티 클래스
export class User {
  @FakerField()
  name?: string; // optional

  @FakerField()
  age: number;

  @FakerField()
  email: string;

  @FakerField()
  isAdmin: boolean;

  @FakerField()
  createdAt: Date;

  @FakerField(Array, Number)
  test: number[];

  @FakerField(Object)
  settings: UserSetting;
}
