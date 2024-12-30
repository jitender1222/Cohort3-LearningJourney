import { ShareIcons } from "../Icons/ShareIcons";

interface CardProps {
  title: string;
  link?: string;
  type?: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div className="border max-w-72 justify-between p-2 shadow border-gray-300">
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center">
          <div className="pr-2 text-gray-400">
            <ShareIcons />
          </div>
          {title}
        </div>
        <div className="flex items-center text-gray-400">
          <div className="pr-2">
            <ShareIcons />
          </div>
          <ShareIcons />
        </div>
      </div>
      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            className="w-full"
            src="https://www.youtube.com/embed/OsDNyNW6j5U?si=Y-iJe8hvaayeQO3F"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/username/status/807811447862468608"></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
