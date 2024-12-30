import React from 'react'

export const ResponsiveContainer = ({ children, width = '100%', height = 300 }) => {
  return (
    <div style={{ width, height, position: 'relative' }}>
      {children}
    </div>
  )
}

export const BarChart = ({ data, children }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      {React.Children.map(children, child => 
        React.cloneElement(child, { data })
      )}
    </svg>
  )
}

export const XAxis = ({ dataKey, stroke = '#888888', fontSize = 12, tickLine = true, axisLine = true }) => {
  return (
    <g className="x-axis" transform="translate(0, 95)">
      <line x1="0" y1="0" x2="100" y2="0" stroke={stroke} />
      <text x="10" y="15" fontSize={fontSize} fill={stroke}>Jan</text>
      <text x="50" y="15" fontSize={fontSize} fill={stroke}>Jun</text>
      <text x="90" y="15" fontSize={fontSize} fill={stroke}>Dec</text>
    </g>
  )
}

export const YAxis = ({ stroke = '#888888', fontSize = 12, tickLine = true, axisLine = true, tickFormatter }) => {
  return (
    <g className="y-axis">
      <line x1="0" y1="0" x2="0" y2="95" stroke={stroke} />
      <text x="-25" y="20" fontSize={fontSize} fill={stroke} transform="rotate(-90, -25, 20)">
        {tickFormatter ? tickFormatter(5000) : '5000'}
      </text>
      <text x="-25" y="80" fontSize={fontSize} fill={stroke} transform="rotate(-90, -25, 80)">
        {tickFormatter ? tickFormatter(1000) : '1000'}
      </text>
    </g>
  )
}

export const Bar = ({ dataKey, fill = '#000', radius = 0 }) => {
  
  return (
    <g className="bars">
      <rect x="10" y="20" width="10" height="75" fill={fill} rx={radius} ry={radius} />
      <rect x="30" y="40" width="10" height="55" fill={fill} rx={radius} ry={radius} />
      <rect x="50" y="10" width="10" height="85" fill={fill} rx={radius} ry={radius} />
      <rect x="70" y="30" width="10" height="65" fill={fill} rx={radius} ry={radius} />
      <rect x="90" y="50" width="10" height="45" fill={fill} rx={radius} ry={radius} />
    </g>
  )
}

