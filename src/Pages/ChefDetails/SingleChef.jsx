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
                    <div className='p-5 mt-5 lg:mt-7'>
                        <img className='mx-auto' src={chefId.image} alt="" />
                        <div className='lg:ml-36 my-5'>
                            <h1 className='text-2xl font-semibold'>Name: {chefId.name}</h1>
                            <p className='my-3'>{chefId.name} {chefId.chef_des}</p>
                            <h2>{chefId.description}</h2>
                            <h4 className='font-semibold'>I have {chefId.experience} experiences </h4>
                            <small className='lg'>Age {chefId.age}</small>

                        </div>
                        <div className='lg:flex  justify-around '>
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