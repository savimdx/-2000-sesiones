/**
 * Fixed Offer Pricing Configuration
 *
 * Offer price is fixed at 7€
 */

export interface CountryPricingConfig {
  countryCode: string;
  countryName: string;
  countryNameFr: string;
  price: number;
  formattedPrice: string;
  currencyCode: 'EUR';
  currencySymbol: '€';
  crossedPriceFormatted: string;
  flag: string;
}

export const FIXED_OFFER_PRICE = 7;
export const FIXED_OFFER_PRICE_FORMATTED = '7€';
export const FIXED_CROSSED_PRICE_FORMATTED = '287€';

export const COUNTRY_PRICING: Record<string, CountryPricingConfig> = {
  ES: {
    countryCode: 'ES',
    countryName: 'España / EUR',
    countryNameFr: 'Espagne / EUR',
    price: FIXED_OFFER_PRICE,
    formattedPrice: FIXED_OFFER_PRICE_FORMATTED,
    currencyCode: 'EUR',
    currencySymbol: '€',
    crossedPriceFormatted: FIXED_CROSSED_PRICE_FORMATTED,
    flag: '🇪🇸',
  },
  DEFAULT: {
    countryCode: 'DEFAULT',
    countryName: 'Europa / EUR',
    countryNameFr: 'Europe / EUR',
    price: FIXED_OFFER_PRICE,
    formattedPrice: FIXED_OFFER_PRICE_FORMATTED,
    currencyCode: 'EUR',
    currencySymbol: '€',
    crossedPriceFormatted: FIXED_CROSSED_PRICE_FORMATTED,
    flag: '🇪🇺',
  },
};

export interface GeoDetectionResult {
  countryCode: string;
  config: CountryPricingConfig;
  source: 'default' | 'url_param' | 'local_cache';
  rawCountry?: string;
}

export function normalizeCountry(code?: string | null): string {
  return 'ES';
}

export function detectFromUrlParams(): GeoDetectionResult | null {
  return {
    countryCode: 'ES',
    config: COUNTRY_PRICING.ES,
    source: 'url_param',
    rawCountry: 'ES',
  };
}

export function detectFromCache(): GeoDetectionResult | null {
  return null;
}

export function saveToCache(_countryCode: string, _rawCountry?: string): void {}

export function detectFromBrowserHeuristics(): GeoDetectionResult {
  return {
    countryCode: 'ES',
    config: COUNTRY_PRICING.ES,
    source: 'default',
    rawCountry: 'standard',
  };
}

export async function detectFromNetwork(): Promise<{ countryCode: string; source: GeoDetectionResult['source']; rawCountry: string } | null> {
  return null;
}

export function getInitialGeoState(): GeoDetectionResult {
  return {
    countryCode: 'ES',
    config: COUNTRY_PRICING.ES,
    source: 'default',
    rawCountry: 'ES',
  };
}
