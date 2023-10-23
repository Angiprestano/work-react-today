
import './Style/But-Component.css'

const ButtonComponent = function(props) {
    return(
        <button className="Button">{props.buttonText}</button>
    )
}

export default ButtonComponent 