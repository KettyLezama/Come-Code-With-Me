class Api::V1::ConnectionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  
  def index
    current_user_connections = current_user.connections.order("created_at desc")
    current_user_interests = current_user_connections.map { |connection| User.find(connection.interest_id) }

    current_user_messages = Connection.find_by(user_id: current_user.id).messages

    render json: { userConnections: current_user_connections, userInterests: current_user_interests, userMessages: current_user_messages }
  end
  
  def create
    current_user_id = current_user.id
    interest_id = params[:user_id].to_i
    existing_connection = Connection.find_by(user_id: current_user_id, interest_id: interest_id)

    if existing_connection.nil?
      new_connection = Connection.create_reciprocal_for_ids(current_user_id, interest_id)
      render json: { notice: "Successfully created bi-directional connection.", connected: true, connection_id: new_connection.id }
    else
      render json: { notice: "Current user already connected to interest.", connected: true, connection_id: existing_connection.id }
    end
  end

  def destroy
    current_user_id = current_user.id
    interest_id = params[:user_id].to_i

    Connection.destroy_reciprocal_for_ids(current_user_id, interest_id)
    render json: { notice: "Mutual connection destroyed." }
  end
end