export const UNEXPECTED_ERROR_MESSAGE_PREFIX =
  'Unexpected error has occurred, please report this by using the following link: ';

export const UNEXPECTED_ERROR_MESSAGE_LINK = 'https://github.com/OvidijusParsiunas/css-filter-converter/issues/new';

export const UNEXPECTED_ERROR_MESSAGE_INTRODUCTION = UNEXPECTED_ERROR_MESSAGE_PREFIX + UNEXPECTED_ERROR_MESSAGE_LINK;

export const DEFAULT_CONVERSION_ERROR_MESSAGE = 'Input value is invalid';

export const MUST_INSTALL_PUPPETEER =
  "To convert filter values to color in Node - you will first need to install 'puppeteer' by running:" +
  ' \n npm install puppeteer';

export function errorHandlingGenerateErrorResult(message){
  return { color: null, error: { message } };
}

export function errorHandlingGenerateInputErrorMessage(colorType, colorString, format){
  const errorPrefix = `Input ${colorType} color string could not be parsed.`;
  const actualStringReceived = `String received: ${colorString}.`;
  const messageStrings = [errorPrefix, actualStringReceived];
  if (format) {
    const expectedFormat = `Expected format: ${format}.`;
    messageStrings.splice(1, 0, expectedFormat);
  }
  return messageStrings.join(' ');
}

export function errorHandlingGenerateUnexpectedError(error) {
  const errorMessage = `${UNEXPECTED_ERROR_MESSAGE_INTRODUCTION}: \n${error.message}`;
  return errorHandlingGenerateErrorResult(errorMessage);
}

export function errorHandlingHasError(param) {
  return !!(param).errorMessage;
}