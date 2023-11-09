# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

  reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def even_or_odd(number)
    if number.even?
      "#{number} is even"
    end 
    else
      "#{number} is odd"
    end
end
  p even_or_odd

  # Pseudo code:
#   1. input creat a def in this case even_or_odd
#   2. use if number.even? and have a return if even
#   3. have an else with a string stating odd
#   4.end out if and the else

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def string_remover letters
    letters.delete 'a','e','i','o','u'
   end
   
   p string_remover beatles_album1
   p string_remover beatles_album2
   p string_remover beatles_album3

# Pseudo code:
# 1. run a function that gits rid of vowels
# 2. output 'rbbr sl', 'sgt ppr' , 'bby rd'
# 3. created one called letters, and just ran .delete with the vowels in a string
# 4. end the def and just had to p out all the different beatles_albums 

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

    def word_reader (string)
        if string.downcase == string.downcase.reverse
            "#{string} is a palindrome"
        else 
            "#{string} is not a palindrome"
        end
    end

  p word_reader(palindrome_test_case1)
  p word_reader(palindrome_test_case2)
  p word_reader(palindrome_test_case3)

# Pseudo code:
# 1. input a method that will take in a string and decide if its a palindrome
# 2. output a string that says whether the word is or isnt
# 3.created the method and made if else statements with strings in them
# 4.

