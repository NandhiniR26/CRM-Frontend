
// import { BarChart } from '@mui/x-charts/BarChart';
// import { PieChart } from '@mui/x-charts/PieChart';


// const Dashboard = () => {
//   return (
//     <>
    
// {/* <div><h1> <font size="7" color="yellow">dashboard</font></h1></div> */}
//     <div id="dashboardChart">
//      <div id="chart1">
//      <BarChart
//       xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] }]}
//       series={[{ data: [34,50,10,55,77,88,44,33,33,67,44,46],label:"sales performance" }]}
//       width={550}
//       height={300}
//     />
//      </div>
//      <div id="chart2">
//      <BarChart
//       xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] }]}
//       series={[{ data: [34,50,10,55,77,88,44,33,33,67,44,46],label:"sales performance" }]}
//       width={550}
//       height={300}
//     />
//      </div>
//       <div id="barChart">
//       <BarChart
//       xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] }]}
//       series={[{ data: [34,50,10,55,77,88,44,33,33,67,44,46],label:"sales performance" }]}
//       width={550}
//       height={300}
//     />
//      </div>
//      <div id="chart4">
//      <PieChart
//   colors={['red', 'blue', 'green']} // Use palette
//   series={[
//     {
//       data: [
//         { value: 10, color: 'orange' }, // Use color property
//         // ...
//       ],
//     },
//   ]}
// />

 

//     </div>
//     </div>
      
//     </>      
//     )
// }

// export default Dashboard


import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import Header from './Header';

function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <>
    <main className='main-container' style={{backgroundColor:"white"}}>
      <Header></Header>
      <br></br>
        <div className='main-title'>
            

            <h3>DASHBOARD</h3>
            
            {/* BsFillGrid3X3GapFill  */}
            {/* BsFillBellFill */}
        </div>
        <br></br>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h4>BUDGET</h4>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>$24K</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>TOTAL CUSTOMERS</h4>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>15</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>SALES PROGRESS</h4>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>45%</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>TOTAL PROFIT</h4>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>55%</h1>
            </div>
        </div>
    <br></br>
    
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
           
     {/* <BarChart
      xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] }]}
      series={[{ data: [34,50,10,55,77,88,44,33,33,67,44,46],label:"sales performance" }]}
      width={550}
      height={300}
    /> */}

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
    <div id="rightSide"></div>
    </>
  )
}

export default Home 

