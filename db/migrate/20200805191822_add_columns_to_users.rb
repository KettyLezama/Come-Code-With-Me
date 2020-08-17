class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :img_url, :string
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :town, :string, null: false
    add_column :users, :zip_code, :string, null: false
    add_column :users, :job_title, :string
    add_column :users, :company, :string
    add_column :users, :linkedin_url, :string
    add_column :users, :github_url, :string
    add_column :users, :bio, :text
    add_column :users, :programming_lang, :string, null: false
    add_column :users, :technology, :string
    add_column :users, :active, :boolean, null: false, default: true
    add_column :users, :role, :string, null: false, default: "mentee"
  end
end
