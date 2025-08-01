import React from "react";

import { useForm } from "react-hook-form";

const Form = ({formData,setFormData}) => {
  const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isValid },
    } = useForm({
    mode: "all", 
  });
    
    console.log(isValid)
    const formSubmit = (data) => {
        setFormData([
            ...formData,
            data,
        ])
        reset()
    }
    console.log(formData)
 
  return ( <div className="w-full h-full flex flex-col  ">
  


  <div className="w-full h-full p-4">



   <form className="flex flex-col gap-4 " onSubmit={handleSubmit(formSubmit)}>
    <input className="border p-2 " {...register("productname",{required : true})} type="text" placeholder="ProductName" />
    {errors.productname ? <p>Enter your productName</p> : ''}

    <input className="border p-2 " {...register("description",{required : true})}  type="text" placeholder="Description" />
    {errors.description ? <p>Enter your description</p> : ''}

    <input className="border p-2 " {...register("price",{required : true})}  type="number" placeholder="Price" />
    {errors.price ? <p>Enter your price</p> : ''}

    <input className="border p-2 " {...register("imageurl",{required : true})}  type="url" placeholder="ImageUrl" />
    {errors.imageurl ? <p>Enter your imageUrl</p> : ''}

    <input className="border p-2 " disabled={!isValid} type="submit" value="Add Product" />
   </form>
  </div>



  </div>
  
)}
export default Form;
