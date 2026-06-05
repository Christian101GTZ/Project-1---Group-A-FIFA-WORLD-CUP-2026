const TeamCard = ({ team }) => {
  return (
    <div className="team-card">
      <img className="flag-img" src={team.flag} alt={`${team.name} flag`} width="80" />
      <div className="name">{team.name}</div>
      <div className="rank">FIFA #{team.rank}{team.note && ` · ${team.note}`}</div>
    </div>
  )
}
export default TeamCard
