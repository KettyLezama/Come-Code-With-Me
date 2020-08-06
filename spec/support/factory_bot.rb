require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    sequence(:first_name) {|n| "Sally the #{n}" }
    sequence(:last_name) {|n| "Johnson#{n}" }
    town { 'Somewhere' }
    zip_code { '01701' }
    bio { 'I cannot wait to become a part of a mentor-mentee duo!' }
    programming_lang { 'Ruby, JavaScript' }
    technology { 'Rails, React' }
    active { true }
    role { 'mentor' }
  end
end
