class MangasController < ApplicationController
    # skip_before_action :authenticate_user, only: :index
    # skip_before_action :is_authorized
    # skip_before_action :current_user
    def index
        man = Manga.all
        render json: man, status: :ok
    end

    def create
        byebug
        man = Manga.create!(manga_params)
    end

    def destroy
        man = Manga.find_by_id(id: params[:id])
        if man
            man.destroy
            head :no_content
        else
            render json: { error: "Manga not found" }, status: :not_found
        end
    end

    private
    def manga_params

    end
end
