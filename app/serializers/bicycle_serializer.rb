class BicycleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :wheel_size, :rim_color, :saddle_color, :name, :mark, :total_available, :price
end
