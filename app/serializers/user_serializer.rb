class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :role, :status
end
