// 04-static-methods.js

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3));

// const m = new MathUtils();
// m.add(2,3); ❌ Error
