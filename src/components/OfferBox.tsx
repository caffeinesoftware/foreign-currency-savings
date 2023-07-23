import Image from "next/image";

import { Offer } from "../offers";
import infoIcon from './../../public/info-icon.svg';
import { AccountType } from "../accounts";

const getAmountDescription = (offer: Offer): string => {
  if (!offer.interestRate.minimumDepositAmount && !offer.interestRate.maximumDepositAmount) {
    return 'Any amount';
  } else if (offer.interestRate.minimumDepositAmount && !offer.interestRate.maximumDepositAmount) {
    return `From ${formatCurrency(offer.interestRate.minimumDepositAmount, offer.account.currencyCode)}`;
  } else if (offer.interestRate.maximumDepositAmount && !offer.interestRate.minimumDepositAmount) {
    return `Up to ${formatCurrency(offer.interestRate.maximumDepositAmount, offer.account.currencyCode)}`
  } else {
    const maximumDepositAmount = offer.interestRate.maximumDepositAmount as number;
    return `From ${formatCurrency(offer.interestRate.minimumDepositAmount, offer.account.currencyCode)} to ${formatCurrency(maximumDepositAmount, offer.account.currencyCode)}`;
  }
};

const formatCurrency = (amount: number, currencyCode: string): string => {
  const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: currencyCode, currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 });
  return formatter.format(amount);
}

const presentAccountType = (offer: Offer): string => {
  switch (offer.account.accountType) {
    case AccountType.INSTANT_ACCESS:
      return 'Instant access';
    case AccountType.FIXED_TERM:
      return presentFixedTerm(offer);
    default:
      throw 'Unrecognised account type';
  }
};

const presentFixedTerm = (offer: Offer): string => {
  const fixedTermLengthInDays = offer.interestRate.fixedTermLengthInDays as number;

  if (fixedTermLengthInDays % 365 === 0) {
    const fixedTermLengthInYears = fixedTermLengthInDays / 365;
    
    if (fixedTermLengthInYears === 1) {
      return '1 year';
    } else {
      return `${fixedTermLengthInYears} years`;
    }
  } else {
    return `${fixedTermLengthInDays} days`;
  }
};

const OfferBox = ({ offer }: { offer: Offer }) => (
  <div className="min-w-full bg-white rounded py-4 px-3 my-5 shadow-sm">
    <div className="mb-3 p-3">
      <Image src={offer.account.marketingInstitution.logoImage} alt={offer.account.marketingInstitution.name} width={100} height={50} className="inline-block" style={{marginRight: '0.5em'}} />
      <h2 className="font-bold inline-block text-lg">{offer.account.marketingInstitution.name} {offer.account.name}</h2>
    </div>

    <div className="px-3">
      <div className="border-slate-500 rounded border">
        <div className="bg-green-600 text-white p-3 lg:border-r border-r-slate-800 lg:inline-block">
          <span>Interest Rate (AER)<br /></span>
          <span className="font-bold">{offer.interestRate.grossAnnualRatePercentage.toFixed(2)}%</span>
        </div>
        <div className="h-full lg:inline-block p-3 lg:border-r border-r-slate-800">
          <span>Term<br /></span>
          <span className="font-bold">{presentAccountType(offer)}</span>
        </div>
        <div className="lg:inline-block p-3 lg:border-r border-r-slate-800">
          <span>Amount<br /></span>
          <span className="font-bold">{getAmountDescription(offer)}</span>
        </div>
        <div className="lg:inline-block p-3">
          <span>Deposit Guarantee<br /></span>
          {offer.account.institution.includesDepositProtection && (<span className="font-bold">Up to {formatCurrency(offer.account.institution.depositProtectionScheme.coverageAmount, offer.account.institution.depositProtectionScheme.coverageCurrency)} {offer.account.institution.depositProtectionScheme.countryEmoji} <a data-tooltip-id="tooltip" data-tooltip-content={`Deposits with ${offer.account.institution.legalEntityName} are protected up to ${formatCurrency(offer.account.institution.depositProtectionScheme.coverageAmount, offer.account.institution.depositProtectionScheme.coverageCurrency)} per person by ${offer.account.institution.depositProtectionScheme.name} ${offer.account.institution.depositProtectionScheme.countryEmoji}`} data-tooltip-place="top"><Image src={infoIcon} width="20" height="20" alt="Info" className="inline" /></a></span>)}
          {!offer.account.institution.includesDepositProtection && (<span className="font-bold">None ⚠️&#xFE0E; <a data-tooltip-id="tooltip" data-tooltip-content={`Deposits with ${offer.account.institution.legalEntityName} are not protected by a deposit protection scheme`} data-tooltip-place="top"><Image src={infoIcon} width="20" height="20" alt="Info" className="inline" /></a></span>)}
        </div>
      </div>

      <div className="py-2 text-sm text-gray-500">{(offer.account.marketingInstitution.slug !== offer.account.institution.slug) && `Deposits held by ${offer.account.institution.legalEntityName} on behalf of ${offer.account.marketingInstitution.name}. `}{offer.account.notesText}</div>

      {/* <div className="rounded bg-green-600 text-white p-2 my-3 inline-block float-right">Learn more</div>
      <div className="clear-both"></div> */}
    </div>
  </div>
);

export default OfferBox;