const MatchCard = ({ match, flagOf, updateScore }) => {
  return (
    <div className="match-card">
      <div className="match-meta">
        Matchday {match.matchday} · {match.date} · {match.time}
      </div>

      <div className="scoreline">
        <span className="team-side home">
          {match.home} <img className="flag-sm" src={flagOf(match.home)} alt="" width="32" />
        </span>
        <span className="score">
          {/* typing in these boxes calls updateScore, which updates state in App */}
          <input
            type="number"
            min="0"
            className="score-input"
            value={match.homeScore ?? ""}
            onChange={(e) => updateScore(match.id, "homeScore", e.target.value)}
          />
          :
          <input
            type="number"
            min="0"
            className="score-input"
            value={match.awayScore ?? ""}
            onChange={(e) => updateScore(match.id, "awayScore", e.target.value)}
          />
        </span>
        <span className="team-side away">
          <img className="flag-sm" src={flagOf(match.away)} alt="" width="32" /> {match.away}
        </span>
      </div>

      <div className="match-venue"> {match.stadium} · {match.city}</div>
    </div>
  )
}

export default MatchCard
