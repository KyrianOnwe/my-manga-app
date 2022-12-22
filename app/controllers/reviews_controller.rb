class ReviewsController < ApplicationController
    def create
        rvw = Review.create(reviews_params)
         render json: rvw, status: :created
    end

    private
    def reviews_params 
        params.permit(:review, :user_id, :manga_id)
    end
end
