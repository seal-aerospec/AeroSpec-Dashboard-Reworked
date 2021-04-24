import MainLayout from '../global/MainLayout';
import HomeLayout from './HomeLayout';

const Home = () => {
   return (
      <MainLayout content={<HomeLayout />} choice={0}/>
    );
}

export default Home;