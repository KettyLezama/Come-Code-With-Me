class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :town, presence: true
  validates :zip_code, presence: true, length: { is: 5 }, format: { with: /[0-9]+/ }
  validates :active, presence: true
  validates :bio, length: { maximum: 500 }
  validates :programming_lang, presence: true
  validates :role, presence: true

  has_many :connections, dependent: :destroy
  has_many :interests, through: :connections
end
