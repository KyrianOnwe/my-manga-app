class ReviewsController < ApplicationController
    def create
        rvw = Review.create(reviews_params)
         render json: rvw, status: :ok
    end

    private
    def reviews_params 
        params.permit(:review, :user_id, :manga_id)
    end
end
