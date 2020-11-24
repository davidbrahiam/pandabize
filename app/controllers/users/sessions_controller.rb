# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]
  skip_before_action :verify_signed_out_user
  skip_before_action :require_no_authentication
  skip_before_action :verify_authenticity_token

  # GET /resource/sign_in
  def new
    if user_signed_in?
      render json: { user: current_user, token: form_authenticity_token }.to_json and return
    else
      render json: { user: nil,  token: nil }.to_json and return
    end
  end

  # POST /resource/sign_in
  def create
    super do
      render json: { user: current_user, token: form_authenticity_token }.to_json and return
    end
  end

  # DELETE /resource/sign_out
  def destroy
    super do
      render json: { user: nil, token: nil }.to_json and return
    end
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end
end
