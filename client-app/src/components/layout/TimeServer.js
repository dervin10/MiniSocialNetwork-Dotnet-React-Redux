import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../styles/layout/_time.scss'
import { getTimeServer } from '../../actions/index'

class TimeServer extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getTimeServer();
    }

    render() {
        const { time } = this.props;
        return (
            <div className="time">
                TimeServer: <span>{time}</span>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        time: store.time
    }
}

export default connect(mapStateToProps,  { getTimeServer })(TimeServer);  