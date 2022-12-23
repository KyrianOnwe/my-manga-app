class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user, :manga
  belongs_to :user
  belongs_to :manga 
end
