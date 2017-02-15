class RemovePasswordFromUsers < ActiveRecord::Migration[5.0]
  def up
    remove_column :users, :password
  end

  def down
    add_column :users, :password, :string
  end
end
