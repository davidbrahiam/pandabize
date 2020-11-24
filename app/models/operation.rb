class Operation < ApplicationRecord
  belongs_to :user
  has_many :products
  has_many :bicycles, through: :products
end
