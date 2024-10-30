import "reflect-metadata";
import { faker } from "@faker-js/faker";
import { FieldMetadata, getFieldMetadata } from "./faker-decorator";

// 필드 설정 타입 정의
type FieldOptions<T> = {
  type?: string; // custom type for specific generation (e.g., 'email')
  skip?: boolean; // whether to skip this field
  value?: T; // specific value for this field
};

export function generateStub<T>(
  cls: new () => T,
  configs: Partial<Record<keyof T, FieldOptions<T[keyof T]>>> = {}
): T {
  const instance = new cls();
  const fields = getFieldMetadata(instance);

  fields.forEach((field: FieldMetadata) => {
    const { name, type } = field;

    const options = configs[name] || {}; // 필드별 옵션 가져오기

    if (options.value !== undefined) {
      // 수동 설정한 value가 있으면 우선 적용
      instance[name] = options.value;
    } else if (options.type === "email" && type === String) {
      // 타입이 email로 지정된 경우 faker의 이메일 생성 함수 사용
      instance[name] = faker.internet.email() as T[keyof T];
    } else {
      // type에 맞는 랜덤 데이터 생성 (기본 생성 로직)
      if (type === String) {
        instance[name] = faker.string.alpha() as T[keyof T];
      } else if (type === Number) {
        instance[name] = faker.number.int() as T[keyof T];
      } else if (type === Boolean) {
        instance[name] = faker.datatype.boolean() as T[keyof T];
      }
      // 필요시 추가 타입 핸들링
    }
  });

  return instance;
}
