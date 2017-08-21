# 1. 

# a = true
# b = false

# puts a == b
# puts a != b

#  2. 

#  c = "Nil"

#  puts c
#  puts "#{c} was here"

#  puts c.class

#  3. 

# d = 2
# puts d

# e = 2.5
# puts e

# d = e
# puts d

# 4. 

# christine = "Hi, I'm Christine"
# likesTo = "long walks on the beach, kinda."

# tims = "#{christine} and I like #{likesTo}"
# puts tims

# g = "2"
# gToNumber = 2

# puts g.to_i + gToNumber

# 5. 

# def double(number)
#     puts number * 2
# end
# double(6)

# puts "What's your name?"
# user_name = gets.chomp
# puts "What do you like to do?"
# user_like = gets.chomp

# puts "#{user_name} likes to #{user_like}"

# 6. 
# myFirstArray = []

# myFirstArray = ["a", "b", "c", "d", "e", 1, 2, 3, 4]

# puts myFirstArray[-1]
# puts myFirstArray[0]

# myFirstArray[1] = "Joe"
# myFirstArray[2] = 3
# myFirstArray.push("true")
# puts myFirstArray[3].class

# 7. 
# myFavoriteAnimals = {
#     "Venus"=> "Dog",
#     "Ziggy"=> "Cat",
#     "Edgar"=> "Donkey",
#     "Piggy"=> "Pig",
#     "Froggy"=> "frog"
# }
# myFavoriteAnimals["Edgar"] = "Bear"
# myFavoriteMovie = {}
# myFavoriteMovie[:movie] = "Office Space"

# 8. 

firstRange = (1..10)
firstRange.to_a

# secondRange = (1...1000)
# secondRange.to_a

# for number in firstRange
#     puts number.to_s
# end

# x = 0
# secondRange = secondRange.to_a
# while x < 50 do
#  puts secondRange[x]
#     x += 1
# end
# newArray = []
# firstRange.each_with_index do |val, index|
#     val.even? 
#     newArray.push(val * 2)
# end
# puts newArray

firstRange.map do |number|
    if number.even?
        puts number.to_s
    end
end
 9. 
 














