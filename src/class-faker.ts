import "reflect-metadata";
import { FieldMetadata, getFieldMetadata } from "./faker-decorator";
import { getChance } from "./chance-singleton";

// 필드 설정 타입 정의
type FieldOptions<T> = {
  type?: string; // custom type for specific generation (e.g., 'email')
  skip?: boolean; // whether to skip this field
  value?: T; // specific value for this field
};

export function generateStub<T extends Object>(
  cls: new () => T,
  configs: Partial<Record<keyof T, FieldOptions<T[keyof T]>>> = {}
): T {
  const instance = new cls();
  const fields = getFieldMetadata(instance);

  fields.forEach((field: FieldMetadata) => {
    const { name, type, arrayElementType, nestedObjectType } = field;

    const options = configs[name] || {}; // 필드별 옵션 가져오기

    if (options.skip) {
      return;
    }

    if (options.value !== undefined) {
      // 수동 설정한 value가 있으면 우선 적용
      instance[name] = options.value;
    } else if (type === String) {
      switch (options.type) {
        case "email":
          // 타입이 email로 지정된 경우 faker의 이메일 생성 함수 사용
          instance[name] = getChance().email() as T[keyof T];
          break;
        case "name":
          // 타입이 name으로 지정된 경우 faker의 이메일 생성 함수 사용
          instance[name] = getChance().name() as T[keyof T];
          break;
        default:
          instance[name] = getChance().string({
            alpha: true,
            numeric: true,
          }) as T[keyof T];
      }
    } else {
      // type에 맞는 랜덤 데이터 생성 (기본 생성 로직)
      if (type === Number) {
        instance[name] = getChance().integer() as T[keyof T];
      } else if (type === Boolean) {
        instance[name] = getChance().bool() as T[keyof T];
      } else if (type === Array) {
        if (arrayElementType) {
          instance[name] = Array.from({ length: 3 }, () => {
            // 기본 타입인지 확인 후 생성
            if (arrayElementType === String) return getChance().string();
            if (arrayElementType === Number) return getChance().integer();
            if (arrayElementType === Boolean) return getChance().bool();
            if (arrayElementType === Date) return getChance().date();
            // 객체라면 재귀적으로 `generateStub` 호출
            return generateStub(arrayElementType);
          }) as any;
          // }) as T[keyof T];
        }
      } else if (type === Date) {
        instance[name] = getChance().date() as T[keyof T];
      } else if (nestedObjectType === Object) {
        // 객체 타입 처리
        const objectType = Reflect.getMetadata(
          "design:type",
          cls.prototype,
          name
        );
        console.log(`objectType`, objectType);
        if (objectType) {
          // 하위 객체가 있는 경우 재귀적으로 처리
          instance[name] = generateStub(objectType);
        }
      }
      // 필요시 추가 타입 핸들링
    }
  });

  return instance;
}
