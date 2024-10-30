import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from 'rollup-plugin-dts';
import { uglify } from "rollup-plugin-uglify";

export default [
  {
    input: "./index.ts", // SDK의 진입점
    output: [
      {
        file: "dist/bundle.cjs.js", // CommonJS로 번들링
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/bundle.esm.js", // ES Module로 번들링
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json", // SDK에 맞춘 tsconfig.json
        declaration: true,
        declarationDir: "dist",
      }),
      uglify()
    ],
    external: ["@nestjs/common", "@nestjs/core"], // 외부 모듈로 처리할 패키지들
  },
  {
    input: "dist/index.d.ts", // 이전 번들에서 생성된 타입 정의 파일 경로
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
