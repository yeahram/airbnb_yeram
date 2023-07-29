import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReseravtionsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login"></EmptyState>
      </ClientOnly>
    );
  }
  const reservations = await getReservations({
    authorId: currentUser.id,
  });
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties"
        ></EmptyState>
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ReservationsClient
        rseervations={reservations}
        currentUser={currentUser}
      ></ReservationsClient>
    </ClientOnly>
  );
};
export default ReservationsPage;
