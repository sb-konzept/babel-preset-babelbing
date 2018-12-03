/* eslint-env jest */
function transform(...args) {
  const { code } = require("@babel/core").transform(String.raw(...args), {
    presets: ["./index.js"]
  });
  return code;
}

test("doesnt explode", () => {
  const code = transform`
    function test () {}
  `;
  expect(code).toMatchSnapshot();
});

test("transforms react", () => {
  const code = transform`
    function Test (props) {
      return <div>{props.children}</div>
    }
  `;
  expect(code).toMatchSnapshot();
});

test("transforms optional chaining", () => {
  const code = transform`
    function Test (props) {
      return <div>{props.test?.test?.('hi')}</div>
    }
  `;
  expect(code).toMatchSnapshot();
});

test("transforms export wildcard from", () => {
  const code = transform`
  export * from './test'
  `;
  expect(code).toMatchSnapshot();
});

test("transforms async/await wildcard from", () => {
  const code = transform`
    async function test () {
      const a = await test2()
      await test3()
      return a
    }
  `;
  expect(code).toMatchSnapshot();
});

test("transforms react components", () => {
  const code = transform`
    class Test extends Component {
      state = {
        test: 1
      }
      render () {
        return <div>{props.test?.test?.('hi')}</div>
      }
    }
  `;
  expect(code).toMatchSnapshot();
});
