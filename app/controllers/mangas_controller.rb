class MangasController < ApplicationController
    # skip_before_action :authenticate_user, only: :index
    # skip_before_action :is_authorized
    # skip_before_action :current_user
    def index
        manga = Manga.all
        render json: manga, status: :ok
    end

    def create
        man = Manga.create!(manga_params)
        render json: man, status: :ok
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
        params.permit(:image, :chapters, :genre, :ongoing, :description, :artist, :title)
    end
end
