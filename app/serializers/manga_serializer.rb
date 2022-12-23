class MangaSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :description, :ongoing, :genre, :chapters, :image, :reviews 
  has_many :reviews
  has_many :users, through: :reviews
end
