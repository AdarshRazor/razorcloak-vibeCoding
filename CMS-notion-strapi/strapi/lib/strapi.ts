import { Blog, ApiResponse } from './types';

// Use environment variable for API URL, fallback to localhost for development
const API_URL = process.env.STRAPI_PUBLIC_API_KEY || "http://localhost:1337/api";

export const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch(`${API_URL}/blogs?populate=*`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as ApiResponse<Blog[]>;
    return data.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const fetchBlogBySlug = async (slug: string): Promise<Blog | null> => {
  try {
    const response = await fetch(
      `${API_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as ApiResponse<Blog[]>;
    return data.data[0] || null;
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    throw error;
  }
}; 