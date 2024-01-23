"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFilterContent = void 0;
const parseFilterContent = (filterQuery) => {
    let isWithinBrackets = false;
    let isWithinDoubleQuotes = false;
    let isWithinSingleQuotes = false;
    let parenthesisCounter = 0;
    const predicates = [];
    let currentPredicates = '';
    for (const c of filterQuery) {
        let shouldPersistCharacter = parenthesisCounter >= 1;
        if (c === '(') {
            parenthesisCounter++;
        }
        if (c === ')') {
            parenthesisCounter--;
            shouldPersistCharacter = parenthesisCounter >= 1;
        }
        if (['[', ']'].includes(c))
            isWithinBrackets = !isWithinBrackets;
        if (c === '"')
            isWithinDoubleQuotes = !isWithinDoubleQuotes;
        if (c === "'")
            isWithinSingleQuotes = !isWithinSingleQuotes;
        if (c === ',' &&
            parenthesisCounter === 1 &&
            !isWithinBrackets &&
            !isWithinDoubleQuotes &&
            !isWithinSingleQuotes) {
            predicates.push(currentPredicates);
            currentPredicates = '';
            shouldPersistCharacter = false;
        }
        if (shouldPersistCharacter)
            currentPredicates += c;
    }
    predicates.push(currentPredicates);
    return predicates;
};
exports.parseFilterContent = parseFilterContent;
//# sourceMappingURL=parse-filter-content.utils.js.map