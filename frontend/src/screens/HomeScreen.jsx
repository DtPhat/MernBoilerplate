import Hero from '../components/Hero';
import { useSelector } from 'react-redux';
import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
  const { userInfo } = useSelector(state => state.auth)
  return userInfo
    ? <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>MERN Authentication</h1>
          <p className='text-center mb-4'>
            A blueprint for MERN authentication wizardry, where the mystical JWT finds its sanctuary within a sacred HTTP-Only cookie. Within this enchanted realm, the almighty Redux Toolkit wields its power alongside the noble React Bootstrap library, weaving together a tapestry of seamless user experiences.          </p>
          <div className='d-flex'>
            <LinkContainer to='/profile'>
              <Button variant='primary' className='me-3'>
                Update Profile
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
    : <Hero />
};
export default HomeScreen;