class Api::V1::MessagesController < ApplicationController
  # protect_from_forgery unless: -> { request.format.json? }
  
  # def index
  #   # connection = params[:connection_id]
  #   # sender = User.find(connection.sender_id)
  #   # render json: { messages: connection.messages.order("created_at"), sender: sender }
  # end
  
  # def create
  #   sender_id = current_user.id
  #   receiver_id = params[:user_id]
  #   connection_id = params[:connection_id]
  #   connection_inverse_id = Connection.find_by(user_id: receiver_id, interest_id: current_user.id).id
  #   content = params[:content]

  #   Message.create_reciprocal_for_ids(connection_id, connection_inverse_id, content, sender_id, receiver_id)

  #   render json: { notice: "" }
  # end
end