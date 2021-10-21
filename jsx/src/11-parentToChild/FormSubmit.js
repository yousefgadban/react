import React from "react";

export default class FormSubmit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: true, first: 'a', last: 'aa', select: ''};
    }

    componentDidMount() {
        if (localStorage.getItem('first')) {
            this.setState({first: localStorage.getItem('first')});
        }
        if (localStorage.getItem('last')) {
            this.setState({last: localStorage.getItem('last')});
        }
        if (localStorage.getItem('select')) {
            this.setState({select: localStorage.getItem('select')});
        }
    }

    componentDidUpdate() {
        localStorage.setItem('first', this.state.first);
        localStorage.setItem('first', this.state.last);
        localStorage.setItem('first', this.state.select);
    }

    onContinueClicked = () => {
        console.log('onContinueClicked');
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('onSubmit');
        this.setState({display: false})
    }

    onInputChange(event) {
        console.log('0 ' + event.target.id);

        if (event.target.id == 'first') {
            this.setState({first: event.target.value})
        } else if (event.target.id == 'last') {
            this.setState({last: event.target.value})
        } else if (event.target.id == 'select') {
            this.setState({select: event.target.value})
        }
        
     }

     onInputChange1(event) {
        console.log('1 ' + event.target.id);
        this.setState({last: event.target.value})
    }

    onInputChange2(event) {
        console.log('2 ' + event.target.id);
        this.setState({select: event.target.value})
    }

    onBackClicked() {
        console.log('back');
        this.setState({display: true})
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {this.onSubmit(e)}} className='form' style={{display: this.state.display === true ? 'block' : 'none'}}>
                    <label>first: </label><input id='first' type="text" onChange={(e) => {this.onInputChange(e)}} value={this.props.first} id='first' required={true} /><br />
                    <label>last: </label><input id='last' type="text" onChange={(e) => {this.onInputChange(e)}} value={this.props.last} id='last' /><br />
                    <select id='select' onChange={(e) => {this.onInputChange(e)}}>
                        <option value='0-15'>0-15</option>
                        <option value='15-45'>15-45</option>
                        <option value='45-100'>45-100</option>
                    </select>
                    <br />
                    <input type='submit' value='continue'  />
                </form>

                <div className='review' style={{display: this.state.display === false ? 'block' : 'none'}}>
                    <p>{this.state.first}</p>
                    <p>{this.state.last}</p>
                    <p>{this.state.select}</p>
                    <input type='button' value='back' onClick={(e) => {this.onBackClicked()}} />
                    <input type='button' value='submit' />
                </div>
            </div>
            
        );
    }
}