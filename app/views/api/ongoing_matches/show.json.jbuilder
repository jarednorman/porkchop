json.match do
  json.id @match.to_param

  json.home_score @match.home_score
  json.home_player_name @match.home_player.try(:name)
  json.home_player_avatar_url @match.home_player.try(:avatar_url)

  json.away_score @match.away_score
  json.away_player_name @match.away_player.try(:name)
  json.away_player_avatar_url @match.away_player.try(:avatar_url)

  json.home_player_service @match.home_player_service?
  json.finished @match.finished?
  json.finalized @match.finalized?
  json.deleted !Match.exists?(@match.id)
end