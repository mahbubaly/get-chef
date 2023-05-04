import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllRecipe = ({ recipe }) => {
    console.log(recipe);
    const notify = () => toast('Added Favorite recipe');
    return (
        <>

            <div className="card  lg:w-96 bg-base-100 shadow-xl my-6">
                <figure className="lg:px-10 px-1 pt-10">
                    <img src={recipe.image}  className="rounded-xl " />
                </figure>
                <div className=" lg:p-6 p-2 ">
                    <h1 className='text-2xl'>{recipe.name}</h1>
                    <h1 className='text-2xl font-semibold mt-2'>Ingredients: </h1>
                    <ul className='grid grid-cols-2 mt-2'>
                        {

                            recipe.ingredients.map(ingredient => <h1> {ingredient}</h1>)
                        }

                    </ul>
                    <button onClick={notify} className='bg-red-400 rounded-3xl  text-white p-2'> Add favorite
                    </button>
                    <Toaster />
                </div>

            </div>

        </>
    );
};

export default AllRecipe;