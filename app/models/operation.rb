class Operation < ApplicationRecord
  belongs_to :user
  has_many :products
  has_many :bicycles, through: :products

  enum status: { in_progress: 0, accepted: 1, rejected: 2 }

  validates :total_price, presence: true
  validates :status, presence: true
end
