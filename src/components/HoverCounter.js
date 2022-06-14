
const HoverCounter = (props) => {
    const {count, incrementCount} = props;

    return (
        <div>
            <h3 onMouseOver={incrementCount}>Hovered {count} times</h3>
        </div>
    );
}


export default HoverCounter;