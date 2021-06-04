class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    respond_to do |format|
      format.html #this is the format by default
      format.json { render json: { restaurants: @restaurants } } #i need this js format to be able to pass my @restaurants to my stimulus controller
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    @review = Review.new
  end

  def destroy
    resto = Restaurant.find(params[:id])
    resto.destroy
    redirect_to restaurants_path
  end
end
