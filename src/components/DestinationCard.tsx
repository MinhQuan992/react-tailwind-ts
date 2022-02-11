import React from "react";
import chicago from "../image/destinations/chicago.jpg";
import colorado from "../image/destinations/colorado.jpg";
import malibu from "../image/destinations/malibu.jpg";
import miami from "../image/destinations/miami.jpg";
import seattle from "../image/destinations/seattle.jpg";
import toronto from "../image/destinations/toronto.jpg";

interface DestinationCardProps {
  city: string;
  averagePrice: number;
  propertyCount: number;
  imageName: string;
  imageAlt: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  city,
  averagePrice,
  propertyCount,
  imageName,
  imageAlt,
}) => {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      {imageName === "chicago" ? (
        <img className="h-32 w-32 flex-shrink-0" src={chicago} alt={imageAlt} />
      ) : imageName === "colorado" ? (
        <img className="h-32 w-32 flex-shrink-0" src={colorado} alt={imageAlt} />
      ) : imageName === "malibu" ? (
        <img className="h-32 w-32 flex-shrink-0" src={malibu} alt={imageAlt} />
      ) : imageName === "miami" ? (
        <img className="h-32 w-32 flex-shrink-0" src={miami} alt={imageAlt} />
      ) : imageName === "seattle" ? (
        <img className="h-32 w-32 flex-shrink-0" src={seattle} alt={imageAlt} />
      ) : (
        <img className="h-32 w-32 flex-shrink-0" src={toronto} alt={imageAlt} />
      )}
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{city}</h3>
        <p className="text-gray-600">${averagePrice} / night average</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-brand-dark hover:text-brand font-semibold text-sm"
          >
            Explore {propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
