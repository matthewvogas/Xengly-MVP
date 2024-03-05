import XenglerOrganism from '../components/organisms/creator/creator'
import { useParams } from 'react-router-dom';

const Xengler = () => {

  const { username } = useParams();

  return <XenglerOrganism creator={username} />;
};

export default Xengler;