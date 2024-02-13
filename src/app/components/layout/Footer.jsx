import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.scss";
import {getBgColor as gbc} from "../common/Colors";

export default function Footer(props) {
    return (
        <footer className={gbc(props.color || "light", props.shade || "light")}>
            <aside className={"color-color-dark-light footer-list"}>
                <ul>
                    <li>
                        <a className="color-color-venere-light" href="tel:+1618-464-4776">
                            (618) GO-HIPPO
                        </a>
                    </li>
                    <li>
                        <a
                            className="color-color-venere-light"
                            href="mailto:comms@gospacehippo.com"
                        >
                            {" "}
                            <FontAwesomeIcon
                                icon="fa-solid fa-paper-plane"
                                fontSize={".75em"}
                            />{" "}
                            <span> comms@gospacehippo.com</span>
                        </a>
                    </li>
                    <li className={"color-color-light-light hide-small"}>
                        Mission Control:{" "}
                        <a
                            href="https://www.austintexas.org/"
                            target="_blank"
                            rel="noreferrer"
                            className="color-venere-light"
                        >
                            30.2672° N, 97.7431° W
                        </a>
                    </li>
                    <li className={"color-color-light-light very-small"}>
                        &copy; {new Date().getFullYear()} Space Hippo L.C., Austin, TX
                    </li>
                </ul>
            </aside>
        </footer>
    );
}
