import React from 'react';
import Spinner from '../Spinner/Spinner';

class Circle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {state: 0, color: 'pink'};
        
        this.ref = React.createRef();
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({state: ++this.state.state, color: 'red'});
        }, 1000)
        setTimeout(()=> {
            this.setState({state: ++this.state.state, color: 'blue'});
        }, 2000)
        setTimeout(()=> {
            this.setState({state: ++this.state.state, color: 'green'});
        }, 3000)
        setTimeout(()=> {
            this.setState({state: ++this.state.state, color: 'black'});
        }, 4000)
        setTimeout(()=> {
            this.setState({state: ++this.state.state});
        }, 5000)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate ');


        if (this.state.box === 2) {

            // const box = this.ref.current;
            // box.style.backgroundColor = 'orange';
    
        }
    }

    render() {
        return (
            <div style={{position: 'relative', height: `${this.props.size}`}}>
                <div ref={this.ref} style={{width: '100px', height: '100px', backgroundColor: `${this.state.color}`, borderRadius: this.state.state == 5 ? '50%' : '0%' }}>

                </div>
                
            </div>
        );
    }
}

export default Circle;