import * as assert from "assert/strict"; // (A)
import { id } from "./id.mjs"; // (B)
test("My test", () => {
  // (C)
  assert.equal(id("abc"), "abc"); // (D)
});
