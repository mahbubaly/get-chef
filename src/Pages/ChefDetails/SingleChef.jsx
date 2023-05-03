import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe';

const SingleChef = () => {
    const { id } = useParams()
    const chefId = useLoaderData()
    console.log(chefId);
    return (
        <>
            <div>

                <div className='container mx-auto '>
                    <div className='p-5 mt-7'>
                        <img className='mx-auto' src={chefId.image} alt="" />
                        <div className='ml-36 my-5'>
                            <h1 className='text-2xl font-semibold'>Name: {chefId.name}</h1>
                            <h2>{chefId.description}</h2>
                            <small className='lg'>Age {chefId.age}</small>
                            <h4 className='font-semibold'>I have {chefId.experience} experiences </h4>

                        </div>
                        <div className='flex justify-around '>
                            {
                                chefId.recipes.map(recipe => <Recipe
                                    key={recipe.id}
                                    recipe={recipe}
                                />)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SingleChef;