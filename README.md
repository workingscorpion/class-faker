# @workingscorpion/class-faker

Class based Faker Object Generator for testing node.js inspired by Fakingoose

## install

```
npm install --save-dev @workingscorpion/class-faker
```

## How to Use

## Setting

```
// tsconfig.json
{
  compilerOptions:{
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
  },
  ...
}
```

### Declare Class

```
export class UserSetting {
  @FakerField()
  lightmode: boolean;
}

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

```

### Generate

```
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
```

### Supported Type

- String
- Number
- Date
- Boolean
- Array
- NestedObject
