import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitProfile, updateDraft } from '../feature/ProfilesSlice';

const FormScreen2 = () => {
    const navigate = useNavigate();
    const formData = useSelector((state: any) => state.profiles.draft);
    const dispatch = useDispatch();


    const handleSubmit = () => {
        // Handle form submission logic here
        dispatch(submitProfile());
         navigate('/');
    }

    const handleBack = () => {
        navigate('/form1');
    }

    function formValid() {
        return formData.role.length > 0 && formData.termsAccepted;
    }

  return (
    <div>
        <select name="role" value={formData.role} onChange={(e) => dispatch(updateDraft({ role: e.target.value }))}>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
        </select>
        <input type="checkbox" name="terms" checked={formData.termsAccepted} onChange={(e) => dispatch(updateDraft({ termsAccepted: e.target.checked }))} />
        <label htmlFor="terms">Accept Terms and Conditions</label>
        <button onClick={handleBack}>back</button>
        <button onClick={handleSubmit} disabled={!formValid()}>Submit</button>
    </div>

)};

export default FormScreen2