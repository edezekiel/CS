describe("Anagrams", () => {
  it("Should implement anagrams", () => {
    assert.equal(Anagrams("hello world", "world hello"), true);
    assert.equal(Anagrams("hellow world", "hello there"), false);
  });
});
