require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    expect(User.new(
      email: "test@test.com",
      password: "testing",
      first_name: "Sally",
      last_name: "Johnson",
      town: 'Somewhere',
      zip_code: '01701',
      bio: 'I cannot wait to become a part of a mentor-mentee duo!',
      programming_lang: 'Ruby, JavaScript',
      technology: 'Rails, React',
      active: true,
      role: 'mentor')).to be_valid

    expect(User.new(
      email: "test2@test.com",
      password: "testing",
      first_name: "Mary",
      last_name: "Smith",
      town: 'Somewhere',
      zip_code: '01702',
      bio: 'I cannot wait to become a part of a mentor-mentee duo!',
      programming_lang: 'Ruby, JavaScript',
      active: true,
      role: 'mentee')).to be_valid
  end

  it { should have_valid(:email).when("test@test.com") }
  it { should_not have_valid(:email).when(nil, "") }

  it { should have_valid(:password).when("something") }
  it { should_not have_valid(:password).when(nil, "") }
  it { should_not have_valid(:password).when("test")}

  it { should have_valid(:first_name).when("Priscila") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:last_name).when("Rosenthal") }
  it { should_not have_valid(:last_name).when(nil, "") }

  it { should have_valid(:town).when("Somwhere") }
  it { should_not have_valid(:town).when(nil, "") }

  it { should have_valid(:zip_code).when("01234") }
  it { should_not have_valid(:zip_code).when(nil, "") }
  it { should_not have_valid(:zip_code).when("1234") }
  it { should_not have_valid(:zip_code).when("aaaaa") }

  it { should have_valid(:bio).when("This is a bio!") }

  it { should have_valid(:programming_lang).when("Java") }
  it { should_not have_valid(:programming_lang).when(nil, "") }
end
