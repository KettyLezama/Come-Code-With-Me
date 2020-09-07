class Connection < ApplicationRecord
  belongs_to :user
  belongs_to :interest, class_name: "User"

  has_many :messages, dependent: :delete_all

  def self.create_reciprocal_for_ids(user_id, interest_id)
    user_connection = Connection.create(user_id: user_id, interest_id: interest_id)
    interest_connection = Connection.create(user_id: interest_id, interest_id: user_id)
    [user_connection, interest_connection]
  end

  def self.destroy_reciprocal_for_ids(user_id, interest_id)
    connection1 = Connection.find_by(user_id: user_id, interest_id: interest_id)
    connection2 = Connection.find_by(user_id: interest_id, interest_id: user_id)
    
    connection1.destroy
    connection2.destroy
  end
end