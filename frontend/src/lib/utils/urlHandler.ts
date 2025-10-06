export const getStrapiMediaUrl = (url: string | undefined): string => {
  if (!url) return "";

  // If URL is already absolute, return as is
  if (url.startsWith("http")) {
    return url;
  }

  // If URL starts with /uploads, construct full URL
  if (url.startsWith("/uploads")) {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    return `${baseUrl}${url}`;
  }

  return url;
};