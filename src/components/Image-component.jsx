
import './ImageComponent.css'
import { Component } from "react"


class Image extends Component {
    render() {
        return <img className="ImgCute" src= {this.props.MyImage} alt={this.props.MyAlt} />;
    }
}

export default Image