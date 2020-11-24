class CreateBicycles < ActiveRecord::Migration[6.0]
  def change
    create_table :bicycles do |t|
      t.string :name, null: false
      t.string :mark, null: false
      t.float :price, null: false
      t.integer :total_available, default: 0
      t.integer :total_sold, default: 0
      t.integer :wheel_size, null: false
      t.string :rim_color, null: false
      t.string :saddle_color, null: false

      t.timestamps
    end
  end
end
