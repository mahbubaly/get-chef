import React, { useEffect, useState } from 'react';
import AllRecipe from '../AllRecipe';


const ViewAllRecipes = () => {
    const [recipes, setRecipe] = useState([]);

    useEffect(() => {
        fetch('https://server-site-mahbubaly.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipe(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-5'>

                {
                    recipes.map(recipe =>
                        <AllRecipe
                        
                            key={recipe.id}
                            recipe={recipe}

                        />
                    )
                }
            </div>
        </>
    );
};

export default ViewAllRecipes;