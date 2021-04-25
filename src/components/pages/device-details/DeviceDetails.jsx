import MainLayout from '../global/MainLayout';
import DeviceDetailsComponent from './DeviceDetailsComponent';

const DeviceDetails = () => {
   return (
      <MainLayout content={<DeviceDetailsComponent/>} choice={0}/>
    );
}

export default DeviceDetails;