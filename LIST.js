import react from 'react';
import axios from 'axios';

export default class LIST extends react.Component{
    state = {
        persons:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const persons =res.data;
            this.setState({persons});
        })
    }
    render(){
        return(
            <ul>
                {
                    this.state.persons
                    .map(person =>
                        <li key={person.id}>{person.name}</li>
                        )
                }
            </ul>
        )
    }
}