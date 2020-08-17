Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/learn-more', to: 'homes#index'
  get '/dashboard' => "homes#index", :as => :user_root
  get '/my-profile', to: 'homes#index'
  get '/connections', to: 'homes#index'
  get '/users/:id', to: 'homes#index'

  namespace :api do 
    namespace :v1 do
      resources :messages, only: [:create]
      resources :users, only: [:index, :show] do
        resources :connections, only: [:create, :destroy]
      end
      get "/users/current" => "users#current_user"
      resources :connections, only: [:index]
    end
  end
end
