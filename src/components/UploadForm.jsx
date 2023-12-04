import { useForm } from 'react-hook-form';

export default function UploadForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('image', data.image[0]);
    formData.append('owner', data.owner);

    const res = await fetch('http://localhost:8765/product', {
      method: 'POST',
      body: formData,
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='name'>Product Name: </label>
      {/* <input type='text' name='name' id='name' /> */}
      <input type='text' {...register('name', { required: true })} />
      <label htmlFor='price'>Product Price</label>
      <input type='number' {...register('price', { required: true, min: 0 })} />

      <label htmlFor='image'>Product Image: </label>
      <input type='file' {...register('image', { required: true })} />

      <label htmlFor='owner'>Product Owner</label>
      <input type='text' {...register('owner', { required: true })} />
      <button>Submit</button>
    </form>
  );
}
