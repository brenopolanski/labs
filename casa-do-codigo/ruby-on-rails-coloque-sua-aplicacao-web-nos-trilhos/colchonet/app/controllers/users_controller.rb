class UsersController < ApplicationController
  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
    @user = User.find(params[:id])
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user,
                  notice: 'Cadastro criado com sucesso!'
    else
      render action: :new
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to @user,
                  notice: 'Cadastro atualizado com sucesso!'
    else
      render action: :edit
    end
  end

  private

    def user_params
      params.
        require(:user).
        permit(:email, :full_name, :location, :password,
               :password_confirmation, :bio)
    end
end
