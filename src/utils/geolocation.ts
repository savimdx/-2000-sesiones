/**
 * Fixed Offer Pricing Configuration
 *
 * Offer price is fixed at MX$156.60
 */

export interface CountryPricingConfig {
  countryCode: string;
  countryName: string;
  countryNameFr: string;
  price: number;
  formattedPrice: string;
  currencyCode: 'MXN';
  currencySymbol: 'MX$';
  crossedPriceFormatted: string;
  flag: string;
}

export const FIXED_OFFER_PRICE = 155.44;
export const FIXED_OFFER_PRICE_FORMATTED = 'MX$155.44';
export const FIXED_CROSSED_PRICE_FORMATTED = 'MX$1,890.00';

export const COUNTRY_PRICING: Record<string, CountryPricingConfig> = {
  MX: {
    countryCode: 'MX',
    countryName: 'México',
    countryNameFr: 'Mexique',
    price: FIXED_OFFER_PRICE,
    formattedPrice: FIXED_OFFER_PRICE_FORMATTED,
    currencyCode: 'MXN',
    currencySymbol: 'MX$',
    crossedPriceFormatted: FIXED_CROSSED_PRICE_FORMATTED,
    flag: '🇲🇽',
  },
  DEFAULT: {
    countryCode: 'DEFAULT',
    countryName: 'México / Internacional',
    countryNameFr: 'Mexique / International',
    price: FIXED_OFFER_PRICE,
    formattedPrice: FIXED_OFFER_PRICE_FORMATTED,
    currencyCode: 'MXN',
    currencySymbol: 'MX$',
    crossedPriceFormatted: FIXED_CROSSED_PRICE_FORMATTED,
    flag: '🇲🇽',
  },
};

export interface GeoDetectionResult {
  countryCode: string;
  config: CountryPricingConfig;
  source: 'default' | 'url_param' | 'local_cache';
  rawCountry?: string;
}

export function normalizeCountry(code?: string | null): string {
  return 'MX';
}

export function detectFromUrlParams(): GeoDetectionResult | null {
  return {
    countryCode: 'MX',
    config: COUNTRY_PRICING.MX,
    source: 'url_param',
    rawCountry: 'MX',
  };
}

export function detectFromCache(): GeoDetectionResult | null {
  return null;
}

export function saveToCache(_countryCode: string, _rawCountry?: string): void {}

export function detectFromBrowserHeuristics(): GeoDetectionResult {
  return {
    countryCode: 'MX',
    config: COUNTRY_PRICING.MX,
    source: 'default',
    rawCountry: 'standard',
  };
}

export async function detectFromNetwork(): Promise<{ countryCode: string; source: GeoDetectionResult['source']; rawCountry: string } | null> {
  return null;
}

export function getInitialGeoState(): GeoDetectionResult {
  return {
    countryCode: 'MX',
    config: COUNTRY_PRICING.MX,
    source: 'default',
    rawCountry: 'MX',
  };
}
