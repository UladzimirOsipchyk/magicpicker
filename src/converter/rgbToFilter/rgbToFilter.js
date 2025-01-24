import { RGB } from "../../importedconverter/npm/color-convert/conversions";
import { RgbColor } from "../../importedconverter/colorToFilter/rgbToFilter/rgbColor";
import { RgbToFilterWorker } from "../../importedconverter/colorToFilter/rgbToFilter/rgbToFilterWorker";

const DEFAULT_CONVERSION_ERROR_MESSAGE = 'Input value is invalid';

export function rgbToFilterConvert(conversionProps) {
  try {
    const { colorString, validateAndParse, convertToRgb, conversionErrorMessage, addSheen } = conversionProps;
    const trimmedString = colorString.trim().toLocaleLowerCase();
    const parseResult = validateAndParse?.(trimmedString) || { color: trimmedString };

    if (parseResult.errorMessage) {
      return { color: null, error: parseResult.errorMessage };
    }

    const rgbColor = rgbToFilterConvertToRGB(parseResult.color, convertToRgb) || (parseResult.color);

    if (!rgbColor) {
      return rgbToFilterGenerateConversionError(conversionErrorMessage);
    }

    return rgbToFilterExecute(rgbColor, addSheen);
  } catch (error) {
    return { color: null, error: error };
  }
}

function rgbToFilterConvertToRGB(parseResultColor, convertToRgb) {
  if (parseResultColor && convertToRgb) {
    return convertToRgb(parseResultColor);
  }
  return null;
}

function rgbToFilterGenerateConversionError(conversionErrorMessage) {
  const errorMessage = conversionErrorMessage || DEFAULT_CONVERSION_ERROR_MESSAGE;
  return { color: null, error: errorMessage };
}

function rgbToFilterExecute(rgb, addSheen) {
  const rgbColor = new RgbColor(rgb);
  const rgbToFilter = new RgbToFilterWorker(rgbColor, addSheen);
  return rgbToFilter.convert();
}