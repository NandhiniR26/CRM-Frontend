
import { BarChart } from '@mui/x-charts/BarChart';



const Dashboard = () => {
  return (
    <>
    
{/* <div><h1> <font size="7" color="yellow">dashboard</font></h1></div> */}
    <div id="dashboard">
     
      <div id="barChart">
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] }]}
      series={[{ data: [34,50,10,55,77,88,44,33,33,67,44,46],label:"sales performance" }]}
      width={700}
      height={300}
    />
     </div>
  
</div>
  
    </>
      
    )
}

export default Dashboard