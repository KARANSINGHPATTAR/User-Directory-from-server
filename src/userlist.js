import React from 'react';
import UserInfo from "./userinfo";

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={data:[]}
    }  
    
    async componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/users"
        const response=await fetch(url);
        const respData=await response.json();   
        this.setState({data:respData})
    }

    change=inx=>{
        this.props.delf(inx);
    }

    render(){
        return(
            <div>
                {this.state.data.map((obj,i)=> {
                    return ( <div>
                        < UserInfo name={obj.name} username={obj.username} email={obj.email} index={i}
                        delf={this.change} />
                    </div>
                    )}
                )}
            </div>
        )
    }
}


export default UserList