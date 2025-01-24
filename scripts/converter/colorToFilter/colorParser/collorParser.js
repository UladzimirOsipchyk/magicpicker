import { MAX_COLOR_INPUT_STRING_LENGTH } from "../../shared/consts/inputLimits";
import { errorHandlingGenerateInputErrorMessage } from "../../shared/functionality/errorHandling/errorHandlingJs";
import { MATCH_HEXADECIMAL } from "../../shared/consts/regex";
import { ColorTypes } from "../../shared/consts/colorTypes";
import { ColorFormats } from "../../shared/consts/colorFormats";


export function colorParserValidateAndParseHex(hexString) {
  if (hexString.length < MAX_COLOR_INPUT_STRING_LENGTH) {
    const isValid = hexString.match(MATCH_HEXADECIMAL);
    if (isValid) {
      return { color: hexString };
    }

    return {
      errorMessage: errorHandlingGenerateInputErrorMessage(ColorTypes.HEX, hexString, ColorFormats.HEX)
    }
  }
}