import React, {Component} from 'react';

class Application extends Component {
    constructor(props){
        super(props);

        this.state={
            count:0
        }
    }
    handleClick = () => {
        console.log("Clicked");
    }


render(){
    let {count} = this.state ;
    return( <div>
           <h1>You clicked the Button {count} times</h1>
            <span>
                <button onClick={(e)=>this.handleClick()}>Click Me📣</button>
            </span>
            </div>
    );
}
}

export default Application;