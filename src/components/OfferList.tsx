import { memo } from "react";

import { Offer } from "../offers";
import OfferBox from "./OfferBox";

const OfferList = ({
  offers,
  totalCount,
}: {
  offers: Offer[];
  totalCount: number;
}) => (
  <>
    <p className="text-center text-md mt-1 text-gray-600">
      Displaying {offers.length} of {totalCount} results
    </p>

    {offers.map((offer) => (
      <OfferBox offer={offer} key={offer.slug} showLearnMoreLink={true} />
    ))}

    <p className="text-center text-md mt-1 text-gray-600">
      Spotted an offer we&apos;ve missed?{" "}
      <a href="mailto:me@timrogers.co.uk" className="underline">
        Drop us an email
      </a>
      .
    </p>
  </>
);

export default memo(OfferList);
