class UsersController < ApplicationController
    # skip_before_action :authorized, only: :create
    # skip_before_action :authorized, only: :show
    # skip_before_action :authenticate_user, only: :create
    # skip_before_action :current_user, only: :create
    def create
        # byebug
        user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :ok
    end

    def show
        user = User.find_by_id(session[:user_id])
        render json: user, status: :ok
    end

    private 
    def user_params
        params.permit(:user_name, :password, :email)
    end

end
