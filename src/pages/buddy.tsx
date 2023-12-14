import AddBuddyTrip from "@/components/AddBuddyTrip";
import BaseLayout from "@/components/BaseLayout";
import BuddyContainer from "@/components/BuddyContainer";

import React, { useState } from "react";

function Buddy() {
  const [showAddBuddy, setShowAddBuddy] = useState(false);

  const toggleAddBuddy = () => {
    setShowAddBuddy(!showAddBuddy);
  };

  const handleTripPlan = (tripPlan: any) => {
    if (showAddBuddy) {
      toggleAddBuddy();
    }
    console.log(tripPlan);
  };

  return (
    <BaseLayout className="min-h-screen !h-fit">
      {showAddBuddy ? (
        <AddBuddyTrip onBack={toggleAddBuddy} onTripPlanPost={handleTripPlan} />
      ) : (
        <BuddyContainer onAddBuddy={toggleAddBuddy} />
      )}
    </BaseLayout>
  );
}

export default Buddy;
