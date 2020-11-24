class Product < ApplicationRecord
  belongs_to :bicycle
  belongs_to :operation
end
