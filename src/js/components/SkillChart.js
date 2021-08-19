// svg based circle
// https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705

// css based circle
// http://circle.firchow.net/


const SkillChart = (props) => {
  return (
    <div>
      <svg viewBox="0 0 36 36" className="circular-chart orange">
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={props.percentage + ", 100"}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">
          {props.percentage}%
        </text>
      </svg>
    </div>
  )
}

export default SkillChart
