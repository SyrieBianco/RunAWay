class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception # TODO: deal with this
  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end


  def require_signed_in
    render json: {base: ["Invalid credentials."]}, status: 401 if !current_user
  end
end
