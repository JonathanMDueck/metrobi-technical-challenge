function checkOpenedClosed(string) {
  const OPEN_PAREN = "(";
  const CLOSE_PAREN = ")";
  const OPEN_BRACE = "{";
  const CLOSE_BRACE = "}";
  const OPEN_BRACKET = "[";
  const CLOSE_BRACKET = "]";

  const values = string.split("");
  let openCloseStack = [];

  for (let i = 0; i < values.length; ++i) {
    if (isClosing(values[i]) && openCloseStack.length === 0) return false;

    if (isOpening(values[i])) openCloseStack.push(values[i]);

    if (isClosing(values[i]) && openCloseStack.length !== 0) {
      if (isSameType(getLastItemFromStack(), values[i])) {
        openCloseStack.pop();
      } else {
        return false;
      }
    }
  }

  return openCloseStack.length === 0;

  function isSameType(open, close) {
    if (open === OPEN_BRACE && close === CLOSE_BRACE) return true;
    if (open === OPEN_BRACKET && close === CLOSE_BRACKET) return true;
    if (open === OPEN_PAREN && close === CLOSE_PAREN) return true;
    return false;
  }

  function getLastItemFromStack() {
    return openCloseStack[openCloseStack.length - 1];
  }

  function isOpening(string) {
    return (
      OPEN_BRACE === string || OPEN_BRACKET === string || OPEN_PAREN === string
    );
  }

  function isClosing(string) {
    return (
      CLOSE_BRACE === string ||
      CLOSE_BRACKET === string ||
      CLOSE_PAREN === string
    );
  }
}

console.log(checkOpenedClosed(")()"));
console.log(checkOpenedClosed("(())"));
console.log(checkOpenedClosed("({[]})"));
console.log(checkOpenedClosed("({[]]})"));
