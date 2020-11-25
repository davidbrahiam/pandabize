require './test/test_helper'
 
class OperationTest < ActiveSupport::TestCase
  test "operation missing user is not valid" do
    operation = Operation.create({total_price: 1})
    assert operation.valid? == false
  end

  test "operation missing status is not valid" do
    user = User.create({email: "123@gmail.com", name: "pandabize", password: "123456"})

    assert user.valid?
    
    operation = Operation.create({total_price: 1, user_id: user.id})
    assert operation.valid? == false
  end

  test "operation with user is valid" do
    user = User.create({email: "123@gmail.com", name: "pandabize", password: "123456"})

    assert user.valid?
    
    operation = Operation.create({total_price: 1, user_id: user.id, status: :in_progress})
    assert operation.valid?
  end
end