import React from 'react';
export class ClassCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      count: 0,
      value: "значение в инпуте",
    };

		this.increment = this.increment.bind(this);
		this.decriment = this.increment.bind(this);
}

	increment() {
		this.setState({count: this.state.count + 1})
	}

	decriment() {
		this.setState({count: this.state.count - 1})
	}

	render() {
		return (
      <div>
				<h2>Классовый компонент:</h2>
        <h1>Лайки: {this.state.count}</h1>
				<h1>{this.state.value}</h1>
				<input
					type="text"
					value={this.state.value}
					onChange={(e) => this.setState({value: e.target.value})}
				/>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decriment}>Decrement</button>
      </div>
    );
	}
}
