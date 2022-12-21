class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user
  belongs_to :user
  belongs_to :manga 
end
