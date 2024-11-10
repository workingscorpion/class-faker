import "reflect-metadata";

const fieldMetadataKey = Symbol("fieldMetadata");

export interface FieldMetadata {
  name: string | symbol;
  type: any;
  arrayElementType?: any;
  nestedObjectType?: any;
}

export function FakerField(
  nestedObjectType?: any,
  arrayElementType?: any
): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    // 기존 필드 메타데이터 가져오기
    const existingFields: FieldMetadata[] =
      Reflect.getMetadata(fieldMetadataKey, target.constructor) || [];

    // 필드 타입 가져오기
    const fieldType = Reflect.getMetadata("design:type", target, propertyKey);

    // 메타데이터 추가
    existingFields.push({
      name: propertyKey,
      type: fieldType,
      arrayElementType,
      nestedObjectType,
    });

    // Reflect 메타데이터에 필드 정보 저장
    Reflect.defineMetadata(
      fieldMetadataKey,
      existingFields,
      target.constructor
    );
  };
}

export function getFieldMetadata(target: any): FieldMetadata[] {
  return Reflect.getMetadata(fieldMetadataKey, target) || [];
}
