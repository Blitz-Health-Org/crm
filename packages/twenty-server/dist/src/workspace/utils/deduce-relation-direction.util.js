"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deduceRelationDirection = exports.RelationDirection = void 0;
var RelationDirection;
(function (RelationDirection) {
    RelationDirection["FROM"] = "from";
    RelationDirection["TO"] = "to";
})(RelationDirection || (exports.RelationDirection = RelationDirection = {}));
const deduceRelationDirection = (currentObjectId, relationMetadata) => {
    if (relationMetadata.fromObjectMetadataId === currentObjectId) {
        return RelationDirection.FROM;
    }
    if (relationMetadata.toObjectMetadataId === currentObjectId) {
        return RelationDirection.TO;
    }
    throw new Error(`Relation metadata ${relationMetadata.id} is not related to object ${currentObjectId}`);
};
exports.deduceRelationDirection = deduceRelationDirection;
//# sourceMappingURL=deduce-relation-direction.util.js.map