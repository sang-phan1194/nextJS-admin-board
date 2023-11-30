import { User, Product } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, 'i');
  const ITEM_PER_PAGE = 5;
  try {
    connectToDB();
    const totalUser = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { totalUser, users };
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong when fetching users!')
  }
}
export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, 'i');
  const ITEM_PER_PAGE = 5;
  try {
    connectToDB();
    const totalProducts = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { totalProducts, products };
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong when fetching products!')
  }
}