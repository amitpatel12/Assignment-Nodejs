import User from "../model/user.js";

export const task1 = async (req, res) => {
  try {
    const response = await User.find({
      income: { $lt: "$5" },
      car: { $in: ["Mercedes", "BMW"] },
    });

   
    res.status(200).json({ success: true, result: response });
  } catch (error) {
    res.status(500).json("something went wrong" + error.message);
  }
};

export const task2 = async (req, res) => {
  try {

    const response = await User.find({
      gender: "Male",
      phone_price: { $gt: "10000" },
    });

   
    res.status(200).json({ success: true, result: response });
  } catch (error) {
    res.status(500).json("something went wrong" + error.message);
  }
};

export const task3 = async (req, res) => {
  try {
  
    const response = await User.find({
      last_name: /^M/,
      quote: { $regex: /^.{16,}$/ },
      email: { $regex: /M/, $options: "i" },
    });

  
    res.status(200).json({ success: true, result: response });
  } catch (error) {
    res.status(500).json("something went wrong" + error.message);
  }
};

export const task4 = async (req, res) => {
  try {
 
    const response = await User.find({
      car: { $in: ["BMW", "Mercedes", "Audi"] },
      email: { $not: /\d/ },
    });

   
    res.status(200).json({ success: true, result: response });
  } catch (error) {
    res.status(500).json("something went wrong" + error.message);
  }
};

export const task5 = async (req, res) => {
  try {
    console.log("hello");
    const response = await User.aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          total_income: { $sum: { $toDouble: { $substr: ["$income", 1, -1] } } }
        }
      },
      {
        $match: { count: { $gt: 0 } }
      },
      {
        $project: {
          city: "$_id",
          _id: 0,
          count: 1,
          avg_income: { $round: [ { $divide: [ "$total_income", "$count" ] }, 2 ] }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 10
      }
    ]);

    console.log(response);
    res.status(200).json({ success: true, result: response });
  } catch (error) {
    res.status(500).json("something went wrong" + error.message);
  }
};
