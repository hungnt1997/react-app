import React, { Component } from 'react';

class NameForm extends React.Component {
    state = {
        value: ''
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    handleSubmit = (event) => {
        alert("A name was submiited:" + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                </label>
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}
export default NameForm