# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2020_08_13_195007) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "connections", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "interest_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["interest_id"], name: "index_connections_on_interest_id"
    t.index ["user_id"], name: "index_connections_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "connection_id"
    t.bigint "connection_inverse_id"
    t.text "content", null: false
    t.bigint "sender_id", null: false
    t.bigint "receiver_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["connection_id"], name: "index_messages_on_connection_id"
    t.index ["connection_inverse_id"], name: "index_messages_on_connection_inverse_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "img_url"
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "town", null: false
    t.string "zip_code", null: false
    t.string "job_title"
    t.string "company"
    t.string "linkedin_url"
    t.string "github_url"
    t.text "bio"
    t.string "programming_lang", null: false
    t.string "technology"
    t.boolean "active", default: true, null: false
    t.string "role", default: "mentee", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "connections", "users"
  add_foreign_key "messages", "connections"
end
