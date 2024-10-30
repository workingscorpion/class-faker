import { generateStub } from "./src/class-faker";
import { User } from "./src/user.class";

// export * from "./src/class-faker";

const fakeUser = generateStub(User);
console.log("fakeUser :>> ", fakeUser);
