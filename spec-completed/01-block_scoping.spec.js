
describe('let', () => {

  it('can be assigned like var', () => {

    let foo = 'bar';

    foo = 'baz';

    expect(foo).toBe('baz');
  });

  it('does not hoist let like var', () => {

    function noHoisting() {
      console.log(foo);
      {
        let foo = 'bar';
      }
    }

    expect(noHoisting).toThrow(new ReferenceError('foo is not defined'));
  });

  it('avoids closure gotcha in loops', () => {

    let funcs = [];

    //Change loop counter to `let` so that it is recreated for each iteration
    for (let i = 0; i < 10; i++) {
      funcs.push(() => i);
    }

    expect(funcs[3]()).toBe(3);
  });

  it('has block level scoping with let', () => {
    let foo = 'bar';

    {
      let foo = 'baz';
      expect(foo).toBe('baz');
    }

    expect(foo).toBe('bar');
  });
});

describe('const', () => {

  it('only restricts array variable assignment, not values', () => {

    // make the test pass with const

    const myArray = [1, 2, 3];

    myArray.push(4, 5);

    expect(myArray).toEqual([1, 2, 3 ,4, 5]);
  });

  it('only restricts object variable assignment, not values', () => {

    // make the test pass with const

    const myObj = { a: 1, b: 2, c: 3 };
    myObj.a = 4;

    expect(myObj).toEqual({ a: 4, b: 2, c: 3});
  });

});