import Image from "next/image";
import React from "react";
import BackButton from "@/assets/images/BackButton.png";

function AddBuddyTrip({ onBack }: { onBack: () => void }) {
  return (
    <div className="w-full">
      <div className="flex justify-start">
        <Image
          src={BackButton}
          alt="BackButton"
          onClick={onBack}
          width={34}
          height={18}
          className="mr-3"
          style={{ cursor: "pointer", objectFit: "contain" }}
        />
        <h1 className="text-3xl font-bold">Add Buddy Trip</h1>
      </div>
    </div>
  );
}

export default AddBuddyTrip;
