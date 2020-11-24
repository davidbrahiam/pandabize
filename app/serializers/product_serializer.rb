class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :price, :name, :status

  has_many :bicycles, serializer: BicycleSerializer
end
