export const allExportedApi = () => {

  //fetch call to action api for all pages


  const fetchTestimonial = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/testimonial?fields=acf&acf_format=standard`)
    let data = await response.json()
    return data
  }


  const fetchCallToAction = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/call_to_action?fields=acf&acf_format=standard`)
    let data = await response.json()
    return data
  }

  // fetch home page api
  const HomeApi = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=home&fields=acf&acf_format=standard`);
    let data = await response.json();
    return data;
  };

  // fetch About page api
  const AboutApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=about&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  };

  // fetch portfolio page api
  const portfolioApi = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=portfolio&fields=acf&acf_format=standard`);
    let result = await response.json();
    return result;
  };

  // fetch Our Service page api
  const ServiceApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=our-services&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  };

  // fetch meet our team page api
  const meetOurTeamPage = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=meet-our-team&fields=acf&acf_format=standard`);
    let result = await response.json();
    return result;
  };

  // fetch Blog page api
  const BlogPageApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=blogs&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  };



  // fetch Our products page api
  const ProductPageApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=products&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  }


  // fetch Courses page api
  const CoursesPageApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=courses&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  }




  // fetch contact us page api
  const contactUsPageApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=contact-us&fields=acf&acf_format=standard`)
    let response = await data.json()
    return response
  }

  // fetch our internship page api
  const internshipPageApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=our-internship&fields=acf&acf_format=standard`)
    let response = await data.json()
    return response;
  }


  // fetch our multistepFormApi page api
  const multistepFormApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=multistep-popup-form&fields=acf&acf_format=standard`)
    let response = await data.json()
    return response;
  }

  // fetch our Career page api
  const careerPageApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=career&fields=acf&acf_format=standard`)
    let response = await data.json()
    return response;
  }

  // fetch Terms and conditions page Api
  const TermsandConditions = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=terms-and-conditions&fields=acf&acf_format=standard`)
    let response = await data.json()
    return response;
  }
  // fetch Privacy Policy page Api
  const PrivacyPolicy = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=privacy-policy&fields=acf&acf_format=standard`)
    let response = await data.json()
    return response;
  }


  // fetch pageNotFound api
  const pageNotFound = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/pages?slug=page-not-found&fields=acf&acf_format=standard`)
    let response = await data.json()
    return response;
  }


  // fetch all services template api
  const fetchAllServices = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/services?per_page=100&fields=acf&acf_format=standard`);
    let data = await response.json();
    return data;
  };

  // fetch single services template api
  const fetchSingleService = async (slug) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/services?slug=${slug}&fields=acf&acf_format=standard`);
    let result = await response.json();
    return result;
  };

  // fetch all portfolio api
  const fetchAllportFolio = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/portfolio?fields=acf&acf_format=standard`);
    let data = await response.json();
    return data
  };


  // fetch single portfolio api
  const fetchSingleportFolio = async (slug) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/portfolio?slug=${slug}&fields=acf&acf_format=standard`);
    let result = await response.json();
    return result;
  };

  // fetch meet our team api
  const fetchMeetOurTeam = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/meet_our_team?per_page=100&fields=acf&acf_format=standard`);
    let result = await response.json();
    return result;
  };

  // fetch all blog posts api
  const AllBlogPOsts = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/blog?all_categories=true&per_page=100&fields=acf&acf_format=standard`);
    const data = await response.json();

    return data;
  };


  // fetch all courses api
  const AllCourses = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/course?course_categories=true&per_page=100&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  };

  //fetch all Products api
  const AllProducts = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/product?per_page=100&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  }

  //fetch all internships api
  const ourInternships = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/internship?per_page=100&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  }

  // fetch Single Internships api
  const fetchSigleInternship = async (slug) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/internship?slug=${slug}&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  }

  // fetch Single product api
  const fetchSigleProducts = async (slug) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/product?slug=${slug}&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  }


  // fetch single Course api
  const fetchSingleCourse = async (slug) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/course?slug=${slug}&fields=acf&acf_format=standard`);
    let result = await response.json();
    return result;
  };
  // fetch single Blog post api
  const SingleBlogPost = async (slug) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/blog?slug=${slug}&fields=acf&acf_format=standard`);
    let result = await response.json();
    return result;
  };

  // fetch header footer
  const fetchHeaderFooter = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer&portfolio_location_id=hcms-menu-portfolio`);
    let response = await data.json();
    return response;
  };


  // fetch all services categories

  const fetchServicesPosts = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/services?category=allparent&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  }

  const fetchParentandChildPosts = async (slug) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/services?category=${slug}&sub-category=all&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  }


 




  const fetchSingleChildPosts = async (slug) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/services?sub-category=${slug}&fields=acf&acf_format=standard`);
    let response = await data.json();
    return response;
  }

   




  //**************************   fetch forms apis  ***************************//


  // job form api

  const fetchJobFormApi = async (userData) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/contact-form-7/v1/contact-forms/902/feedback`, userData)
    let response = await data.json()
    return response
  }


  // contact us form api

  const fetchContactFormApi = async (userData) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/contact-form-7/v1/contact-forms/942/feedback`, userData)
    let response = await data.json()
    return response
  }


  // apply for job api

  const fetchApplyForJobApi = async (userData) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/contact-form-7/v1/contact-forms/944/feedback`, userData)
    let response = await data.json()
    return response
  }


  const fetchInternShipForApi = async (userData) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/contact-form-7/v1/contact-forms/1376/feedback`, userData)
    let response = await data.json()
    return response
  }

  const fetchJoinCourseFormApi = async (userData) => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/contact-form-7/v1/contact-forms/2211/feedback`, userData)
    let response = await data.json()
    return response
  }

  






  return {
    fetchTestimonial,
    fetchCallToAction,
    HomeApi,
    AboutApi,
    portfolioApi,
    ServiceApi,
    meetOurTeamPage,
    BlogPageApi,
    ProductPageApi,
    CoursesPageApi,
    contactUsPageApi,
    internshipPageApi,
    multistepFormApi,
    careerPageApi,
    TermsandConditions,
    PrivacyPolicy,
    pageNotFound,
    fetchAllServices,
    fetchSingleService,
    fetchAllportFolio,
    fetchSingleportFolio,
    SingleBlogPost,
    fetchMeetOurTeam,
    AllBlogPOsts,
    AllCourses,
    AllProducts,
    ourInternships,
    fetchSigleInternship,
    fetchSigleProducts,
    fetchSingleCourse,
    fetchHeaderFooter,
    fetchServicesPosts,
    fetchParentandChildPosts,
    fetchSingleChildPosts,
    fetchJobFormApi,
    fetchContactFormApi,
    fetchApplyForJobApi,
    fetchInternShipForApi,
    fetchJoinCourseFormApi

  };

};

export const BLOG_PAGE_SIZE = 12;
export const PRODUCTS_PAGE_SIZE = 12;
export const PORTFOLIO_PAGE_SIZE = 6;
export const COURSE_PAGE_SIZE = 6;
export const INTERNSHIP_PAGE_SIZE = 6;