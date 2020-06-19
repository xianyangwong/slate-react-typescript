import React, { Component } from "react";

class ExampleComponent extends Component<{shopname: string}> {

    render() {
        const { shopname } = this.props;
        return (
            <div>
                Store name is: {shopname}
            </div>
        );
    }
}
export default ExampleComponent
