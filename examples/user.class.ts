import "reflect-metadata";
import { faker } from "@faker-js/faker";
import { FakerField } from "../lib/faker-decorator";
import { generateStub } from "@app/class-faker";

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
  datas: number[];

  @FakerField(Object)
  settings: UserSetting;
}

const fakeFullUser = generateStub(User);
const fakeCustomUser = generateStub(User, {
  email: {
    type: "email",
  },
  name: {
    type: "name",
  },
  age: {
    value: 10,
  },
  createdAt: {
    value: () => faker.date.future(),
  },
  settings: {
    skip: true,
  },
});
