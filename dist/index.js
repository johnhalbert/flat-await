export default function flatAwait(promise) {
    return promise
        .then((result) => ([null, result]))
        .catch((error) => ([error, null]));
}
//# sourceMappingURL=index.js.map