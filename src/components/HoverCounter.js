import react from "react";

class HoverCounter extends react.Component {

    state = {
        count: 0,
    };

    incrementCount = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    };

    render() {

        const {count} = this.state;

        return (
                <h3 type="button" onMouseOver={this.incrementCount}>Hovered {count} times</h3>

        );
    }
}

export default HoverCounter;