import React, { Component } from 'react';


type Props = {
    title: string;
}

type State = {
    status: string;
}

// Types VS Interface
// interface state {

// }

// <Props> is a generic
class BigC extends Component<Props, State> {
    render() {
        return (
            <div>
                <h1>I am a cc</h1>
            </div>
        );
    }
}

export default BigC;