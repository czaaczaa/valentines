// Helper function to prepend basePath to asset URLs
export const assetPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASEPATH || '/valentines';
  return basePath + path;
};
