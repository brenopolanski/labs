class Room < ApplicationRecord
  def complete_name
    "#{title}, #{location}"
  end
end
