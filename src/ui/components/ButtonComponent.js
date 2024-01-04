import Button from 'react-bootstrap/Button';
import '../utils/styles/components_styles/button.css';
import TextComponent from './TextComponent';

function ButtonComponent(props) {
    const { text, backdropFilter, borderBottom = "3px solid", border = "1px solid", gap = "8px", height = '40px', minWidth = "32px", backgroundColor = "#f4c02f", color = '#2B2B2B', padding = "8px", borderColor = "rgba(43, 43, 43, 0.12)", icon, className } = props

    const buttonStyle = {
        height: height,
        backgroundColor: backgroundColor,
        color: color,
        padding: padding,
        minWidth: minWidth,
        gap: gap,
        border: border,
        borderBottom: borderBottom,
        borderColor: borderColor,
        backdropFilter: backdropFilter,
    };

    return <>
        <Button className={`${className}`} id="button-global-style" style={buttonStyle}>
            {icon && <img src={icon} alt="Icon" />} {text !== "" && <TextComponent text={text} color={color} className="orbitron-extra-bold-sm" width="auto" />}
        </Button>
    </>
}

export default ButtonComponent;