"use client";

import React, {useEffect} from "react";
import "./ButtonPanel.scss";
import classNames from "classnames";
import {getColorColor as gcc, getFillColor as gfc} from "../common/Colors";
import {ReactSVG} from "react-svg";
import Flickity from "react-flickity-component";
import SHButton from "@/app/components/layout/Button";

function ButtonPanelButton(props: any) {
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        const handleEsc = (event: { key: string }) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <>
            <SHButton
                name={props.name}
                color={props.color}
                shade={props.shade}
                shape={"rectangle"}
                className={"button-panel-button"}
                onClick={() => setIsOpen(true)}
            ></SHButton>
            <div
                id={props.name.toLowerCase().split(" ").join("_") + "-window"}
                className={classNames("shadowy", isOpen ? "is-open" : "is-closed")}
            >
                <div
                    className={classNames(
                        "popup",
                        gcc(props.alertColor, props.alertShade),
                    )}
                >
                    <div className="corner"></div>
                    <div
                        className="close x"
                        onClick={() => {
                            setIsOpen(false)
                        }}
                    ></div>
                    <div className="content">
                        <h2 className={"no-margin"}>Mission Briefing</h2>
                        <h1>{props.name}</h1>
                        <ReactSVG
                            src={props.image}
                            afterInjection={(svg) => {
                                svg.classList.add(
                                    gfc(
                                        props.alertColor,
                                        props.alertShade === "light" ? "dark" : "light",
                                    ),
                                );
                            }}
                        />
                        <div className={"pct-75"} style={{}}>
                            <p className={"small"}>{props.content}</p>
                            {props.images.length > 0 && (
                                <Flickity>
                                    {props.images.map((image: string | undefined) => (
                                        <img
                                            src={image || ""}
                                            key={image}
                                            className={"cell shadow"}
                                            alt={image || ""}
                                        />
                                    ))}
                                </Flickity>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function ButtonPanel(props: any) {
    return (
        <div className={"button-panel"}>
            <fieldset className="color-medium-light" style={{display: "block"}}>
                <legend className={"color-color-medium-light"}>{props.legend}</legend>
                <input
                    className="sol"
                    type="radio"
                    id="mission_filter_all"
                    name="mission_filter"
                    value=""
                    defaultChecked
                />
                <label htmlFor="mission_filter_all" className="light">
                    All Missions
                </label>
            </fieldset>
            <div className={"buttons"}>
                {props.items.map((item: any) => (
                    <ButtonPanelButton
                        key={item.name}
                        color={props.color}
                        shade={props.shade}
                        name={item.name}
                        image={item.image}
                        content={item.content}
                        images={item.images}
                        contentHeader={item.contentHeader}
                        alertColor={item.color}
                        alertShade={item.shade}
                    />
                ))}
            </div>
        </div>
    );
}
