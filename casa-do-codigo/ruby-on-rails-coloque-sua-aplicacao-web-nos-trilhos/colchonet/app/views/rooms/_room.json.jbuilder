json.extract! room, :id, :title, :location, :description, :created_at, :updated_at
json.url room_url(room, format: :json)