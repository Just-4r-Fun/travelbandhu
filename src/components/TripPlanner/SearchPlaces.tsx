import Search from "@/assets/svg/Search";
import { handleAskBundhuSearchSubmit } from "@/utils";
import { Button, Card, List, ListItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const suggestions = [
  {
    suggestionType: "CITY",
    countryName: "India",
    countryCode: "IN",
    countryId: "694",
    stateName: "Karnataka",
    stateId: "1137",
    cityName: "Bangalore",
    cityId: "32550",
    propertyCount: 1815,
    clickable: true,
    childSuggestions: [],
  },
  {
    suggestionType: "CITY",
    countryName: "Malaysia",
    countryCode: "MY",
    countryId: "708",
    stateName: "Selangor",
    stateId: "203636",
    cityName: "Bandar Baru Bangi",
    cityId: "132456",
    propertyCount: 23,
    clickable: true,
    childSuggestions: [],
  },
  {
    suggestionType: "CITY",
    countryName: "Thailand",
    countryCode: "TH",
    countryId: "725",
    stateName: "Bangkok",
    stateId: "204480",
    cityName: "Bang Phli",
    cityId: "137986",
    propertyCount: 51,
    clickable: true,
    childSuggestions: [],
  },
  {
    suggestionType: "LOCALITY",
    countryName: "Thailand",
    countryCode: "TH",
    countryId: "725",
    stateName: "Bangkok",
    stateId: "204480",
    cityName: "Bangkok",
    cityId: "100073",
    localityName: "Bang Kapi",
    localityId: "446922",
    propertyCount: 165,
    clickable: true,
    childSuggestions: [],
  },
  {
    suggestionType: "LOCALITY",
    countryName: "Thailand",
    countryCode: "TH",
    countryId: "725",
    stateName: "Bangkok",
    stateId: "204480",
    cityName: "Bangkok",
    cityId: "100073",
    localityName: "Bang Rak",
    localityId: "446850",
    propertyCount: 132,
    clickable: true,
    childSuggestions: [],
  },
  {
    suggestionType: "CITY",
    countryName: "Thailand",
    countryCode: "TH",
    countryId: "725",
    stateName: "Bangkok",
    stateId: "204480",
    cityName: "Bang Sao Thong",
    cityId: "148180",
    propertyCount: 18,
    clickable: true,
    childSuggestions: [],
  },
  {
    suggestionType: "CITY",
    countryName: "Thailand",
    countryCode: "TH",
    countryId: "725",
    stateName: "Bangkok",
    stateId: "204480",
    cityName: "Bangkok",
    cityId: "100073",
    propertyCount: 2967,
    clickable: true,
    childSuggestions: [],
  },
  {
    suggestionType: "HOTEL",
    countryName: "India",
    countryCode: "IN",
    countryId: "694",
    stateName: "Karnataka",
    stateId: "1137",
    cityName: "Bangalore",
    cityId: "32550",
    hotelName: "Treebo Trend Akshaya Mayflower Vijaya Bank Layout",
    hotelId: "955684",
    bookingCount: 39,
    clickable: true,
    childSuggestions: [],
  },
  {
    suggestionType: "HOTEL",
    countryName: "India",
    countryCode: "IN",
    countryId: "694",
    stateName: "Karnataka",
    stateId: "1137",
    cityName: "Bangalore",
    cityId: "32550",
    hotelName: "Hotel Monarch By Rivido, Bannerghatta Main Road",
    hotelId: "3918160",
    bookingCount: 198,
    clickable: true,
    childSuggestions: [],
  },
  {
    suggestionType: "HOTEL",
    countryName: "Thailand",
    countryCode: "TH",
    countryId: "725",
    stateName: "Bangkok",
    stateId: "204480",
    cityName: "Bangkok",
    cityId: "100073",
    localityName: "Bang Kapi",
    localityId: "446922",
    hotelName: "Bangkok Palace Hotel",
    hotelId: "131654",
    bookingCount: 70,
    clickable: true,
    childSuggestions: [],
  },
];

function SearchPlaces({ text = "Enter Address Manually", onLocationFilled }) {
  const [searchValue, setSearchValue] = useState("");
  const [locationSuggestion, setLocationSuggestion] = useState([]);

  return (
    <>
      {" "}
      <div className="flex items-center">
        <div
          className="px-3 py-2 rounded-[28px] border border-gray-400 w-[673px] flex items-center"
          style={{
            borderRadius: "50px",
            border: "1px solid rgba(0, 0, 0, 0.24)",
            background: "#FFF",
            boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Search className={"mr-2"} />{" "}
          <input
            placeholder={text}
            className="w-full outline-none"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);

              if (e.target.value.length > 3) {
                setLocationSuggestion(suggestions);
              }
            }}
          />
        </div>

        {!!locationSuggestion.length && (
          <Card
            style={{
              top: "110px",

              position: "absolute",
              width: "100%",
              padding: "16px",
              zIndex: 1,
            }}
          >
            <List spacing={3}>
              {locationSuggestion.map((place) => {
                let placeName = place.localityName || "";

                placeName += `${placeName.length ? ", " : ""} ${
                  place.cityName
                }`;

                return (
                  <ListItem
                    key={"_place_" + placeName}
                    className="cursor-pointer hover:bg-slate-100 "
                    style={{
                      padding: "8px",
                      borderRadius: "8px",
                    }}
                    onClick={() => {
                      setLocationSuggestion([]);
                      setSearchValue(placeName);
                      onLocationFilled(placeName);
                    }}
                  >
                    {placeName}
                  </ListItem>
                );
              })}
            </List>
          </Card>
        )}
      </div>
    </>
  );
}

export default SearchPlaces;
