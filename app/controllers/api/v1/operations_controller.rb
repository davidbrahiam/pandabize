module Api
  module V1
    class OperationsController < ApplicationController
      def create
        if operations_params[:bicycle_id] != nil
          bike = Bicycle.find_by(id: operations_params[:bicycle_id])
        else
          bike = Bicycle.find_by(operations_params)
        end
        
        ActiveRecord::Base.transaction do  
          operation = Operation.create([{user_id: current_user.id, status: :in_progress, total_price: bike.price}]).first
          Product.create([{operation_id: operation.id, bicycle_id: bike.id}])

          bike.update({total_available: bike.total_available-1})
          return render json: {success: "Operation Successed"}.to_json
        end
        render json: {error: "Operation faild"}, status: 422
      end

      private

      def operations_params
        params.required(:operation).permit(
          :bicycle_id, :wheel_size, :rim_color, :saddle_color, :price, :name, :mark
        )
      end
    end
  end
end