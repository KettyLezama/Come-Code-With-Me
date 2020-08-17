class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.belongs_to :connection, foreign_key: true
      t.belongs_to :connection_inverse
      t.string :body, null: false
      t.belongs_to :user
      t.belongs_to :chat

      t.timestamps null: false
    end
  end
end
