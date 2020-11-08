class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest
      t.integer :role, null: false, default: 1
      t.string :credit_card

      t.timestamps
    end
  end
end