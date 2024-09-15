
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
      name: 'J',
      Sales:  3200,
      Stock: 4000,
      // amt: 2400,
    },
    {
      name: 'F',
      Sales: 1500,
      Stock: 3000,
      // amt: 2210,
    },
    {
      name: 'M',
      Sales: 4800,
      Stock: 5000,
      // amt: 2290,
    },
    {
      name: 'A',
      Sales: 4000,
      Stock: 3908,
      // amt: 2000,
    },
    {
      name: 'M',
      Sales: 6000,
      Stock: 4800,
      // amt: 2181,
    },
    {
      name: 'J',
      Sales: 7500,
      Stock: 3800,
      // amt: 2500,
    },
    {
      name: 'J',
      Sales: 5000,
      Stock: 4300,
      // amt: 2100,
    },
    {
      name: 'A',
      Sales: 5500,
      Stock: 4300,
      // amt: 2100,
    },
    {
      name: 'S',
      Sales: 6700,
      Stock: 4300,
      // amt: 2100,
    },
    {
      name: 'O',
      Sales: 6900,
      Stock: 4300,
      // amt: 2100,
    },
    {
      name: 'N',
      Sales: 8200,
      Stock: 4300,
      // amt: 2100,
    },
    {
      name: 'D',
      Sales: 9410,
       Stock: 4300,
      // amt: 2100,
    },
  ];
      const data1 = [
        {
          name: 'J',
          Revenue: 3000,
          Productivity:4000,
          // Sales:  3200,
          // Stock: 4000,
          // amt: 2400,
        },
        {
          name: 'F',
          Revenue: 2500,
          Productivity:7000,
          // Sales: 1500,
          // Stock: 3000,
          // amt: 2210,
        },
        {
          name: 'M',
          Revenue: 4500,
          Productivity:6500,
          // Sales: 9800,
          // Stock: 5000,
          // amt: 2290,
        },
        {
          name: 'A',
          Revenue: 3800,
          Productivity:5000,
          // Sales: 4000,
          // Stock: 3908,
          // amt: 2000,
        },
        {
          name: 'M',
          Revenue: 5500,
          Productivity:9000,
          // Sales: 6000,
          // Stock: 4800,
          // amt: 2181,
        },
        {
          name: 'J',
          Revenue: 4900,
          Productivity:6900,
          // Sales: 7500,
          // Stock: 3800,
          // amt: 2500,
        },
        {
          name: 'J',
          Revenue: 6900,
          Productivity:7700,
          // Sales: 5000,
          // Stock: 4300,
          // amt: 2100,
        },
        {
          name: 'A',
          Revenue: 9800,
          Productivity:5900,
          // Sales: 5500,
          // Stock: 4300,
          // amt: 2100,
        },
        {
          name: 'S',
          Revenue: 5800,
          Productivity:7900,
          // Sales: 6700,
          // Stock: 4300,
          // amt: 2100,
        },
        {
          name: 'O',
          Revenue: 7800,
          Productivity:8000,
          // Sales: 6900,
          // Stock: 4300,
          // amt: 2100,
        },
        {
          name: 'N',
          Revenue: 5600,
          Productivity:9000,
          // Sales: 8200,
          // Stock: 4300,
          // amt: 2100,
        },
        {
          name: 'D',
          Revenue: 9900,
          Productivity:10000,
          // Sales: 9410,
          //  Stock: 4300,
          // amt: 2100,
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
                <Bar dataKey="Sales" fill="#8884d8" />
                 <Bar dataKey="Stock" fill="#82ca9d" /> 
                </BarChart>
            </ResponsiveContainer>
           
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data1}
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
                <Line type="monotone" dataKey="Revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Productivity" stroke="#82ca9d" />
                </LineChart>
              
            </ResponsiveContainer>

        </div>
    </main>
    <div id="rightSide"></div>
    </>
  )
}

export default Home 

