import React, { Component } from 'react';

import PropTypes from 'prop-types'

class Grandfather extends Component {
    static childContextTypes = {
        color:PropTypes.string.isRequired
    }
    getChildContext(){
        return {
            color:'red'
        }
    }

    render(){
        return (
            <Father/>
        )
    }
}

class Child extends Component {
    static contextTypes = {
        color:PropTypes.string
    }
    render(){
        return (
            <p style={{color:this.context.color}}>我是爷爷</p>
        )
    }
}

class Father extends Component{
    render(){
        return (
            <Child/>
        )
    }
}

export default Grandfather