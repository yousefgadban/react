import React from 'react';
import './anim-box.css'

class AnimBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {box: 0};
        
        this.ref = React.createRef();
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({box: 2});
        }, 4000)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate ' + this.props.color);
        if (this.state.box === 1) {
            // const box = document.querySelector('.box');
            // box.classList.add('slidebox');
            // setTimeout(()=> {
            //     this.setState({box: 2});
            // }, 4000)
        }

        if (this.state.box === 2) {
            
            // const box = document.querySelector(`.${this.props.name}`);
            // console.log(box);
            // box.style.visibility = 'hidden';

            const box = this.ref.current;
            box.style.backgroundColor = 'orange';
    
        }
    }

    render() {
        return (
            <div style={{position: 'relative', height: `${this.props.size}`}}>
                <div ref={this.ref} className={ "box slidebox " + this.props.name  } style={{width: `${this.props.size}`, height: `${this.props.size}`, backgroundColor: `${this.props.color}`}}>

                </div>
            </div>
        );
    }
}

export default AnimBox;