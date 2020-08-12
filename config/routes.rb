Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/learn-more', to: 'homes#index'
  get '/dashboard' => "homes#index", :as => :user_root
  get '/users/:id', to: 'homes#index'
  get '/mutual-connects', to: 'homes#index'

  namespace :api do 
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :connections, only: [:index, :create, :destroy]
    end
  end
end
