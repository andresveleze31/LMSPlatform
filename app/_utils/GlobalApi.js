const { gql, default: request } = require("graphql-request");

const MASTER_URL =
  "https://api-us-west-2.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists(first: 20, orderBy: createdAt_DESC) {
        id
        name
        totalChapters
        free
        chapters {
          ... on Chapter {
            id
            name
            video {
              id
              url
            }
            chapterNumber
            shortDesc
          }
        }
        description
        banner {
          url
        }
        autor
        slug
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getSideBanner = async() => {
  const query = gql`
    query GetSideBanner {
      sideBanners {
        id
        name
        banner {
          id
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getCourseBySlug = async (courseId) => {
  const query =
    gql`
    query GetCourseBySlug {
      courseList(where: { slug: "` +
    courseId +
    `" }) {
        autor
        banner {
          id
          url
        }
        chapters {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        free
        name
        id
        slug
        totalChapters
        description
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCourseList,
  getSideBanner,
  getCourseBySlug
};
