const path = require("path");
const babel = require("rollup-plugin-babel");
const { terser } = require("rollup-plugin-terser");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");

export default {
  input: "src/index.ts",
  external: ["vue"],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelrc: false,
      runtimeHelpers: true,
      // presets: ["@babel/preset-env"],
      plugins: [
        // "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-optional-chaining",
        // "@babel/plugin-proposal-object-rest-spread",
        [
          "@babel/plugin-transform-runtime",
          {
            regenerator: true,
          },
        ],
      ],
      ignore: ["dist/*"],
    }),
    typescript({
      clean: true,
      declarationDir: path.resolve(__dirname, "types"),
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
    }),
  ],
  output: [
    {
      file: "dist/vue-timeago.js.js",
      format: "umd",
      plugins: [terser()],
      name: "VueTimeoutJS",
    },
    {
      file: "dist/vue-timeago.js.esm.js",
      format: "esm",
      plugins: [],
      globals: ["vue"],
    },
  ],
};
