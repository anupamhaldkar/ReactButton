import React, {Component} from 'react';

class Application extends Component {
    constructor(props){
        super(props);

        this.state={
            count:0
        }
    }
    


render(){
    let {count} = this.state ;
    return( <div>
           <h1>You clicked the Button {count} times</h1>
            <span>
                <button>Click Me📣</button>
            </span>
            </div>
    );
}
}

export default Application;