import MainLayout from '../global/MainLayout';
import HomeComponent from './HomeComponent';
import { useParams } from 'react-router-dom';
const Home = () => {
   const { category, time } = useParams();
   return (
      <MainLayout content={<HomeComponent category={category} time={time}/>} choice={0}>
      </MainLayout>
    );
}

export default Home;