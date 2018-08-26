import React, { Component } from 'react';

import PropTypes from 'prop-types'




let odiv = React.createElement('div',{
    title:'hello ly'
},'点我')

let odiv2 = <div>我就是这个强大</div>

function Welcome(props) {
    return (
        <div>
            欢迎{props.name}
        </div>
    )
}

class Ly extends Component {
    constructor(props){
        super(props)
        this.state = {
            age:18,
            name:'ly',
            sex:'男'
        }
    }
   static propTypes = {
        className:PropTypes.string.isRequired
    }
    componentWillMount(){
       
    }
    render(){
        return (
         <div>
             <div>{odiv}</div>
             {odiv2}
             <Welcome name={this.state.name}/>
             我叫{this.state.name},今年{this.state.age}
         </div>
        )
    }
}

export default Ly;