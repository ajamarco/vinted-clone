export type Condition = "New with tags" | "Like new" | "Very good" | "Good";

export type ListingBadge = "new" | "sale";

export type Listing = {
  id: number;
  image: string;
  brand: string;
  price: string;
  condition: Condition;
  title: string;
  size: string;
  badge?: ListingBadge;
};
