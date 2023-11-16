import react from "react";
import axios from 'axios';

export default class Test extends react.Component{
    state = {content:null}

    componentDidMount(){
        axios.get("/home")
        .then(res=>res.data)
        .then(res => {
            this.setState({
                content:res
            })
        })
    }
    render(){
        return <h1>{this.state.content}</h1>
    }
}