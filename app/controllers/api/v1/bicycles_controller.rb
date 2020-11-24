module Api
  module V1
    class BicyclesController < ApplicationController
      def index
        bicycles = Bicycle.all

        render json: BicycleSerializer.new(bicycles).serialized_json
      end

      def build_query
        
        bikes = Bicycle.all.where('total_available > 0')
        params[:fields].each do |b|
          bikes = bikes.where('? = ?', b.keys.first.to_s, b.values.first)
        end
        
        render json: {"#{params[:distinct]}": bikes.unique_field(params[:distinct].to_sym)}.to_json
      end

      def show
        # scope :bike_properties, -> (t) {
  
  #   # marks = unique_field(:mark)
  #   # resp = []
  #   # marks.each do |m|
  #   #   models = []
  #   #   names = where(mark: m).unique_field(:name)
  #   #   names.each {
  #   #     |n| models.append({name: n, wheel_size: where(mark: m, name: n).unique_field(:wheel_size)})
  #   #   }
  #   #   resp.append({mark: m, models: models})
  #   # end
    
  #   # resp
  # }
        # query ={fields: [{mark: "mark"}, {"name"], distinct: ""}

        # {
        #   wheel_size: wheel_size, rim_color: rim_color, saddle_color: saddle_color,
        #   total_available: total_available, mark: mark, name: name, price: price
        # } = bicycle_params

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
         params.require(:bicycle).permit(:wheel_size, :rim_color, :saddle_color, :total_available, :mark, :name, :price)
      end
    end
  end
end