# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_22_110524) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bicycles", force: :cascade do |t|
    t.string "name", null: false
    t.string "mark", null: false
    t.float "price", null: false
    t.integer "total_available", default: 0
    t.integer "total_sold", default: 0
    t.integer "wheel_size", null: false
    t.string "rim_color", null: false
    t.string "saddle_color", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "operations", force: :cascade do |t|
    t.float "total_price"
    t.integer "status"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_operations_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.bigint "operation_id", null: false
    t.bigint "bicycle_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bicycle_id"], name: "index_products_on_bicycle_id"
    t.index ["operation_id"], name: "index_products_on_operation_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "role", default: 1
    t.integer "status", default: 1
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "operations", "users"
  add_foreign_key "products", "bicycles"
  add_foreign_key "products", "operations"
end
