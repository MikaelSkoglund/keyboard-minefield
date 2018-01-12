class GlobalEventHandler extends React.Component {
    state = {
        pressedKey: 0,
        keysPressed: []
    };

    onKeyDownMaster = e => {
        const pressedKey = e.keyCode;
        this.setState({
            pressedKey,
            keysPressed: [...this.state.keysPressed, pressedKey]
        });
    };

    componentDidMount() {
        this.refs['global'].focus();
    }
    render() {
        let children;

        children = React.Children.map(this.props.children, child =>
            React.cloneElement(child, this.state)
        );

        return (
            <div onKeyDown={this.onKeyDownMaster} ref="global" tabIndex="0">
                {children}
            </div>
        );
    }
}

export default GlobalEventHandler;
