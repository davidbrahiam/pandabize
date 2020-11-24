class CreateOperations < ActiveRecord::Migration[6.0]
  def change
    create_table :operations do |t|
      t.float :total_price
      t.integer :status
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
