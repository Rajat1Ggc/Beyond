import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { RootState } from '../app/store';
import { updateDraft } from '../feature/ProfilesSlice';

const FormScreen1 = () => {
  const navigate = useNavigate();
  const formData = useSelector((state: RootState) => state.profiles.draft);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateDraft({ [name]: value }));
    }

  function formValid() {
    return formData.name.length > 0 && formData.email.length > 0 && /\S+@\S+\.\S+/.test(formData.email);
  }
  return (
    <div>
        <input type="text" placeholder="Enter Name" name='name' value={formData.name} onChange={handleChange}/><br/>
        <input type="email" placeholder="Enter Email" name='email' value={formData.email} onChange={handleChange}/><br/>
        <button onClick={() => navigate('/form2')} disabled={!formValid()}>Next</button>
    </div>
  )
}

export default FormScreen1