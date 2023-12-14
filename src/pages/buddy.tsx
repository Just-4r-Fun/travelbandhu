import AddBuddyTrip from "@/components/AddBuddyTrip";
import BaseLayout from "@/components/BaseLayout";
import BuddyContainer from "@/components/BuddyContainer";
import { Input } from "@chakra-ui/react";
import React, { useState } from "react";

function Buddy() {
  const [showAddBuddy, setShowAddBuddy] = useState(false);

  const toggleAddBuddy = () => {
    setShowAddBuddy(!showAddBuddy);
  };

  return (
    <BaseLayout>
      {showAddBuddy ? (
        <AddBuddyTrip onBack={toggleAddBuddy} />
      ) : (
        <BuddyContainer onAddBuddy={toggleAddBuddy} />
      )}
    </BaseLayout>
  );
}

export default Buddy;
