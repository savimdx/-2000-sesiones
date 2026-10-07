/**
 * Fixed Offer Pricing Configuration
 *
 * Offer price is fixed at US$ 6,90
 */

export interface CountryPricingConfig {
  countryCode: string;
  countryName: string;
  countryNameFr: string;
  price: number;
  formattedPrice: string;
  currencyCode: 'USD';
  currencySymbol: 'US$';
  crossedPriceFormatted: string;
  flag: string;
}

export const FIXED_OFFER_PRICE = 6.90;
export const FIXED_OFFER_PRICE_FORMATTED = 'US$ 6,90';
export const FIXED_CROSSED_PRICE_FORMATTED = 'US$ 69,00';

export const COUNTRY_PRICING: Record<string, CountryPricingConfig> = {
  US: {
    countryCode: 'US',
    countryName: 'Internacional / USD',
    countryNameFr: 'International / USD',
    price: FIXED_OFFER_PRICE,
    formattedPrice: FIXED_OFFER_PRICE_FORMATTED,
    currencyCode: 'USD',
    currencySymbol: 'US$',
    crossedPriceFormatted: FIXED_CROSSED_PRICE_FORMATTED,
    flag: '🇺🇸',
  },
  DEFAULT: {
    countryCode: 'DEFAULT',
    countryName: 'Internacional / USD',
    countryNameFr: 'International / USD',
    price: FIXED_OFFER_PRICE,
    formattedPrice: FIXED_OFFER_PRICE_FORMATTED,
    currencyCode: 'USD',
    currencySymbol: 'US$',
    crossedPriceFormatted: FIXED_CROSSED_PRICE_FORMATTED,
    flag: '🇺🇸',
  },
};

export interface GeoDetectionResult {
  countryCode: string;
  config: CountryPricingConfig;
  source: 'default' | 'url_param' | 'local_cache';
  rawCountry?: string;
}

export function normalizeCountry(code?: string | null): string {
  return 'US';
}

export function detectFromUrlParams(): GeoDetectionResult | null {
  return {
    countryCode: 'US',
    config: COUNTRY_PRICING.US,
    source: 'url_param',
    rawCountry: 'US',
  };
}

export function detectFromCache(): GeoDetectionResult | null {
  return null;
}

export function saveToCache(_countryCode: string, _rawCountry?: string): void {}

export function detectFromBrowserHeuristics(): GeoDetectionResult {
  return {
    countryCode: 'US',
    config: COUNTRY_PRICING.US,
    source: 'default',
    rawCountry: 'standard',
  };
}

export async function detectFromNetwork(): Promise<{ countryCode: string; source: GeoDetectionResult['source']; rawCountry: string } | null> {
  return null;
}

export function getInitialGeoState(): GeoDetectionResult {
  return {
    countryCode: 'US',
    config: COUNTRY_PRICING.US,
    source: 'default',
    rawCountry: 'US',
  };
}
