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

const getSideBanner = async () => {
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

const enrollToCourse = async (courseId, email) => {
  const query =
    gql`
    mutation MyMutation {
      createUserEnrollCourse(
        data: {
          userEmail: "` +
    email +
    `"
          courseId: "` +
    courseId +
    `"
          courseList: { connect: { slug: "` +
    courseId +
    `" } }
        }
      ) {
        courseId
        id
      }
      publishManyUserEnrollCoursesConnection {
        edges {
          node {
            id
          }
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const checkUserEnrolled = async(courseId, email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(where: { courseId: "` +
    courseId +
    `", userEmail: "`+email+`" }) {
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
}

const getUserEnrolledCourseDetails = async(id, email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(where: { id: "` +
    id +
    `", userEmail: "` +
    email +
    `" }) {
        courseId
        id
        courseList {
          autor
          banner {
            url
          }
          chapters {
            ... on Chapter {
              id
              name
              shortDesc
              video {
                url
              }
            }
          }
          description
          free
          id
          name
          totalChapters
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;

}

export default {
  getCourseList,
  getSideBanner,
  getCourseBySlug,
  enrollToCourse,
  checkUserEnrolled,
  getUserEnrolledCourseDetails,
};
