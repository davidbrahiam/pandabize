class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.belongs_to :operation, null: false, foreign_key: true
      t.belongs_to :bicycle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
