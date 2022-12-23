class UsersController < ApplicationController
    def create
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
