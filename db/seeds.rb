# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Manga.create(title: 'Black Clover', artist: 'Clover King', description: 'Magicless boy makes friends', ongoing: false, genre: 'fantasy', chapters: 50000)
Manga.create(title: 'DBZ', artist: 'Goku Vegeta', description: 'Crazy monkey gets strong and fights lizards', ongoing: false, genre: 'action', chapters: 300000)
Manga.create(title: 'Bleach', artist: 'Tokugawa', description: 'Guy meets girl, girl stabs boy, boy becomes a death god', ongoing: false, genre: 'fantasy', chapters: 3000)
Manga.create(title: 'Berserk', artist: 'Griffin', description: 'Guy misses his buddy so he becomes evil', ongoing: false, genre: 'horror', chapters: 3005)
Manga.create(title: 'One Punch man', artist: 'Baldy Guy', description: 'Just read the title', ongoing: true, genre: 'fighting', chapters: 52)

User.create(user_name: 'SaytamaIII', email: 'pecks@pump.com', password: 'tickles')
User.create(user_name: 'Partygurl45', email: 'love@bunnies.com', password: 'kiss')
User.create(user_name: 'McLovin', email: 'allday@night.com', password: 'wow')

Review.create(review: 'Dug it!', user_id: 2, manga_id: 3)
Review.create(review: 'Wild stuff!', user_id: 3, manga_id: 4)
Review.create(review: 'I read it', user_id: 2, manga_id: 2)
Review.create(review: 'It was quite the ride', user_id: 2, manga_id: 3)
Review.create(review: "Don't know what to say", user_id: 1, manga_id: 1)
Review.create(review: "I'm still reading it", user_id: 3, manga_id: 4)
Review.create(review: 'it was fine', user_id: 2, manga_id: 2)
Review.create(review: 'More please', user_id: 2, manga_id: 1)
Review.create(review: 'meh', user_id: 1, manga_id: 5)