class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.belongs_to :connection, foreign_key: true
      t.belongs_to :connection_inverse
      t.text :content, null: false
      t.bigint :sender_id, null: false
      t.bigint :receiver_id, null: false

      t.timestamps null: false
    end
  end
end
