import { Component } from "react";
import './card.styles.css';

class Card extends Component{
    render(){
        const {id, email, name} = this.props.monster;

        return(
            <div className="card-container">
                <img alt={`monster ${name}`} key={id}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>

            </div>
        )
    }
}

export default Card;