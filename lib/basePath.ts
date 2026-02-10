// Helper function to prepend basePath to asset URLs
export const assetPath = (path: string): string => {
  const basePath = process.env.__NEXT_PUBLIC_BASEPATH || '';
  return basePath + path;
};
