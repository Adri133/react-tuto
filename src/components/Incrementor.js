import React from 'react';

class Incrementor extends React.Component {
    items = ['item1', 'item2']
    lis = this.items.map((e, i) => <li key={i}>{e}</li>)

    constructor(props) {
        super(props)
        this.state = {n: 0}
    }

    render () {
        return <>
            <h2>{this.props.name}</h2>
            <p>{this.props.children}</p>
            <div>Valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button></div>
            {this.lis}
        </>
    }

    increment () {
        this.setState((state, props) => ({n: state.n  + 1 }))
    }
}

export default Incrementor;