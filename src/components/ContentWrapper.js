import React from 'react';
import NavMenu from './NavMenu';

class ContentWrapper extends React.Component {

    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        return (
            <React.Fragment>
                <div></div>
                <div className={"ContentWrapper-middleColumn"}>
                    <NavMenu />
                    {this.props.content}
                </div>
            </React.Fragment>
            
        );
    }
}

export default ContentWrapper;