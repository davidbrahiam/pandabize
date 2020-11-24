module Api
  module V1
    class ProductsController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        products = Product.all

        render json: ProductSerializer.new(products, options).serialized_json
      end

      def show
        product = Product.find_by(id: params[:id])

        if product != nil
          render json: ProductSerializer.new(product,options).serialized_json
        else
          render json: {error: product.errors.messages}, status: 422
        end
      end

      def create 
        product = Product.new(product_params)

        if product.save
          render json: ProductSerializer.new(product).serialized_json
        else
          render json: {error: product.errors.messages}, status: 422
        end
      end

      def update 
        product = Product.find_by(id: params[:id])

        if product.update
          render json: ProductSerializer.new(product).serialized_json
        else
          render json: {error: product.errors.messages}, status: 422
        end
      end

      def delete 
        product = Product.find_by(id: params[:id])

        if product.destroy
          head :no_content
        else
          render json: {error: product.errors.messages}, status: 422
        end
      end


      private 
      def product_params
         params.require(:product).permit(:price, :status)
      end

      def options
        @options ||= { include: %i[bicycles] }
      end
    end
  end
end