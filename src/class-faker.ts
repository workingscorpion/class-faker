import { plainToInstance } from "class-transformer";
import "reflect-metadata";
import { faker } from "@faker-js/faker";

// 필드 설정 타입 정의
type FieldOptions<T> = {
  type?: string; // custom type for specific generation (e.g., 'email')
  skip?: boolean; // whether to skip this field
  value?: T; // specific value for this field
};

// 생성 함수
export function generateStub<T>(): // entityClass: T
// entityClass: new () => T
// configs: Partial<Record<keyof T, FieldOptions<T[keyof T]>>> = {}
T {
  // console.log("entityClass :>> ", entityClass);
  // console.log("typeof entityClass :>> ", typeof entityClass);
  // const instance: T = {} as T;
  // const instance = new entityClass();
  // console.log("instance :>> ", instance);
  // console.log("instance :>> ", instance);
  // console.log("typeof instance :>> ", typeof instance);
  // console.log(
  //   "Object.getOwnPropertyNames(instance) :>> ",
  //   Object.getOwnPropertyNames(instance)
  // );
  // console.log(
  //   "Object.getOwnPropertyNames(entityClass) :>> ",
  //   Object.getOwnPropertyNames(entityClass)
  // );
  // console.log("Object.keys(entityClass) :>> ", Object.keys(entityClass));
  // console.log(
  //   "Object.keys(new entityClass) :>> "
  //   // Object.keys(new entityClass())
  // );

  // console.log("typeof entityClass :>> ", typeof entityClass);

  // console.log("configs :>> ", configs);
  // const instance = new entityClass();
  // console.log("instance :>> ", instance);

  // // 모든 메타데이터 키 가져오기
  // // const propertyKeys = Object.getOwnPropertyNames(
  // //   entityClass.prototype
  // // ) as Array<keyof T>;
  // // const propertyKeys = Object.getOwnPropertyNames(new entityClass()) as Array<
  // //   keyof T
  // // >;
  // // // const metadataKeys = Reflect.getMetadataKeys(instance) as Array<keyof T>;
  // const propertyKeys = Object.keys(instance) as Array<keyof T>;
  // console.log("propertyKeys :>> ", propertyKeys);

  // for (const propertyKey of propertyKeys) {
  //   console.log("propertyKey :>> ", propertyKey);
  //   const options = configs[propertyKey] || {}; // 필드별 옵션 가져오기
  //   console.log("options :>> ", options);
  //   const type = Reflect.getMetadata(
  //     "design:type",
  //     instance,
  //     propertyKey as string
  //   );

  //   if (options.skip) {
  //     // skip이 true면 생성하지 않음
  //     continue;
  //   }

  //   console.log("options.value :>> ", options.value);
  //   console.log("options.type :>> ", options.type);
  //   console.log("propertyKey :>> ", propertyKey);
  //   if (options.value !== undefined) {
  //     // 수동 설정한 value가 있으면 우선 적용
  //     instance[propertyKey] = options.value;
  //   } else if (options.type === "email" && type === String) {
  //     // 타입이 email로 지정된 경우 faker의 이메일 생성 함수 사용
  //     instance[propertyKey] = faker.internet.email() as T[keyof T];
  //   } else {
  //     // type에 맞는 랜덤 데이터 생성 (기본 생성 로직)
  //     if (type === String) {
  //       instance[propertyKey] = faker.string.alpha() as T[keyof T];
  //     } else if (type === Number) {
  //       instance[propertyKey] = faker.number.int() as T[keyof T];
  //     } else if (type === Boolean) {
  //       instance[propertyKey] = faker.datatype.boolean() as T[keyof T];
  //     }
  //     // 필요시 추가 타입 핸들링
  //   }
  // }

  return {} as T;
  // return plainToInstance(entityClass, instance);
}
