export interface cakeI {
  bakername: string;
  imageurl: string;
  _id: number;
  ratings: ratingI[];
}

export interface ratingI {
  content: string;
  numberrating: number;
}
