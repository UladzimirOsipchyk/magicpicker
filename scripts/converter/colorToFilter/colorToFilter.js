import { colorParserValidateAndParseHex } from "./colorParser/collorParser";
import * as Converter from "../npm/color-convert";
import { SheenUtil } from "../shared/functionality/sheen/sheenUtil";
import { rgbToFilterConvert } from "../rgbToFilter/rgbToFilter";

export function colorToFilterHexToFilter(hexString, options) {
  return rgbToFilterConvert({
    colorString: hexString,
    validateAndParse: colorParserValidateAndParseHex,
    convertToRgb: Converter.hex.rgb,
    addSheen: SheenUtil.parseSheenFromOptions(options),
  })
}