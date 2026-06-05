const StandingsTable = ({ standings }) => {
  return (
    <table className="standings">
      <thead>
        <tr><th>#</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr>
      </thead>
      <tbody>
        {standings.map((row, i) => (
          <tr key={row.code}>
            <td>{i + 1}</td>
            <td className="team-cell">
              <img src={row.flag} alt="" width="22" /> {row.name}
            </td>
            <td>{row.played}</td><td>{row.win}</td><td>{row.draw}</td>
            <td>{row.loss}</td><td>{row.gd}</td><td className="pts">{row.pts}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StandingsTable