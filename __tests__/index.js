/* eslint-env jest */
function transform(...args) {
  const { code } = require('@babel/core').transform(String.raw(...args), {
    presets: ['./index.js'],
  });
  return code;
}

test('doesnt explode', () => {
  const code = transform`
    function test () {}
  `;
  expect(code).toMatchSnapshot();
});

test('transforms react', () => {
  const code = transform`
    function Test (props) {
      return <div>{props.children}</div>
    }
  `;
  expect(code).toMatchSnapshot();
});

test('transforms optional chaining', () => {
  const code = transform`
    function Test (props) {
      return <div>{props.test?.test?.('hi')}</div>
    }
  `;
  expect(code).toMatchSnapshot();
});

test('transforms export wildcard from', () => {
  const code = transform`
  export * from './test'
  `;
  expect(code).toMatchSnapshot();
});
