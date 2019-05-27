var assert = chai.assert;

describe("Two Sum", () => {
  it("Should implement two sum", () => {
    assert.deepEqual(twoSum([1, 2, 3, 4], 4), [[2, 2], [3, 1]]);
  });
});
