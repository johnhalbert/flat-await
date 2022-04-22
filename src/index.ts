export default function flatAwait(promise: Promise<any>): Promise<any> {
  return promise
    .then((result: any) => ([null, result]))
    .catch((error: any) => ([error, null]));
}
