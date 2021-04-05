import MainLayout from '../global/MainLayout';
import SettingsComponent from './SettingsComponent';

const Settings = () => {
   return ( 
      <MainLayout content={<SettingsComponent />} />
    );
}
 
export default Settings;