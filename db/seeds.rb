# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
Operation.destroy_all
Bicycle.destroy_all
User.destroy_all
admin = User.create([{name: "admin", email: "admin@gmail.com", role: :admin, status: :active, password: "admins", password_confirmation: "admins"}])

colors = ["blue", "black", "white", "orange", "red", "gray", "green", "yellow", "pink", "purple"]
wheel_size = [*1..10]
prices = 1.step(by: 0.5, to: 10).to_a

marks = ["bike", "Mountain Bike", "others", "pandabize"]
names = ["Heigher DX", "Mountain AD", "BMX", "Crazy Bike"]

20.times do |t|
  Bicycle.create([{mark: marks.sample, name: names.sample, wheel_size: wheel_size.sample, price: prices.sample, saddle_color: colors.sample, rim_color: colors.sample, total_available: t, total_sold: 0}])
end
