Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/learn-more', to: 'homes#index'
  get '/dashboard' => "homes#index", :as => :user_root
end
