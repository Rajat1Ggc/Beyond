import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { startNewProfile } from '../feature/ProfilesSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profiles = useSelector((state: any) => state.profiles.saved);

  const createForm = () => {
    dispatch(startNewProfile());
    navigate('/form1');
  }
  return (
    <div>
      <button onClick={createForm}>Click Me</button>
      <div>
        {profiles.map((profile: any, index: number) => (
          <div key={index}>
            <h3>{profile.name}</h3>
            <p>{profile.email}</p>
            <p>{profile.role}</p>
            <p>{profile.termsAccepted ? 'Accepted Terms' : 'Did not accept Terms'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home