import EventBanner from "@/components/EventBanner ";
import RootLayout from "./(public)/layout";
import Card from "./(public)/contact/Card";
import HeaderCard from "@/components/HeaderCard";
import ParcelBanner from "@/components/ParcelBanner";

export default function Home() {
  return (
    <RootLayout>
      <EventBanner />
      <Card>
        <div className="flex flex-col w-full h-auto gap-7 py-4">
          <HeaderCard />
          <ParcelBanner />
        </div>
      </Card>
    </RootLayout>
  );
}
