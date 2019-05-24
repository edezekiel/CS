describe("Caesar Cipher", () => {
  it("Should shift to the right", () => {
    assert.equal(CaesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
  });

  it("Should shift to the left", () => {
    assert.equal(CaesarCipher("I love JavaScript!", -100), "M pxzi NezeWgvmtx!");
  });
});
