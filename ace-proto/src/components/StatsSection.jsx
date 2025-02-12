import { useState, useEffect } from 'react'

const addSpacesToCamelCase = (str) => {
  return str
    // Add space between lower & upper letters
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Add space between number & upper letters
    .replace(/([0-9])([A-Z])/g, '$1 $2')
    // Add space between upper letter & upper letter followed by lower letter
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
}

const StatsSection = ({ title, jsonPath }) => {
  const [data, setData] = useState(null)
  const [sections, setSections] = useState([])
  const [selectedSection, setSelectedSection] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/AcePage/' + jsonPath.replace(/^\//, ''))
      .then(response => response.json())
      .then(json => {
        setData(json)
        // Get all sections except period
        const availableSections = Object.keys(json)
          .filter(key => key !== 'period' && typeof json[key] === 'object')
        setSections(availableSections)
        // Set serverStats as default, fallback to first section
        const defaultSection = availableSections.find(s => s === 'serverStats') || availableSections[0]
        setSelectedSection(defaultSection)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to load stats data')
        setLoading(false)
      })
  }, [jsonPath])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!data) return null

  return (
    <div className="stats-section">
      <h2>{title}</h2>
      <p className="stats-period">{data?.period || "No period available"}</p>
      <select 
        value={selectedSection} 
        onChange={(e) => setSelectedSection(e.target.value)}
        className="stats-dropdown"
      >
        {sections.map(section => (
          <option key={section} value={section}>
            {addSpacesToCamelCase(section)}
          </option>
        ))}
      </select>
      <div className="stats-content">
        {data[selectedSection] && (
          <ul>
            {Array.isArray(data[selectedSection]) 
              ? data[selectedSection].map((item, index) => (
                  <li key={index}>
                    {Object.entries(item).map(([key, value]) => (
                      <div key={key}>
                        <span className="stat-label">{addSpacesToCamelCase(key)}:</span>
                        <span className="stat-value">{value}</span>
                      </div>
                    ))}
                  </li>
                ))
              : Object.entries(data[selectedSection]).map(([key, value]) => (
                <li key={key}>
                  <div>
                    <span className="stat-label">{addSpacesToCamelCase(key)}:</span>
                    <span className="stat-value">{typeof value === 'object' ? JSON.stringify(value) : value}</span>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default StatsSection
