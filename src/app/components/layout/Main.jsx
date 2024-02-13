import "./Main.scss";
import {processColorArgs} from "../common/Colors";
import classNames from "classnames";

export default function Main(props) {
    // Set the body's background color to the same
    // as our default main. This will allow us to
    // scroll past the top and bottom without
    // seeing the white background.
    let color = {
        color: props.themeColor || "dark",
        shade: props.themeShade || "dark",
    };

    const colorClassNames = processColorArgs(color, props.gradient);

    // document.body.classList.add(...colorClassNames);

    return (
        <main className={classNames(props.className, ...colorClassNames)}>
            {props.children}
        </main>
    );
}
