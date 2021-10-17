const Button = (props) => {
    let {text, isBold} = props;
    return(
        <input type="Button" value={text} style={{fontWeight: isBold}} />
    );
}

export default Button;