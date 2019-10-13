json.extract! post, :id, :title, :body, :user_id, :created_at, :updated_at, :email
json.url post_url(post, format: :json)
