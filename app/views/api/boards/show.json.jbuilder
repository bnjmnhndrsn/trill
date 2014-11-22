json.extract!(@board, :id, :title, :user_id)
json.lists do
	json.array! @board.lists, partial: 'api/lists/list', as: :list
end