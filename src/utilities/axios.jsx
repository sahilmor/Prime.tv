import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGJmMmVhMzc2Y2RjYWFkNTgxNTk4NTJiMzAzYjI0MyIsIm5iZiI6MTcyNTI3OTgzMC45MjAyMzYsInN1YiI6IjY2ZDFmN2Q1MTMyMzFhNjU4MjAxYmFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T48Cqsw1d-5tDu05xacZCqkhIeCD9PPbWZjcV5RzMIQ'
      },
});

export default instance;