/**
 * @jest-environment jsdom
 */
import {sum, checkUserAge} from "../../../src/helpers/functions"

describe("functions.js", () => {
  describe("sum", () => {
    test.each`
      a     | b    | result
      ${1}  | ${1} | ${2}
      ${5}  | ${1} | ${6}
      ${-1} | ${1} | ${0}
      ${0}  | ${0} | ${0}
    `("when a is: $a and b is: $b", ({a, b, result}) => {
      expect(sum(a, b)).toBe(result);
    })
  })

  describe("checkUserAge", () => {
    beforeEach(() => {
      window.alert = jest.fn();
    })

    afterEach(() => {
     // window.alert.mockReset(); // bad example
    })

    test("Check age is 17", () => {
      checkUserAge(17);
      expect(window.alert).toHaveBeenCalled();
    });

    test("Check age is 18", () => {
      checkUserAge(18);
      expect(window.alert).not.toHaveBeenCalled();
    });
  })
})
