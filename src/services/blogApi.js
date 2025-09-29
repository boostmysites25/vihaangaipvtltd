const API_BASE_URL = 'https://blogplatform-backend-cloudinary-five.vercel.app';

/**
 * Fetch all published blogs
 * @returns {Promise<Object>} Response with blogs array and pagination info
 */
export const fetchPublishedBlogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs/published`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching published blogs:', error);
    throw error;
  }
};

/**
 * Fetch a single blog by slug
 * @param {string} slug - The blog slug
 * @returns {Promise<Object>} Response with blog data
 */
export const fetchBlogBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs/slug/${slug}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Blog not found');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    throw error;
  }
};
