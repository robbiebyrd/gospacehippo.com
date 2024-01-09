import colors from "../css/colors.module.scss";

export type Gradient = {
    cStart: string;
    csStart: string;
    cEnd: string;
    csEnd: string;
    gradientType: string;
};

export type Color = {
    color: string;
    shade: string;
};

export function processColorArgs(color: Color, gradient: Gradient) {
    let colorClassNames = [];

    if (gradient) {
        colorClassNames.push(
            getColorGradient(
                gradient.cStart,
                gradient.csStart,
                gradient.cEnd,
                gradient.csEnd,
                gradient.gradientType,
            ),
        );
    }

    if (color) {
        colorClassNames.push(getBgColor(color.color, color.shade));
    }

    return colorClassNames;
}

function getColorClassname(color: string, shade: string, type: string): string {
    if (!["background", "fill", "color"].includes(type)) {
        type = "background";
    }
    if (!["dark", "light"].includes(shade)) {
        shade = "dark";
    }

    return ["color", type, color, shade].join("-");
}

export function getBgColor(color: string, shade: string): string {
    return getColorClassname(color, shade, "background");
}

export function getColorColor(color: string, shade: string): string {
    return getColorClassname(color, shade, "color");
}

export function getFillColor(color: string, shade: string): string {
    return getColorClassname(color, shade, "fill");
}

export function getColorGradient(
    cStart: string,
    csStart: string,
    cEnd: string,
    csEnd: string,
    gradientType: string,
): string {
    if (!["background", "fill", "color", "text"].includes(gradientType)) {
        gradientType = "background";
    }
    return [
        "color",
        gradientType,
        "gradient",
        cStart,
        csStart,
        "to",
        cEnd,
        csEnd,
    ].join("-");
}

export function camelCaseToDash(str: string): string {
    return str.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

export function dashToCamelCase(str: string): string {
    return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}

export function getColorValue(color: Color): string {
    return colors[dashToCamelCase(color.color + "-" + color.shade)];
}
