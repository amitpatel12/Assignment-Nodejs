# # Mobilicis-India Assignment-Nodejs

The data is stored in a MongoDB database and has the following structure:


{
  "_id": {
    "$oid": "64465f87154a549c67918ec5"
  },
  "id": 6,
  "first_name": "Christine",
  "last_name": "Duggan",
  "email": "cduggan5@cloudflare.com",
  "gender": "Female",
  "income": "$7.46",
  "city": "Liangshuihe",
  "car": "Mazda",
  "quote": "innovate dynamic partnerships",
  "phone_price": "26859"
}

To run the queries, connect to the MongoDB database using a mongoose packages

## here are all the steps to solve all five tasks-

1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”:
    - This query can be implemented using the `$and` operator to combine the conditions for income and car brand.
    - To filter by income, we can use the `$lt` operator to select values less than $5 USD.
    - To filter by car brand, we can use the `$in` operator to select cars that match any of the specified values, i.e. "BMW" or "Mercedes".

2. Male Users which have phone price greater than 10,000:
    - This query can be implemented using the `$and` operator to combine the conditions for gender and phone price.
    - To filter by gender, we can use the `$eq` operator to select only male users.
    - To filter by phone price, we can use the `$gt` operator to select values greater than 10,000.

3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name:
    - This query can be implemented using the `$and` operator to combine the conditions for last name, quote length, and email.
    - To filter by last name, we can use the `$regex` operator to match names that start with "M".
    - To filter by quote length, we can use the `$expr` operator to evaluate a custom expression that checks the length of the quote field.
    - To filter by email, we can use the `$regex` operator to match emails that include the user's last name.

4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit:
    - This query can be implemented using the `$and` operator to combine the conditions for car brand and email.
    - To filter by car brand, we can use the `$in` operator to select cars that match any of the specified values, i.e. "BMW", "Mercedes", or "Audi".
    - To filter by email, we can use the `$not` operator in combination with the `$regex` operator to exclude emails that contain any digits.

5. Show the data of top 10 cities which have the highest number of users and their average income:
    - This query can be implemented using the `$group` operator to group users by city and calculate the count and average income for each city.
    - We can then use the `$sort` operator to sort the results by count and limit the output to the top 10 cities using the `$limit` operator.
    - Finally, we can use the `$project` operator to reshape the output and include only the city name, count, and average income fields.

## I am using ReactJS to display the query results in a table format, utilizing the Ant Design table component for the frontend.
