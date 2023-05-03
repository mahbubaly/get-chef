import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Recipe = ({ recipe }) => {
    console.log(recipe);

    const notify = () => toast('Added Favorite recipe');
    return (
        <>
            <div>


                <div className="card  w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={recipe.image} alt="Shoes" className="rounded-xl " />
                    </figure>
                    <div className=" p-6">

                        <h1 className='text-2xl'>{recipe.name}</h1>
                        <h2>{recipe.description}</h2>
                        <h1 className='text-2xl font-semibold mt-2'>Ingredients: </h1>
                        <ul className='grid grid-cols-2 mt-2'>
                            {

                                recipe.ingredients.map(ingredient => <h1> {ingredient}</h1>)
                            }

                        </ul>
                        <div className='flex justify-between my-3'>
                            <h1 className='text-2xl p-2  rounded-2xl'>Views: {recipe.views} </h1>
                            <h1 className='text-2xl p-2  rounded-2xl'>Likes: {recipe.views} </h1>
                        </div>

                        <button onClick={notify} className='bg-red-400 rounded-3xl  text-white p-2'> Add favorite
                        </button>
                        <Toaster />
                    </div>

                </div>
            </div>

        </>
    );
};

export default Recipe;