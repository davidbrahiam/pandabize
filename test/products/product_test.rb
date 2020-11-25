require './test/test_helper'
 
class ProductTest < ActiveSupport::TestCase
  test "product missing operation is not valid" do
    bike = Bicycle.create({
      mark: "mark", name: "name", wheel_size: 1, price: 1, saddle_color: "colors", rim_color: "color",
      total_available: 1
    })

    assert bike.valid?

    product = Product.create({bicycle_id: bike.id})
    assert product.valid? == false
  end

  test "product missing bicycle is not valid" do
    user = User.create({email: "123@gmail.com", name: "pandabize", password: "123456"})  
    assert user.valid?
    
    operation = Operation.create({total_price: 1, user_id: user.id, status: :in_progress})
    assert operation.valid?
    product = Product.create({operation_id: operation.id})
    assert product.valid? == false
    
  end

  test "product with right params is valid" do
    bike = Bicycle.create({
      mark: "mark", name: "name", wheel_size: 1, price: 1, saddle_color: "colors", rim_color: "color",
      total_available: 1
    })
    assert bike.valid?

    user = User.create({email: "123@gmail.com", name: "pandabize", password: "123456"})
    assert user.valid?
    
    operation = Operation.create({total_price: 1, user_id: user.id, status: :in_progress})
    assert operation.valid?

    product = Product.create({operation_id: operation.id, bicycle_id: bike.id})
    assert product.valid?
  end

end