class Message < ApplicationRecord
  belongs_to :connection
  belongs_to :connection_inverse, class_name: "Connection"

  def self.create_reciprocal_for_ids(connection_id, connection_inverse_id, content, sender_id, receiver_id)
    connection = Connection.find(connection_id)
    sender_id = connection.user_id
    receiver_id = connection.interest_id

    message_from = Message.create(connection_id: connection_id, connection_inverse_id: connection_inverse_id, content: content, sender_id: sender_id, receiver_id: receiver_id)

    message_to = Message.create(connection_id: connection_inverse_id, connection_inverse_id: connection_id, content: content, sender_id: sender_id, receiver_id: receiver_id)
    [message_from, message_to]
  end
end