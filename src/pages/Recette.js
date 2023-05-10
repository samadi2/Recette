// import Titre from "../components/Titre";
import { useState} from "react";
import {recipes} from '../components/recettes.js';
import Titre from '../components/Titre.jsx';



function Recette() {
    const [searchTerm, setSearchTerm] = useState("");

    const recette = recipes.filter((food) => {
        return food.name.includes(searchTerm)
    });
    return (
        <div>
            <Titre text="Nos Recettes" />
            <div className="searchbar">
                <input className="recherche" type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Rechercher"
                    onChange={e => {setSearchTerm(e.target.value)}}
                />
            </div>
            <div className="Block">
            {recette.length > 0 ? 
            (
            recette.map((food) => 
                { 
                    return(
                        <div className="Block2">
                            <div>
                                <img className="image2" src={require(`../JSON_img/img_recettes/${food.name}.jpg`)} alt={food.nom}/>
                            </div>
                            <h3>{food.name}</h3>
                            <p>{food.description} </p>
                            {
                                food.ingredients.map(ingre => {
                                    return (
                                        <div>
                                            <p> ingredient : {ingre.ingredient} &emsp;  Quantité: {ingre.quantity} &emsp; Unité: {ingre.unit}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    );
                })
            ):
            (

                <p className="no-results">Aucune recette trouvée.</p>
            )
            }
        </div>
    </div>     

)

}
        


export default Recette ;





