import React from 'react';
import NavMenu from './NavMenu';
import './ContentWrapper.css';

class ContentWrapper extends React.Component {

    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        return (
            <div className={"ContentWrapper-container"}>
                <div className={"ContentWrapper-bgTextContainer"}>
                    <span className={"ContentWrapper-bgText"}>STEFAN</span>
                    <span className={"ContentWrapper-bgTextRight"}>KOWAL</span>
                </div>
                <div className={"ContentWrapper-middleColumn"}>
                    <NavMenu />
                    {this.props.content}
                </div>
            </div>
            
        );
    }
}

export default ContentWrapper;