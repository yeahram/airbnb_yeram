import getListings from "./actions/getListings";
import Image from "next/image";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  const isEmpty = true;
  if (isEmpty) {
    <ClientOnly>
      <EmptyState showReset />
    </ClientOnly>;
  }
  return (
    <div>
      <ClientOnly>
        <Container>
          <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings.map((listing: any) => {
              return (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listings}
                />
              );
            })}
          </div>
        </Container>
      </ClientOnly>
    </div>
  );
}
