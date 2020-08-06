require 'rails_helper'

feature 'user registers', %Q{
  As a visitor
  I want to register
  So that I can create an account
} do

  # Acceptance Criteria:
  # * I must specify a valid email address,
  #   password, and password confirmation
  # * If I don't specify the required information, I am presented with
  #   an error message

  scenario 'provide valid registration information as a mentor' do
    visit new_user_registration_path

    fill_in 'Email', with: 'john@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    fill_in 'First Name', with: 'Sally'
    fill_in 'Last Name', with: 'Johnson'
    fill_in 'Town', with: 'Somewhere'
    fill_in 'Zip Code', with: '00000'
    fill_in 'Job Title', with: 'Software Engineer'
    fill_in 'Company', with: 'Awesome Company'
    fill_in 'LinkedIn', with: 'www.linkedin.com/sally'
    fill_in 'GitHub', with: 'www.github.com/sally'
    fill_in 'Bio', with: 'This is my bio.'
    fill_in 'Programming Language(s)', with: 'Ruby & Javascript'
    fill_in 'Technologies', with: 'Ruby on Rails & React'

    click_button 'Sign up'

    expect(page).to have_content('Welcome! You have signed up successfully.')
    expect(page).to have_content('Sign Out')
  end

  scenario 'provide valid registration information as a mentee' do
    visit new_user_registration_path

    fill_in 'Email', with: 'john@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    fill_in 'First Name', with: 'Sally'
    fill_in 'Last Name', with: 'Johnson'
    fill_in 'Town', with: 'Somewhere'
    fill_in 'Zip Code', with: '00000'
    fill_in 'Bio', with: 'This is my bio.'
    fill_in 'Programming Language(s)', with: 'Ruby & Javascript'

    click_button 'Sign up'

    expect(page).to have_content('Welcome! You have signed up successfully.')
    expect(page).to have_content('Sign Out')
  end

  scenario 'provide invalid registration information' do
    visit new_user_registration_path

    click_button 'Sign up'
    expect(page).to have_content("can't be blank")
    expect(page).to_not have_content('Sign Out')
  end
end
