class Api::V1::UsersController < ApplicationController
  def index
    if current_user.role === "mentor"
      render json: { current_user: current_user, users: User.all.where(role: "mentee") }
    else
      render json: { current_user: current_user, users: User.all.where(role: "mentor") }
    end
  end

  def show
    render json: User.find(params[:id])
  end
end