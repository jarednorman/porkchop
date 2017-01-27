class Api::V2::MatchesController < ApplicationController
  before_action :load_table

  def ongoing
    @match = @table.ongoing_match
    authorize! :read, @match
    if @match
      render json: @match, serializer: OngoingMatchSerializer, include: [
        :home_player,
        :away_player,
        {
          upcoming_matches: [
            :home_player,
            :away_player
          ]
        }
      ]
    else
      render json: nil
    end
  end

  private

  def load_table
    @table = Table.find(params[:table_id])
  rescue ActiveRecord::RecordNotFound
    render json: { data: nil }, status: :not_found
  end
end
