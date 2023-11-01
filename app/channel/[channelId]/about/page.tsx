import GetChannel from "@/lib/GetChannel";
import { Flag, Forward } from "lucide-react";

const formatNumberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatDate = (dateString: string) => {
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default async function Channel({
  params,
}: {
  params: { channelId: string };
}) {
  const channelData: Promise<Channel> = GetChannel(params.channelId);
  const channel = await channelData;

  const formattedDate = formatDate(channel.items[0].snippet.publishedAt);
  const formattedViews = formatNumberWithCommas(
    parseInt(channel.items[0].statistics.viewCount, 10)
  );

  return (
    <div className="pt-4 flex w-full">
      <div className="mr-24 w-2/3">
        <div className="border-b pb-8 border-iconsBorderColor">
          <h3 className="my-6">Description</h3>
          <p className="text-sm">{channel.items[0].snippet.description}</p>
        </div>
      </div>
      <div className="flex flex-col pt-4 w-1/3">
        <h3 className="border-b py-3 border-iconsBorderColor">Stats</h3>
        <h4 className="border-b py-3 text-sm border-iconsBorderColor">
          Joined {formattedDate}
        </h4>
        <h4 className="border-b py-3 text-sm border-iconsBorderColor">
          {formattedViews} views
        </h4>
        <div className="flex mt-2 gap-4">
          <div className="relative group">
            <div className="cursor-pointer p-2.5 rounded-full hover:bg-detailsYoutube/30">
              <Flag size={20} className="text-white" />
            </div>
            <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none top-14 left-0 absolute p-2 rounded-md bg-neutral-600/95">
              <h4 className="text-xs">Report user</h4>
            </div>
          </div>
          <div className="relative group">
            <div className="cursor-pointer p-2.5 rounded-full hover:bg-detailsYoutube/30">
              <Forward size={20} className="text-white" />
            </div>
            <div className="opacity-0 whitespace-nowrap group-hover:opacity-100 ease-in duration-100 pointer-events-none left-0 top-14 absolute p-2 rounded-md bg-neutral-600/95">
              <h4 className="text-xs">Share</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
