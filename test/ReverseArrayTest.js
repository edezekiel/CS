describe("Reverse Arrays", () => {
  it("Should reverse arrays", () => {
    assert.deepEqual(ReverseArray([1, 2, 3, 4]), [4, 3, 2, 1]);
    assert.deepEqual(ReverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });
});
