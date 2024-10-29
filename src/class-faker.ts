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
export function generateStub<T extends object>(
  entityClass: new () => T,
  configs: Partial<Record<keyof T, FieldOptions<T[keyof T]>>> = {}
): T {
  const instance = new entityClass();

  for (const propertyKey of Object.keys(instance) as Array<keyof T>) {
    const options = configs[propertyKey] || {}; // 필드별 옵션 가져오기
    const type = Reflect.getMetadata(
      "design:type",
      instance,
      propertyKey as string
    );

    if (options.skip) {
      // skip이 true면 생성하지 않음
      continue;
    }

    if (options.value !== undefined) {
      // 수동 설정한 value가 있으면 우선 적용
      instance[propertyKey] = options.value;
    } else if (options.type === "email" && type === String) {
      // 타입이 email로 지정된 경우 faker의 이메일 생성 함수 사용
      instance[propertyKey] = faker.internet.email() as T[keyof T];
    } else {
      // type에 맞는 랜덤 데이터 생성 (기본 생성 로직)
      if (type === String) {
        instance[propertyKey] = faker.string.alpha() as T[keyof T];
      } else if (type === Number) {
        instance[propertyKey] = faker.number.int() as T[keyof T];
      } else if (type === Boolean) {
        instance[propertyKey] = faker.datatype.boolean() as T[keyof T];
      }
      // 필요시 추가 타입 핸들링
    }
  }

  return plainToInstance(entityClass, instance);
}
