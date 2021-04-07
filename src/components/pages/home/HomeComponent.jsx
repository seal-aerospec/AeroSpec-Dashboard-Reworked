import LineChart from './../global/charts/LineChart';

const HomeComponent = () => {
   return ( 
      <div>
         <div>
            <LineChart data={[5, 8, 12]} />
         </div>
         
         Home Component
      </div>
    );
} 
 
export default HomeComponent;