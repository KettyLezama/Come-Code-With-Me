class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :configure_permitted_parameters, if: :devise_controller?
  protect_from_forgery with: :exception

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [
      :email,
      :password,
      :first_name,
      :last_name,
      :town,
      :zip_code,
      :job_title,
      :company,
      :linkedin_url,
      :github_url,
      :bio,
      :programming_lang,
      :technology,
      :role
    ])

    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
  end

  private
  def after_sign_in_path_for(resource)
     "/dashboard"
  end
end
