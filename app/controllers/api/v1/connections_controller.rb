class Api::V1::ConnectionsController < ApplicationController
  def index
    render json: current_user.interests
  end
  
  def create
    if Connection.find_by(user_id: current_user_id, interest_id: params[:interest_id]).nil?
      if params.include?(:interest_id) #individual e.g. "Add friend" link
        @new_connections = Connection.create_reciprocal_for_ids(current_user_id, params[:interest_id])
      else
        params[:user][:interest_ids].each do |i_id|
        @new_connections = Connection.create_reciprocal_for_ids(current_user_id, i_id)
        end
      end
    end
  end

  def destroy
    Connection.destroy_reciprocal_for_ids(current_user_id, params[:interest_id])
  end
end