module Api
  module V1
    class BicyclesController < ApplicationController
      def index
        bicycles = Bicycle.all.where('total_available > 0').order([:name])
        render json: BicycleSerializer.new(bicycles).serialized_json
      end

      def build_query
        bikes = Bicycle.all.where('total_available > 0').where(customize_params[:fields].first)  
        render json: {"#{params[:distinct]}": bikes.unique_field(params[:distinct].to_sym)}.to_json
      end

      def show
        bicycle = Bicycle.find_by(id: params[:id])
        
        if bicycle != nil
          render json: BicycleSerializer.new(bicycle).serialized_json
        else
          render json: {error: "Bicycle not Found"}, status: 422
        end
      end

      def create 
        bicycle = Bicycle.new(bicycle_params)

        if bicycle.save
          render json: BicycleSerializer.new(bicycle).serialized_json
        else
          render json: {error: bicycle.errors.messages}, status: 422
        end
      end

      def update 
        bicycle = Bicycle.find_by(id: params[:id])

        if bicycle.operation.length == 0 && bicycle.products.length == 0
          if bicycle.update(bicycle_params)
            render json: BicycleSerializer.new(bicycle).serialized_json
          else
            render json: {error: bicycle.errors.messages}, status: 422
          end
        else
          render json: {error: "This bicycle already was sold"}, status: 422
        end
      end

      def destroy 
        bicycle = Bicycle.find_by(id: params[:id])

        if bicycle.operation.length == 0 && bicycle.products.length == 0
          if Bicycle.destroy
            head :no_content
          else
            render json: {error: bicycle.errors.messages}, status: 422
          end
        else
          render json: {error: "This bicycle already was sold"}, status: 422
        end
      end


      private 
      def bicycle_params
         params.require(:bicycle).permit(
          :wheel_size, :rim_color, :saddle_color, :total_available, :mark, :name, 
          :price, :image
        )
      end

      def customize_params
        params.permit( :distinct, fields: [
          :name, :wheel_size, :saddle_color, :rim_color, :mark
        ])
     end
    end
  end
end