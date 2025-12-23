const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

console.log("API Base URL:", BASE_URL);

/**
 * Generic API request handler
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  console.log("API Request to:", url);
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  // Remove Content-Type for FormData
  if (options.body instanceof FormData) {
    delete config.headers["Content-Type"];
  }

  try {
    const response = await fetch(url, config);
    console.log("API Response status:", response.status);
    const data = await response.json();

    if (!response.ok) {
      console.error("API Error response:", data);
      throw new Error(data.message || `API Error: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`API Request failed for ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Product API Methods
 */
export const productAPI = {
  /**
   * Get all products
   */
  getProducts: async () => {
    return apiRequest("/products");
  },

  /**
   * Search products by keyword
   */
  searchProducts: async (query, limit = 5) => {
    const params = new URLSearchParams({
      q: query,
      limit: limit.toString(),
    });
    return apiRequest(`/products/search?${params}`);
  },

  /**
   * Get product by ID
   */
  getProductById: async (id) => {
    return apiRequest(`/products/${id}`);
  },
};

/**
 * Contact/Enquiry API Methods
 */
export const contactAPI = {
  /**
   * Submit contact form enquiry
   */
  submitEnquiry: async (enquiryData) => {
    try {
      // Send to backend if needed
      // const response = await apiRequest("/contact", {
      //   method: "POST",
      //   body: JSON.stringify(enquiryData),
      // });

      // Send email via Web3Forms
      const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY;

      if (!web3formsKey) {
        console.warn("Web3Forms access key not configured");
        return { success: false, message: "Email service not configured" };
      }

      const formData = new FormData();
      formData.append("access_key", web3formsKey);
      formData.append(
        "subject",
        `New Contact Enquiry from ${enquiryData.name}`
      );
      formData.append("from_name", enquiryData.name);
      formData.append("email", enquiryData.email);
      formData.append("name", enquiryData.name);
      formData.append("phone", enquiryData.phone || "Not provided");
      formData.append("company", enquiryData.company || "Not provided");
      formData.append("message", enquiryData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      throw error;
    }
  },
};

// Default export with all API methods
export default {
  productAPI,
  contactAPI,
};
