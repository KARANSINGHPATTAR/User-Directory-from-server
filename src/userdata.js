import React from 'react';
import './css.css';

class UserData extends React.Component{
    constructor(props){
        super(props)
        this.state={data:[],inx:[]}
        console.log(props)
    }

    async componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/users"
        const response=await fetch(url);
        const respData=await response.json();   
        this.setState({data:respData});
    }

    componentWillMount(){
        localStorage.getItem('count') && this.setState({
            inx: JSON.parse(localStorage.getItem('count'))
        })
    }

    render(){
        return <div>
                {this.state.data.map((obj,i)=> {
                    if(i===this.props.fetchInitialData){
                    return ( <div className="grandchild">
                        {obj.name}<br/>
                        {obj.username}<br/>
                        {obj.email}<br/>
                        Address: {obj.address.street}<br/>
                        &emsp;&emsp;{obj.address.suite}<br/>
                        &emsp;&emsp;{obj.address.city}<br/>
                        &emsp;&emsp;{obj.address.zipcode}<br/>
                        Geo: {obj.address.geo.lat},{obj.address.geo.lng}<br/>
                        &emsp;&emsp;{obj.phone}<br/>
                        &emsp;&emsp;{obj.website}<br/>
                        Company: {obj.company.name}<br/>
                        &emsp;&emsp;{obj.company.catchPhrase}<br/>
                        &emsp;&emsp;{obj.company.bs}<br/>
                    </div>
                    )}}
                )}
            </div>
    }
}

export default UserData