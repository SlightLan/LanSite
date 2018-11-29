class CreateQueryInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :query_infos do |t|
      t.string :people_name
      t.datetime :time
      t.string :long
      t.string :latitude
      t.integer :time_zone

      t.timestamps
    end
  end
end
