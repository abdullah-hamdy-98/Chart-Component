import './App.css';
import HighChart3DComponent from './component/chartComponent';
import StructureChartComponent from './component/StructureChartComponent'

const data = await fetch(
  'http://localhost:6060/categ'
).then(response => response.json());


const chartData = Object.entries(data).map(([Categ, Emp]) => ({
  name: Emp.Categ,
  y: Emp.Emp
}));

// Chart Types
let chartType = {
  '3d': ['column', 'pie', 'bar'],
  'reg': ['line', 'pie', 'spline']
}
// 3D Config
let enable3D = true
let chart3DOptions = { alpha: 40, beta: 0, depth: 50 }

// Text Config
let fontSize = { titel: '14px', subTitle: '10px' }
let title = 'ManPower Cataegory'
let subTitle = 'Admin, BlueCollar, Eng'
let seriesTitle = 'Employee Count'

// Colors
let colorTheme = {
  colorful: ['#8a2be2', '#9932cc', '#4b0082', '#483d8b', '#6a5acd'],
  blackWhite: ['#8a8a8a', '#999999', '#4b4b4b', '#484848', '#6a6a6a']
}



function App() {
  return (
    <div className="chart-3" >
      <HighChart3DComponent
        // Data
        chartData={chartData}
        // Chart Type
        chartType={chartType['3d'][0]}
        innerSize={150}
        // Configuration for 3D Options
        chartOptions={{
          enabled: enable3D,
          alpha: chart3DOptions.alpha,
          beta: chart3DOptions.beta
        }}
        depth={chart3DOptions.depth}
        // Colors
        colorTheme={colorTheme.blackWhite}
        // Text Config
        titleSize={fontSize.titel}
        title={title}
        subTitleSize={fontSize.subTitle}
        subTitle={subTitle}
        seriesTitle={seriesTitle}
      />
    </div>
  );
}

export default App;
