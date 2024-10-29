import "reflect-metadata";

function Field(target: any, propertyKey: string) {
  // 빈 데코레이터: 필요 시 추가 로직 가능
  const fields = Reflect.getMetadata("fields", target) || [];
  fields.push(propertyKey);
  Reflect.defineMetadata("fields", fields, target);
}

// 예제 엔티티 클래스
export class User {
  //   @Reflect.metadata("design:type", String)
  @Field
  name?: string; // optional
  //   @Reflect.metadata("design:type", Number)
  @Field
  age: number;
  //   @Reflect.metadata("design:type", String)
  email: string;
}
