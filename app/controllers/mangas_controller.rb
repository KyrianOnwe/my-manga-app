class MangasController < ApplicationController
    def index
        man = Manga.all
        render json: man, status: :ok
    end
end
