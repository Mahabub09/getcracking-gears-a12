import React from 'react';
import { useForm } from "react-hook-form";

const AddTools = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/tool`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div>
            <h1 className='text-3xl text-neutral text-center my-8 underline underline-offset-8'>Add Tools </h1>
            <form className='flex flex-col w-50 mx-auto   space-y-3' onSubmit={handleSubmit(onSubmit)}>
                <input className='border border-dark p-2 rounded' placeholder='Tools Name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Image URL' className='border border-dark py-2 rounded' {...register("img")} />

                <input className='border border-dark p-2 rounded' placeholder='Minimum Order' type="number" {...register("min_order",)} />
                <input className='border border-dark p-2 rounded' placeholder='Price Per Unit' type="number" {...register("price",)} />
                <input className='border border-dark p-2 rounded' placeholder='Available Quantity' type="number" {...register("available_quantity",)} />
                <textarea className='border border-dark p-2 rounded' placeholder='Description' {...register("short_description",)} />
                <input className='btn btn-primary w-25 mx-auto' type="submit" value="Add Tools" />
            </form>

        </div>
    );
};

export default AddTools;