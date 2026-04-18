import React from "react";

interface LanguageSwitchItemProps {
    content: string;
    flagIconSrc: string;
    altText: string;
    onClickHandler: () => void;
    className: string;
}


const LanguageSwitchItem:React.FC<LanguageSwitchItemProps> = ({content,flagIconSrc,altText,onClickHandler,className}) => {
    return (
        <li>
            <button className={className} style={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                alignItems: "center"
            }} onClick={() => onClickHandler()}>
                <img
                    src={flagIconSrc}
                    alt={altText}
                    style={{width: '20px', marginRight: '5px'}}
                />
                {content}
            </button>
        </li>
    );
}

export default LanguageSwitchItem;