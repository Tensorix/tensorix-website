export function canonicalRedirect(request: Request): Response | null {
  const url = new URL(request.url);
  if (url.hostname === 'tensorix.org' || (url.hostname.endsWith('.tensorix.org') && url.hostname !== 'www.tensorix.org')) {
    url.protocol = 'https:';
    url.hostname = 'www.tensorix.org';
    url.port = '';
    return Response.redirect(url.toString(), 308);
  }
  return null;
}
export default { fetch(request: Request, env: { ASSETS: { fetch(request: Request): Promise<Response> } }) { return canonicalRedirect(request) ?? env.ASSETS.fetch(request); } };
