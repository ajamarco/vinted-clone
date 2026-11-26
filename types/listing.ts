export type Condition = "New with tags" | "Like new" | "Very good" | "Good";

export type Listing = {
  id: number;
  image: string;
  price: string;
  condition: Condition;
  title: string;
  size: string;
};
