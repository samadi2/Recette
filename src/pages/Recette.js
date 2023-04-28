// import Titre from "../components/Titre";
import { useState, useEffect} from "react";
import {recipes} from '../components/recettes.js';
import Titre from '../components/Titre.jsx';


function Recette() {
    
    const [searchTerm, setSearchTerm] = useState("");


const handleSearchTerm = (e) => {
    // console.log(e.target.value);
    let value = e.target.value;
    setSearchTerm(value);
}
    return (
        <Titre text="Nos recettes"/>,

    

   
        <>
            <div className="searchBar">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Rechercher"
                    onChange={handleSearchTerm}
                    />
            </div>
            <div className="searchresult">
                {recipes.filter((food) => {
                    // console.log(recipes.filter());
                    return food.name.toLowerCase().includes(searchTerm.toLowerCase());
                }).map((food) => {

                    return(
                        <div>
                        <div>
                        <img src={require(`../JSON_img/img_recettes/${food.name}.jpg`)} alt={food.nom}/>
                        

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
                })}

            </div>
        </>
    );
}
        


export default Recette ;

// function Search(){


//     const [searchTerm, setSearchTerm] = useState("");


//     const handleSearchTerm = (e) => {
//         console.log(e.target.value);
//         let value = e.target.value;
//         setSearchTerm(value);
//     }

//     console.log(searchTerm);

//     return(
//         <>
//             <div className="searchBar">
//                 <input
//                     type="text"
//                     name="searchBar"
//                     id="searchBar"
//                     placeholder="Rechercher"
//                     onChange={handleSearchTerm}
//                     />
//             </div>
//             <div className="searchresult">
//                 {recipes.filter((food) => {
//                     return food.name.toLowerCase().includes(searchTerm.toLowerCase());
//                 }).map((food) => {
//                     return(
//                         <div>
//                         <div>
//                         <img src={require(`../JSON_img/img_recettes/${food.name}.jpg`)} alt={food.nom}/>
                        

//                         </div>
//                         <h3>{food.name}</h3>
//                         <p>{food.description} </p>
//                             {
//                                 food.ingredients.map(ingre => {
//                                     return (
//                                         <div>
//                                             <p> ingredient : {ingre.ingredient} &emsp;  Quantité: {ingre.quantity} &emsp; Unité: {ingre.unit}</p>
//                                         </div>
//                                     )
//                                 })
//                             }
//                     </div>
//                     );
//                 })}

//             </div>
//         </>
//     );
// }

// export default Search;