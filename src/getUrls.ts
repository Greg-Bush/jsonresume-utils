export default function getUrls(obj?: { url?: string, urls?: string[]}) {
    return obj && (obj.url && [obj.url] || obj.urls);
}