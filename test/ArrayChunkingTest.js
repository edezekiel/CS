describe("Array Chunking", () => {
  it("Should implement array chunking", () => {
    assert.deepEqual(ArrayChunking([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
    assert.deepEqual(ArrayChunking([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
    assert.deepEqual(ArrayChunking([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
  });
});
