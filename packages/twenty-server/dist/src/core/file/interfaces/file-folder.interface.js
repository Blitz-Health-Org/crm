"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileFolder = void 0;
const graphql_1 = require("@nestjs/graphql");
var FileFolder;
(function (FileFolder) {
    FileFolder["ProfilePicture"] = "profile-picture";
    FileFolder["WorkspaceLogo"] = "workspace-logo";
    FileFolder["Attachment"] = "attachment";
    FileFolder["PersonPicture"] = "person-picture";
})(FileFolder || (exports.FileFolder = FileFolder = {}));
(0, graphql_1.registerEnumType)(FileFolder, {
    name: 'FileFolder',
});
//# sourceMappingURL=file-folder.interface.js.map