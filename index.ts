import { generateFakeData, generateStub } from "./src/class-faker";
import { User } from "./src/user.class";

// export * from "./src/class-faker";

// const fieldNames: string[] = [];

// function Field(target: any, propertyKey: string) {
//   fieldNames.push(propertyKey);
// }

// Object.defineProperty(exports, "__esModule", { value: true });
// console.log(
//   "Object.getOwnPropertyNames(new User()) :>> ",
//   Object.getOwnPropertyNames(new User())
// );
// const a = Object.getOwnPropertyNames(new User()).filter(
//   (key) => typeof new User()[key] !== "function"
// );
// console.log("a :>> ", a);
// // Object.getOwnPropertyNames(User.prototype).forEach((propertyKey) => {})

// const result = generateStub<User>();

// console.log("result :>> ", result);
// console.log("fieldNames :>> ", fieldNames);

// const fields = Reflect.getMetadata("fields", User.prototype);
// console.log("Fields:", fields); // 필드 리스트 출력

const fakeUser = generateFakeData(User);
console.log("fakeUser :>> ", fakeUser);

// generateStub(fields); // 스텁 생성

// type Fields<T> = (keyof T)[];
// console.log("typeof User :>> ", typeof User);
// console.log('keyof User :>> ', keyof User);

// 사용 예제
// const userStub = generateStub(
//   User
//   //     {
//   //   name: { skip: true }, // name은 생성을 건너뜀
//   //   email: { type: "email" }, // email은 이메일 형태로 생성
//   // }
// );
// console.log(userStub);
