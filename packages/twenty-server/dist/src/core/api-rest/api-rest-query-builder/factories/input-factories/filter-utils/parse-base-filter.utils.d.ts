export declare enum FilterComparators {
    eq = "eq",
    neq = "neq",
    in = "in",
    is = "is",
    gt = "gt",
    gte = "gte",
    lt = "lt",
    lte = "lte",
    startsWith = "startsWith",
    like = "like",
    ilike = "ilike"
}
export declare const parseBaseFilter: (baseFilter: string) => {
    fields: string[];
    comparator: string;
    value: string;
};
