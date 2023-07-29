// import React from 'react'
// import "./circularProgressBar.scss"

// const CircularProgressBar = () => {
//   return (
//     <div className='CircularProgressBar'>
//              <div className='outer'>
//                 <div className='inner'>
//                     <div id='number'>
//                         65%
//                     </div>
//                 </div>
//              </div>


//     </div> 
//   )
// }

// export default CircularProgressBar



import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie, VictoryLabel } from 'victory';
import "./circularProgressBar.scss"

class CircularProgressBar extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 25,
      data: this.getData(0),
    };
  }

  componentDidMount() {
    let percent = 25;
    this.setStateInterval = window.setInterval(() => {
      percent += Math.random() * 25;
      percent = percent > 100 ? 0 : percent;
      this.setState({
        percent,
        data: this.getData(percent),
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: {
                fill: ({ datum }) => {
                  const color = datum.y > 30 ? 'green' : 'red';
                  return datum.x === 1 ? color : 'transparent';
                },
              },
            }}
          />
          <VictoryLabel
            textAnchor="middle"
            verticalAnchor="middle"
            x={200}
            y={200}
            text={`${Math.round(this.state.percent)}%`}
            style={{ fontSize: 45 }}
          />
        </svg>
      </div>
    );
  }
}

const mountNode = document.getElementById('root');

ReactDOM.render(<CircularProgressBar />, mountNode);

export default CircularProgressBar;
