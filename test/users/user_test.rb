require './test/test_helper'
 
class UserTest < ActiveSupport::TestCase
  test "user missing password is not valid" do
    user = User.create({email: "123@gmail.com", name: "pandabize"})

    assert user.valid? == false
  end

  test "user with invalid password is not valid" do
    user = User.create({email: "123@gmail.com", name: "pandabize", password: "1234"})

    assert user.valid? == false
  end

  test "user missing email is not valid" do
    user = User.create({password: "123456", name: "pandabize", password_confirmation: "123456"})

    assert user.valid? == false
  end

  test "user with right params is valid" do
    user = User.create({email: "123@gmail.com", name: "pandabize", password: "123456", password_confirmation: "123456"})

    assert user.valid?
  end
end