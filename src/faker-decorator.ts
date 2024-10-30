import "reflect-metadata";

const fieldMetadataKey = Symbol("fieldMetadata");

export interface FieldMetadata {
  name: string | symbol;
  type: any;
}

export function FakerField(): PropertyDecorator {
  return (target, propertyKey) => {
    const existingFields: FieldMetadata[] =
      Reflect.getMetadata(fieldMetadataKey, target) || [];
    const fieldType = Reflect.getMetadata("design:type", target, propertyKey);

    existingFields.push({ name: propertyKey, type: fieldType });
    Reflect.defineMetadata(fieldMetadataKey, existingFields, target);
  };
}

export function getFieldMetadata(target: any): FieldMetadata[] {
  return Reflect.getMetadata(fieldMetadataKey, target) || [];
}
