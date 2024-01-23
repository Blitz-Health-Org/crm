import { Conjunctions } from 'src/core/api-rest/api-rest-query-builder/factories/input-factories/filter-utils/parse-filter.utils';
export declare const DEFAULT_CONJUNCTION = Conjunctions.and;
export declare const addDefaultConjunctionIfMissing: (filterQuery: string) => string;
