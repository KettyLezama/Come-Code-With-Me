class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :interest

      t.timestamps null: false
    end
  end
end
