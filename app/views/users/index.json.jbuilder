json.array!(@users) do |user|
  json.id user.id
  json.value user.email
  json.label user.email

end
