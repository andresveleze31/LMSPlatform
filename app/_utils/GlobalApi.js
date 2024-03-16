const { gql, default: request } = require("graphql-request");

const MASTER_URL =
  "https://api-us-west-2.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getCourseList = async() => {

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
      }
    }
  `;

  const result = await request(MASTER_URL,query);
  return result;
}

export default {
  getCourseList,
};