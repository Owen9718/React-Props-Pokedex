import React from "react";
import Pokecard from "./pokecard";

function PokeDex(props) {
    return <div>{props.props.map(p => (
        <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
        />
    ))}</div>;
}

export default PokeDex;

