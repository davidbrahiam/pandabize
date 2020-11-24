class Bicycle < ApplicationRecord
  has_many :products
  has_many :operations, through: :products

  scope :unique_field, -> (t) { distinct.pluck(t)}
  
  # scope :bike_properties, -> (t) {
  
  #   # marks = unique_field(:mark)
  #   # resp = []
  #   # marks.each do |m|
  #   #   models = []
  #   #   names = where(mark: m).unique_field(:name)
  #   #   names.each {
  #   #     |n| models.append({name: n, wheel_size: where(mark: m, name: n).unique_field(:wheel_size)})
  #   #   }
  #   #   resp.append({mark: m, models: models})
  #   # end
    
  #   # resp
  # }

  scope :find_bike, -> (name, mark, rim_color, wheel_size, saddle_color) {
    find_by(name: name, mark: mark, rim_color: rim_color, wheel_size: wheel_size, saddle_color: saddle_color)
  }
end
