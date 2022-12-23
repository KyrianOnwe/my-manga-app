class User < ApplicationRecord
    has_many :reviews
    has_many :mangas, through: :reviews

    has_secure_password

    validates :user_name, presence: true
    validates :user_name, uniqueness: true
    validates :email, presence: true
    # validates :password, presence: true 
end
