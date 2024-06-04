import React from 'react';

import './Form.scss';

class Form extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        const formData = {
            method:'GET',
            url: 'https://swapi.dev/api/people/1',
        };
        this.props.handleApiCall(formData);
    }

    render() {
        return (
            <>
            <form onSubmit={this.handlesubmit}>
                <label>
                    <span>URL: </span>
                    <input name='url' type='text' />
                    <button type="submit">GO!</button>
                </label>
                <label className="methods">
                    <span id="get">GET</span>
                    <span id="post">POST</span>
                    <span id="put">PUT</span>
                    <span id="delete">DELETE</span>
                </label>
            </form>
            </>
        );
    }
}

export default Form;