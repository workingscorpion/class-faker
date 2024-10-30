import "reflect-metadata";

const fieldMetadataKey = Symbol("fieldMetadata");

export function FakerField(): PropertyDecorator {
  return (target, propertyKey) => {
    const existingFields = Reflect.getMetadata(fieldMetadataKey, target) || [];
    existingFields.push(propertyKey);
    Reflect.defineMetadata(fieldMetadataKey, existingFields, target);
  };
}

export function getFieldMetadata(target: any): string[] {
  return Reflect.getMetadata(fieldMetadataKey, target) || [];
}
