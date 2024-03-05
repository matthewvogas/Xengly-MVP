import CheckoutOrganism from '../components/organisms/checkout/checkout'
import { useParams } from 'react-router-dom';

const Checkout = () => {
  const { username } = useParams();
  return <CheckoutOrganism username={username} />;
};

export default Checkout;