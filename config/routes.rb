Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root "static_pages#root"
namespace :api, defaults: {format: :json} do
  resource :session, only: [:create, :destroy]
  resources :users, only: [:create, :destroy]
  resources :workouts, only: [:create, :destroy, :index, :show]
  resources :routes, only: [:create, :destroy, :index, :show, :update]
end

end
