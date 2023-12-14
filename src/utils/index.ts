import { getPlaceImage } from "@/network/Places";

export const handleAskBundhuSearchSubmit = (searchValue: string) => {
  // TODO: Handle search
  // console.log(searchValue);
  getPlaceImage(searchValue);
};
