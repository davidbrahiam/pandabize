require './test/test_helper'
 
class BicycleTest < ActiveSupport::TestCase
  test "bicycle missing mark is not valid" do
    bike = Bicycle.create({
      name: "name", wheel_size: 1, price: 1, saddle_color: "colors", rim_color: "color", total_available: 1
    })

    assert bike.valid? == false
  end

  test "bicycle missing name is not valid" do
    bike = Bicycle.create({
      mark: "mark", wheel_size: 1, price: 1, saddle_color: "colors", rim_color: "color", total_available: 1
    })

    assert bike.valid? == false
  end
  
  test "bicycle missing wheel_size is not valid" do
    bike = Bicycle.create({
      mark: "mark", name: "name", price: 1, saddle_color: "colors", rim_color: "color", total_available: 1
    })

    assert bike.valid? == false
  end
  
  test "bicycle missing saddle_color is not valid" do
    bike = Bicycle.create({
      mark: "mark", name: "name", wheel_size: 1, price: 1, rim_color: "color", total_available: 1
    })

    assert bike.valid? == false
  end
  
  test "bicycle missing rim_color is not valid" do
    bike = Bicycle.create({
      mark: "mark", name: "name", wheel_size: 1, price: 1, saddle_color: "colors", total_available: 1
    })

    assert bike.valid? == false
  end
  
  test "bicycle missing price is not valid" do
    bike = Bicycle.create({
      mark: "mark", name: "name", wheel_size: 1, saddle_color: "colors", rim_color: "color", total_available: 1
    })

    assert bike.valid? == false
  end
  
  test "bicycle with wrong wheel_size is not valid" do
    bike = Bicycle.create({
      mark: "mark", name: "name", wheel_size: -1, price: 1, saddle_color: "colors", rim_color: "color",
      total_available: 1
    })
    assert bike.valid? == false
    bike = Bicycle.create({
      mark: "mark", name: "name", wheel_size: "a", price: 1, saddle_color: "colors", rim_color: "color",
      total_available: 1
    })
    assert bike.valid? == false
  end
  
  test "bicycle right params is valid" do
    bike = Bicycle.create({
      mark: "mark", name: "name", wheel_size: 1, price: 1, saddle_color: "colors", rim_color: "color",
      total_available: 1
    })

    assert bike.valid?
  end
end