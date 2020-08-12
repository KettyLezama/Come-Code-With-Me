# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# List of Mentees
mentee_1 = User.create(
  email: "stephanie.parker@gmail.com",
  password: "stephanie",
  password_confirmation: "stephanie",
  first_name: "Stephanie",
  last_name: "Parker",
  town: "Malden",
  zip_code: "02180",
  linkedin_url: "www.linkedin.com/stephanie-parker-12345",
  github_url: "www.github.com/stephanie-parker-12345",
  bio: "Hello! I'm excited to learn!",
  programming_lang: "JavaScript, Python, Java"
)

mentee_2 = User.create(
  email: "caroline.garcia@gmail.com",
  password: "caroline",
  password_confirmation: "caroline",
  first_name: "Caroline",
  last_name: "Garcia",
  town: "Roslindale",
  zip_code: "02131",
  linkedin_url: "www.linkedin.com/caroline-garcia-678",
  github_url: "www.github.com/caroline-garcia-678",
  bio: "Hello! I'm excited to grow and learn from one of you!",
  programming_lang: "C"
)

mentee_3 = User.create(
  email: "alison.smith@yahoo.com",
  password: "alison",
  password_confirmation: "alison",
  first_name: "Alison",
  last_name: "Smith",
  town: "Roslindale",
  zip_code: "02131",
  linkedin_url: "www.linkedin.com/alison-smith",
  github_url: "www.github.com/alison-smith",
  bio: "Hello! I'm looking for someone with patience!",
  programming_lang: "Ruby and JavaScript"
)

mentee_4 = User.create(
  email: "marianna.rivera@verizon.net",
  password: "marianna",
  password_confirmation: "marianna",
  first_name: "Marianna",
  last_name: "Rivera",
  town: "Holliston",
  zip_code: "01746",
  linkedin_url: "www.linkedin.com/mari-rivera",
  github_url: "www.github.com/mari-rivera",
  bio: "Hey friends! I am someone who loves to 'rubber-duck' when coding. Hoping I can find a mentor who loves to do so as well!",
  programming_lang: "Ruby and JavaScript"
)

mentee_5 = User.create(
  email: "theresa.goldberg@gmail.com",
  password: "theresa",
  password_confirmation: "theresa",
  first_name: "Theresa",
  last_name: "Goldberg",
  town: "Wellesley",
  zip_code: "02481",
  linkedin_url: "www.linkedin.com/theresa-goldberg-345",
  github_url: "www.github.com/theresa-goldberg-345",
  bio: "To whomever reads this: I need a mentor badly!",
  programming_lang: "SQL and C++"
)

# List of Mentors
mentor_1 = User.create(
  email: "susanna.johnson@hotmail.com",
  password: "susanna",
  password_confirmation: "susanna",
  first_name: "Susanna",
  last_name: "Johnson",
  town: "Jamaica Plain",
  zip_code: "02130",
  job_title: "Software Engineer",
  company: "Google",
  linkedin_url: "www.linkedin.com/susanna-johnson-54321",
  github_url: "www.github.com/susanna-johnson-54321",
  bio: "Hello! I'm excited to teach!",
  programming_lang: "Java, JavaScript, Python",
  technology: "NodeJS, Rails, React",
  role: "mentor"
)

mentor_2 = User.create(
  email: "miriam.rodriguez@msn.com",
  password: "miriam",
  password_confirmation: "miriam",
  first_name: "Miriam",
  last_name: "Rodriguez",
  town: "East Boston",
  zip_code: "02128",
  job_title: "Systems Analyst",
  company: "Fidelity Investments",
  linkedin_url: "www.linkedin.com/miriam-rodriguez-42",
  github_url: "www.github.com/miriam-rodriguez-42",
  bio: "Hi! I'm excited to mentor some of you out there!",
  programming_lang: "SQL and PHP",
  technology: "MySQL and PostgreSQL",
  role: "mentor"
)

mentor_3 = User.create(
  email: "priscila.melendez@gmail.com",
  password: "priscila",
  password_confirmation: "priscila",
  first_name: "Priscila",
  last_name: "Melendez",
  town: "Brockton",
  zip_code: "02301",
  job_title: "Senior Software Developer",
  company: "Bose",
  linkedin_url: "www.linkedin.com/priscila-melendez-987",
  github_url: "www.github.com/priscila-melendez-987",
  bio: "Hi! Can't wait to mentor you out there!",
  programming_lang: "Python and Ruby",
  technology: "Rails",
  role: "mentor"
)

connection_1 = Connection.create_reciprocal_for_ids(1, 8)
connection_2 = Connection.create_reciprocal_for_ids(8, 2)
connection_3 = Connection.create_reciprocal_for_ids(8, 4)
connection_4 = Connection.create_reciprocal_for_ids(8, 5)

