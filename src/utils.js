import { SUPPORTED_COLORS } from "./constants/SupportedColors";

export const rgbFromColorId = id => {
    const color = SUPPORTED_COLORS.find(color => color.id === id);
    return color ? color.rgb : "transparent";
};
