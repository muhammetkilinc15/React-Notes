import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/TodoSlice'; // addTodo action'ını import edin

function CreateTodo() {
  const [taskName, setTaskName] = useState(''); // Görev adını saklamak için state
  const dispatch = useDispatch(); // Redux dispatch fonksiyonunu almak için

  // Butona tıklandığında görev ekleyen işlev
  const handleAddTodo = () => {
    if (taskName.trim()) {
      dispatch(addTodo({ name: taskName }));
      setTaskName(''); // Görev eklendikten sonra input alanını temizle
    }
  };

  return (
    <div className='row'>
      <h3 className='text-danger'>TODO APP</h3>
      <div className="col-lg-12">
        <input
          type="text"
          className='form-control'
          placeholder='Görev gir'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)} // Giriş alanındaki değişiklikleri state'e kaydet
        />
      </div>
      <div className="offset-4 mt-3 text-center">
        <button
          className="btn btn-secondary"
          onClick={handleAddTodo} // Butona tıklandığında görev ekleme işlevini çağır
        >
          Todo oluştur
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;
