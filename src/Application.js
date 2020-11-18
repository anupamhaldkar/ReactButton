import React, {Component} from 'react';

class Application extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(props, state){
        console.log("mount will",{props},{state});
    }
    componentWillMount(props, state){
        
    }
render(){
    let name = "Anupam";
    return( <div>
           <h1>Hello, {name}</h1>
            <span>This is ES6</span>
            </div>
    );
}
}

export default Application;