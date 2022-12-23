class Manga < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :title, presence: true
    validates :artist, presence: true
    validates :description, presence: true
    # validates :ongoing, presence: true
    validates :genre, presence: true
    validates :chapters, presence: true
    validates :image, presence: true

end
