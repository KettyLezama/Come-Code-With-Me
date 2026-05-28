source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.3.11'

gem 'rails', '~> 7.2.0'
gem 'pg', '>= 1.0'
gem 'puma', '~> 6.0'
gem 'jbuilder'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'bootsnap', require: false

# CSS
gem 'sassc-rails'

# Auth
gem 'devise'

# JS bundling (replaces Webpacker)
gem 'shakapacker', '~> 7.0'

# Styling
gem 'bulma-rails', '~> 0.9.0'

group :development, :test do
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'pry-rails'
  gem 'dotenv-rails'
  gem 'rspec-rails', '~> 6.0'
  gem 'capybara'
  gem 'launchy'
  gem 'factory_bot_rails'
  gem 'database_cleaner-active_record'
  gem 'shoulda-matchers'
end

group :development do
  gem 'web-console'
  gem 'listen'
end
